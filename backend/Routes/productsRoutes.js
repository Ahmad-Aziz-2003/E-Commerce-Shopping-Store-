const express = require("express");
const multer = require("multer");
const path = require("path");
const Product = require('../Models/Product.js');
const port = 4002; // Import the port variable

let router = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

// Configure multer with storage engine
const upload = multer({ storage: storage });

// Route for uploading images
router.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}` // Use the port variable here
    });
});

// Route for adding a product
router.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id = 1;

        if (products.length > 0) {
            let last_product = products[products.length - 1];
            id = last_product.id + 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();
        console.log("saved in db");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, error: "Error adding product" });
    }
});

/// for deleteing products
router.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creATING API geting all products kk
router.get('/allproduct',async(req,res)=>{
    let products = await Product.find({});
    console.log("Allp products fetched")
    res.send(products);
})

//creating end point for new collection data
router.get('/newcollections', async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NEw Collection fetched")
    res.send(newcollection);

})

//creating end point for popular in women data
router.get('/popularinwomen',async(req,res)=>{
    let products = await Product.find({category:"women"});
    let popularinwomen = products.slice(1).slice(-4);
    console.log("women popular  fetched")
    res.send(popularinwomen);

})
//creating end point for popular in women data
router.get('/latestfragrences',async(req,res)=>{
    let products = await Product.find({category:"Fragrence"});
    let latestfragrences = products.slice(1).slice(-4);
    console.log("fragrence popular  fetched")
    res.send(latestfragrences);

})


module.exports = router; // Corrected line
