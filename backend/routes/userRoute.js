// const express = require('express');
// const User = require('../models/userModel');

// const router = express.Router();

// router.get("/createadmin", async (req, res) => {
//    try {
//         const user = new User({
//             name: 'Balde',
//             email: 'baldemtaga@gmail.com',
//             password: '664481376',
//             isAdmin: true
//         });

//         const newUser = await user.save();
//         res.send(newUser);
//    } catch (error) {
//        res.status(404).send({ msg: error.message });
//    }
// })

// module.exports = router;