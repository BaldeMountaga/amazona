const express = require('express');
const cors = require('cors');
const {products} = require('./data');
const config = require('./config');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute');
const bodyParser = require('body-parser')
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded)

// connexion to mongodb
mongoose.connect(config.MONGODB_URI, config.MONGOOSE_OPTS)
    .then(()=>{
        console.log("Successfully connected to the Database");
    })
    .catch(res => {
        console.error("Some error occured");
        console.error(res);
    })

// app.get('/api/products/:id', (req, res) => {  
//     const product = products.find( x => x._id === Number(req.params.id) );
//     if(product)
//         res.send(product);
//     else
//         res.status(404).send({ msg: "Product Not Found." });
// });

// app.get('/api/products', (req, res) => {  
//     res.send(data.products);
// });
// Note: there is no need for the static since I am requesting it from the database


app.use("/api/users", userRoute);
app.use('/api/products', productRoute);

app.get('/image/:image', async(req, res) => {
    // debugger;
    const db = mongoose.connection.db;
    const collection = db.collection('upload.files');
    const collectionChunks = db.collection('upload.chunks')

    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error'));
    // db.once('open', function cb(){
    //     console.log('Connection success');
    // })

    console.log(req.params.image)

    collection.find({filename: req.params.image}).toArray(function(err, docs){
        if (err){
            return res.status(500).send({error: "INTERNAL SERVER ERROR"})
        }
        if (!docs || docs.length === 0) {
            return res.status(404).send({error: "File Not Found"})
        }else {
            collectionChunks.find({files_id: docs[0]._id})
            .sort({n:1}).toArray(function(err, chunks){
                if (err) {
                    res.status(500).send({error: "ERROR DOWNLOADING FILE"})
                }
                if (!chunks || chunks.length === 0) {
                    res.status(404).send({error: "NO DATA"})
                }

                let fileData = [];
                for (let i=0; i<chunks.length; i++) {
                    fileData.push(chunks[i].data.toString('base64'));
                }

                let finalFile = 'data:' + docs[0].contentType + ';base64,'
                + finalData.join('');
                res.status(200).send({imageUrl: finalFile})
            })
        }
    })

})


module.exports = app;