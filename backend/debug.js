require('dotenv').config();

const config = require('./config');


console.log("PORT: ", process.env.PORT);
console.log("MONGODB_URI: ", config.MONGODB_URI);