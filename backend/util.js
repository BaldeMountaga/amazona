//const { config } = require( 'dotenv/types');
const jwt = require('jsonwebtoken');
const config = require('./config');
const GridFSStorage = require('multer-gridfs-storage');
const multer = require('multer');
const { path } = require('./server');


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
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
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
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: "uploads"
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({storage})

module.exports= { getToken, isAuth, isAdmin, getAuthToken, upload }