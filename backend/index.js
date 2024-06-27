const port =4002;
const express= require("express");
const app = express();
const mongoose=require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PH7DW07mOlkGGNsb1VuSNhTEBZzUEhnOiS4KRgkafrKGyELY6wbZgNMy3xHWI9qGoteIkNuQpLbgGYpFe8P5obo00sbjjqWXy")


const Product = require('./Models/Product.js');
const Users=require('./Models/Users.js');


const productsRoutes = require("./Routes/productsRoutes");
const userRoutes = require("./Routes/userRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const paymentRoutes = require("./Routes/paymentRoutes");
const fetchUser = require("./middleWare/fetchUser");

app.use(express.json());
app.use(cors());
 
//database connection with mongoDb
//mongodb+srv://ahmadgcu321:ahmadaziz786@cluster0.um5ys2s.mongodb.net/e-commerce
mongoose.connect("mongodb://localhost:27017/e-commerce");
//mongoose.connect("mongodb+srv://ahmadgcu321:ahmadaziz786@cluster0.um5ys2s.mongodb.net/e-commerce");


app.use('/images', express.static('upload/images'));
app.use("/product", productsRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/payment", paymentRoutes);
//api creation
app.get("/" ,(req,res)=>{
    res.send("express dsddd app is running")
})

//port listen
const server = app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});

server.on('error', (err) => {
    console.error('Server error:', err);
});























// app.post("/createcheckout", fetchUser, async (req, res) => {
    //     const { product } = req.body;
    
    //     const lineItems = product.map((item) => ({
    //         price_data: {
    //             currency: "inr",
    //             product_data: {
    //                 name: item.name,
    //                 images: [item.image]
    //             },
    //             unit_amount: item.price * 100,
    //         },
    //         quantity: item.quantity,
    //     }));
    
    //     try {
    //         const session = await stripe.checkout.sessions.create({
    //             payment_method_types: ["card"],
    //             line_items: lineItems,
    //             mode: "payment",
    //             success_url: "http://localhost:3000/success",
    //             cancel_url: "http://localhost:3000/cancel",
    //         });
    
    //         res.json({ id: session.id });
    //     } catch (error) {
    //         res.status(500).send({ error: "Failed to create checkout session" });
    //     }
    // });












































// //cereating cart data
// app.post('/addtocart', fetchUser,async(req,res)=>{
//     console.log("added",req.body,req.user);

//     let userData = await Users.findOne({_id:req.user.id});
//     userData.cartData[req.body.itemId]+=1;
//     await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.send("added cart");

// })

// //creating end point to remove product from cart data
// app.post('/removefromcart', fetchUser,async(req,res)=>{
//     console.log("removed",req.body,req.user);

//     let userData = await Users.findOne({_id:req.user.id});
//     if(userData.cartData[req.body.itemId]>0)
//     userData.cartData[req.body.itemId]-=1;
//     await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.send("remove cart");

// })


// //creating end point to remove product from cart data
// app.post('/getcart', fetchUser,async(req,res)=>{
//     console.log("cart fetched");

//     let userData = await Users.findOne({_id:req.user.id});
//     res.json(userData.cartData);

// })



// //create functuon toi check the user tio fetch
// const fetchUser =async (req,res,next)=>{
//     const token = req.header('auth-token');
//     if(!token){
//         res.status(401).send({errors:"please authenticate uinsg valid token "})
//     }
//     else{
//         try {
//             const data =jwt.verify(token,'secret_ecom');
//             req.user = data.user;
//             next();
//         } catch (error) {
//             res.status(401).send({errors:"please authenticate using a valid token"})
//         }
//     }
// }




// // creating end point for registering the user
// app.post('/signup',async (req,res)=>{

//     let check = await Users.findOne({email:req.body.email});
//     if(check){
//         return res.status(400).json({success:false,error:"existing user found with same email"})
    
//     }
//     let cart ={};
//     for (let i = 0; i < 300; i++) {
//         cart[i]=0;
        
//     }
//     const user =new Users({
//         name:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//         cartData:cart,
//     })
//     await user.save();

//     const data = {
//         user:{
//             id:user.id
//         }
//     }
//     const token = jwt.sign(data,'secret_ecom');
//     res.json({success:true,token})

// })

// //creating end point for user login
// app.post('/login',async (req,res)=>{
//     let user = await Users.findOne({email:req.body.email});
//     if(user){
//         const passCompare=req.body.password === user.password
//         if(passCompare){
//             const data ={
//                 user:{
//                     id:user.id
//                 }
//             }
//             const token =jwt.sign(data,'secret_ecom');
//             res.json({success:true,token});

//         }
//         else{
//             res.json({success:false,error:"wrong password"}); 
//         }
    
//     }
//     else{
//         res.json({success:false,error:"wrong email"}); 
//     }


// })



// // image storage engine
// // Define storage engine for multer
// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// // Configure multer with storage engine
// const upload = multer({ storage: storage });


// // creating upload endpoint for images
// //first to get images where uploadeds
// //when images uploaded it will create images url and success message
// app.use('/images',express.static('upload/images'))
// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`
//     })
// })


// app.post('/addproduct', async (req, res) => {
//     let products = await Product.find({});
//     let id;
//     if(products.length>0)
//     {
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id+1
//     }
//     else{
//         id=1;
//     }
//     const product = new Product({
        
//         id: id,
//         name: req.body.name,
//         image: req.body.image,
//         category: req.body.category,
//         new_price: req.body.new_price,
//         old_price: req.body.old_price,
//     });
//     console.log(product);
//     await product.save();
//     console.log("saved in db");
//     res.json({
//         success: true,
//         name: req.body.name,
//     });
// });

// /// for deleteing products
// app.post('/removeproduct',async (req,res)=>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("Removed");
//     res.json({
//         success:true,
//         name:req.body.name
//     })
// })


// //creATING API geting all products kk
// app.get('/allproduct',async(req,res)=>{
//     let products = await Product.find({});
//     console.log("Allp products fetched")
//     res.send(products);
// })
// //creating end point for new collection data
// app.get('/newcollections', async(req,res)=>{
//     let products = await Product.find({});
//     let newcollection = products.slice(1).slice(-8);
//     console.log("NEw Collection fetched")
//     res.send(newcollection);

// })

// //creating end point for popular in women data
// app.get('/popularinwomen',async(req,res)=>{
//     let products = await Product.find({category:"women"});
//     let popularinwomen = products.slice(1).slice(-4);
//     console.log("women popular  fetched")
//     res.send(popularinwomen);

// })
// //creating end point for popular in women data
// app.get('/latestfragrences',async(req,res)=>{
//     let products = await Product.find({category:"Fragrence"});
//     let latestfragrences = products.slice(1).slice(-4);
//     console.log("fragrence popular  fetched")
//     res.send(latestfragrences);

// })


