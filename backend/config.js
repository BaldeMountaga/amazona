
require('dotenv').config();

const MONGODB_URI = process.env.MongoDB_URI;
const JWT_SECRET = process.env.JWT_SECRET || 'somethingsecret';
const PORT = process.env.PORT;  
const MONGOOSE_OPTS = {
    useUnifiedTopology: true ,
    useNewUrlParser: true,
    useCreateIndex: true
}

module.exports = {
    MONGODB_URI,
    PORT,
    MONGOOSE_OPTS,
    JWT_SECRET
}

