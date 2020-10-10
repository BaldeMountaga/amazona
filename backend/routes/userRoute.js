const express = require('express');
const User = require('../models/userModel');

const router = express.Router();
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
            email: signinUer.emit,
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
        res.status(401).send( {msg: 'Invalid Invalid User Data'})
    }
})

router.get("/createadmin", async (req, res) => {
   try {
        const user = new User({
            name: 'Balde',
            email: 'baldemtaga@gmail.com',
            password: '664481376',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);
   } catch (error) {
       res.status(404).send({ msg: error.message });
   }
})

module.exports = router;