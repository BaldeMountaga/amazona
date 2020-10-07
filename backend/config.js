// export default {
//     MONGODB_URL: ProcessingInstruction.env.MONGODB_URL || 'mongodb://localhost/amazona'
// }

require('dotenv').config();

const MONGODB_URI = process.env.MongoDB_URI;
const PORT = process.env.PORT;
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