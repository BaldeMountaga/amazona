const express = require('express');
const User = require('../models/userModel');
const {getToken, getAuthToken} = require('../util');
const router = express.Router();
const jwt = require('jsonwebtoken');

//route for signing
router.post('/signin', async (req, res) =>{

    const signinUer = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    
    if(signinUer){
        res.send({
            _id: signinUer.id,
            name: signinUer.name,
            email: signinUer.email,
            isAdmin: signinUer.isAdmin,
            token: getToken(signinUer)
        })
    }
    else{
        res.status(401).send( {msg: 'Invalid Email or Password'})
    }
})

//route for register
router.post('/register', async (req, res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    const newUser = await user.save();
    
    if(newUser){
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.emit,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    }
    else{
        res.status(401).send( {msg: 'Invalid User Data'})
    }
})

router.get("/createadmin", async (req, res) => {
   try {
        const user = new User({
            name: 'Balde',
            email: 'baldemtaga@gmail.com',
            password: '123',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);
   } catch (error) {
       res.send({ msg: error.message });
   }
})


/**
 * Get user info given user authentication token
 */
router.get('/get-user', async(req, res)=> {
    const token = getAuthToken(req);
    try {
        const decryptedData = jwt.verify(token, process.env.JWT_SECRET);
        if (!token && !decryptedData.id) {
            res.status(401).send({error: "Invalid Authorization Token"})
        }
        user = await User.findById(decryptedData._id);
        console.log(decryptedData)
        res.status(200).send({
            name: user.name,
            email: user.email
        })

    } catch(exception) {
        console.log(exception);
        res.status(500).send({})
    }
})

module.exports = router;