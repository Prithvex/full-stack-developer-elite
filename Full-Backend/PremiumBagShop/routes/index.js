const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error, loggedin: false});
});

router.get("/shop", isloggedin,  async (req, res) =>{
    //yaha pe uploaded images show hogi by admin
    let product= await productModel.find();
    let success = req.flash("success");
    res.render("shop", {product, success});
});

router.get("/addtocart/:productid", isloggedin,  async (req, res) =>{
    //add to cart me upload wala functionality hain yaha 
    let user= await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.productid)
    await user.save();

    res.flush("Success", "Add to cart");
    res.redirect("/shop");
});


router.get("/cart", isloggedin,  async (req, res) =>{
   let user= await userModel.
   findOne({email: req.user.email})
   .populate("cart");

   const final = (Number(user.cart[0].price)+20)-Number(user.cart[0].discount);
   res.render("cart", { user });


    res.render("cart", {user, bill});
});

module.exports = router;