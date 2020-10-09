
require('dotenv').config();

const MONGODB_URI = process.env.MongoDB_URI;
const PORT = process.env.PORT;   // you should have it defined in the .env file
const MONGOOSE_OPTS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}


module.exports = {
    MONGODB_URI,
    PORT,
    MONGOOSE_OPTS
}

