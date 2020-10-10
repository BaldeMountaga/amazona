const express = require('express');
const cors = require('cors');
const {products} = require('./data');
const config = require('./config');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute')
const bodyParser = require('body-parser')
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

// connexion to mongodb
mongoose.connect(config.MONGODB_URI, config.MONGOOSE_OPTS)
    .then(()=>{
        console.log("Successfully connected to the Database");
    })
    .catch(res => {
        console.error("Some error occured");
        console.error(res);
    })

app.get('/api/products/:id', (req, res) => {  
    const product = products.find( x => x._id === Number(req.params.id) );
    if(product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." });
});

app.get('/api/products', (req, res) => {  
    res.send(products);
});

app.use("/api/users", userRoute);

module.exports = app;