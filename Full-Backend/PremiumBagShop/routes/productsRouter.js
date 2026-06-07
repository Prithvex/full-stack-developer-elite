const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

//this is our upload route --> input ka name image hain
router.post("/", upload.single("image"), async (req, res)=>{
  
try {
    let {name, price, discount, bgcolor, panelcolor, textcolor} = req.body;
  
    let product =  await productModel.create({
    //image ka data bufer hona chahiye 
    image: req.file.bufer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
  })
    req.flash("Success", "Product Created Successful")
    res.redirect("/owners/admin");

 }  
 catch (err){
    res.send(err.message);
 }

});

//export kia hain to app me require kar lo 
module.exports= router;
