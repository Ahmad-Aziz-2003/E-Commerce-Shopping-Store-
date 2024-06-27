const express = require("express");
const path = require("path");
const Users = require('../Models/Users.js');
const jwt = require("jsonwebtoken");
const port = 4002;

let router = express.Router();
const fetchUser = require("../middleWare/fetchUser.js");


//cereating cart data
router.post('/addtocart', fetchUser,async(req,res)=>{
    console.log("added",req.body,req.user);

    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("added cart");

})

//creating end point to remove product from cart data
router.post('/removefromcart', fetchUser,async(req,res)=>{
    console.log("removed",req.body,req.user);

    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("remove cart");

})


//creating end point to remove product from cart data
router.post('/getcart', fetchUser,async(req,res)=>{
    console.log("cart fetched");

    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);

})
module.exports = router;