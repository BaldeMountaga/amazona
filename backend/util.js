//const { config } = require( 'dotenv/types');
const jwt = require('jsonwebtoken');
const config = require('./config');
const GridFSStorage = require('multer-gridfs-storage');
const multer = require('multer');
const path = require('path')
const crypto = require('crypto');


const getToken = (user) =>{
    return jwt.sign({
       _id: user._id,
       name: user.name,
       email: user.email,
       isAdmin: user.isAdmin 
       
    }, config.JWT_SECRET, {
        expiresIn: '48h'
    })
}

//creating methods to authenticate users and admin
const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) =>{
            if(err){
                return res.status(401).send({ msg: 'Invalid Token' });
            }
            req.user = decode;
            next();
            return
        });
    }
    else{
        return res.status(401).send({ msg: 'Token is not supplied' });
    }
    
}

/**
 * MIddleware for validating that a user is an Admin
 *
 */
const isAdmin = (req, res, next) =>{
    if(req.user && req.user.isAdmin){
        return next();
    }
    console.log("User: ", req.user);
    return res.status(401).send({ msg: 'Admin Token is not valid' });
}


const getAuthToken = (request) => {
    const auth = request.get("authorization");
    if (auth && auth.toLowerCase().startsWith('bearer')) {
        return auth.substring(7)
    }else {return null}
    
}

/**
 * configure to add image to database
 */
const storage = new GridFSStorage({
    url: config.MONGODB_URI,
    file: (request, file) => {
        console.log("Uploading file");
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf)=> {
                if (err) {
                    console.log("Error occured");
                    return reject(err);
                }
                const filename = new Date().toISOString() + buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: "uploads"
                };
                resolve(fileInfo);
            });
        });
    }
});


const localStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})


const imageOnlyFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const localUpload = multer(
    {
        storage: localStorage, 
        limits: 1024 * 1024 * 4,
        fileFilter: imageOnlyFilter
    }
)

const cloudUpload = multer({
    storage: storage,
    fileFilter: imageOnlyFilter,
    limits: 1024 * 1024 * 4
})

module.exports= { getToken, isAuth, isAdmin, getAuthToken, cloudUpload, localUpload }