//const { config } = require( 'dotenv/types');
const jwt = require('jsonwebtoken');
const config = require('./config');

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

const isAdmin = (req, res, next) =>{
    if(req.user && req.user.isAdmin){
        return next();
    }
    return res.status(401).send({ msg: 'Admin Token is not valid' });
}


const getAuthToken = (request) => {
    const auth = request.get("authorization");
    if (auth && auth.toLowerCase().startsWith('bearer')) {
        return auth.substring(6)
    }
    return null;
}

module.exports= { getToken, isAuth, isAdmin, getAuthToken }