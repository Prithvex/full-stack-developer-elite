const express = require('express');
const router = express.Router();

const ownerModel = require("../models/owners-models");


if (process.env.NODE_ENV === "development"){
    router.post("/create", async (req, res)=>{
        //checking  the whole database
        let owner = await ownerModel.find();
        if (ownerModel.length>0){
            return res.send(503).send("You dont have permission to create a new owner");
    }

    //body se aa raha hoga 
    let {fullname, email, password} =req.body;
        //we can create a new owner 
        let createdOwner= await ownerModel.create({
            fullname,
            email,
            password,
            gstin,
        });
        //created owner dikhega 
            res.status(201).send(createdOwner);
    });    
}

router.get("/admin", (req, res)=>{
    let success = req.flash("success");
    res.render("createproducts", {success});
});



//export kia hain to app me require kar lo 
module.exports= router;
