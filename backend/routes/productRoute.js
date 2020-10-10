const express = require('express');
const Product = require('../models/proudctModel');
const {isAuth, isAdmin} = require('../util.js');
const router = express.Router();

//requesting a product list
router.get('/', async (req, res) =>{
    const products = await Product.find({});
    res.send(products);
})

router.post('/', isAuth, isAdmin, async (req, res) =>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews
    });
  
    const newProduct= await product.save();
    if(newProduct){
        return res.status(201).send({ msg: "New Product Created", data: newProduct })
    }
    return res.status(500).send({ msg: "Error in Creating Product."});

})

//update product
router.put('/:id', isAuth, isAdmin, async (req, res) =>{
    const productId = req.params.id;
    const product = await Product.findById({ _id: productId});

    if(product){

        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        product.rating = req.body.rating;
        product.numReviews = req.body.numReviews;

        const updateProduct= await product.save();
        if(updateProduct){
            return res.status(200).send({ msg: "New Product Updated", data: updateProduct })
        }
    }
    return res.status(500).send({ msg: "Error in updating Product."});  
})

//delete product
//only those whose is auth and admin can delete a product

router.delete('/:id', isAuth, isAdmin, async (req, res) =>{
    const deletedProduct = await Product.findById(req.params.id);
    if(deletedProduct){
        await deletedProduct.remove();
        res.send({ msg: "Product Deleted"});
    }
    res.send("Error in Deletion.");
})

module.exports = router;