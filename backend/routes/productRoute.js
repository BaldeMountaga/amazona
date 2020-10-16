const express = require('express');
const multer = require('multer');
const Product = require('../models/productModel');
const {isAuth, isAdmin, upload} = require('../util.js');
const router = express.Router();

//requesting a product list
router.get('/', async (req, res) =>{
    const products = await Product.find({});
    console.log("All Products", products);
    res.send(products);
});

//get product by id
router.get('/:id', async (req, res) =>{
    const product = await Product.findOne({_id: req.params.id});
    if(product){
        res.send(product);
    }else{
        res.status(404).send({ msg: 'Product not found'});
    }
    
});

//creating a product from the database
router.post('/', isAuth, isAdmin, async (req, res) =>{
    // upload.single('image')
    console.log(upload)
    // code added
    console.log(req.body);

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        // rating: req.body.rating,
        // numReviews: req.body.numReviews
    });

    // let productImage = new Image({
    //     caption: `Image ${req.file.filename}`,
    //     filename: req.file.filename,
    //     fileId: req.file.id
    // })   
  
    // product.image = req.file.filename; the file name declaration is comment
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
        // product.image = req.body.image;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        // product.rating = req.body.rating;
        // product.numReviews = req.body.numReviews;

        const updatedProduct= await product.save();
        if(updatedProduct){
            return res.status(200).send({ msg: "New Product Updated", data: updatedProduct })
        }
    }
    return res.status(500).send({ msg: "Error in updating Product."});  
})

//delete product

router.delete('/:id', isAuth, isAdmin, async (req, res) =>{
    const deletedProduct = await Product.findById(req.params.id);
    if(deletedProduct){
        await deletedProduct.remove();
        res.send({ msg: "Product Deleted"});
    }
    res.send("Error in Deletion.");
})

/**creating an upload image file */

// let storage = multer.diskStorage({
//      destination:(req, res, cb) => {
//         cb(null, 'uploads/')
//      },
//      filenames:(req, file, cd) => {
//         cb(null, `${Date.now()}_${file.originalname}`)
//     },
//     fileFilter: (req, file, cb) => {
//         const ext = this.patch.extname(file.originalname);
//         if(ext !== '.mp4' || ext !== '.WEBM'){
//             return cb(res.status(404).send('only mp4 and WEBM  files are supported'), false)
//         }
//         cb(null, true);
//     }
// })

// var uploader = multer ({storage: storage});

// router.post('/', uploader.single('image'), async (req, res, next) =>{
    
//     const productDto = Object.assign({}, );
//     const product = new Product(productDto); //{image: req.file.path.replace(/\\/g, "/"),}
//     await product.save()
//         .then((savedProduct) => {
//             res.json(savedProduct);
//         })
//         .catch((err) => {
//             if(err instanceof multer.MulterError){
//                 return res.status(500).json(err);
//             }else if (err){
//                 return res.status(500).json(err);
//             }
//         })
// })
module.exports = router;