const express = require('express');
const app= express();
const userModel = require("./models/user");
const postModel = require("./models/post");



app.get("/", (req, res)=>{
    res.send("Kaise ho app log!")
})

app.get("/create", async (req, res)=> {

    let user = await userModel.create({
            username:"harsh",
            age:25,
            email:"harsh@gmail.com"
    });
    res.send(user);
})

app.get("/post/create", async (req, res)=> {
   let post= await postModel.create({
        postdata : "Hello kaise miya",
        user : "6a239d63646489d69d5283ab",

    })
    let user = await userModel.findOne({_id: "6a239d63646489d69d5283ab"}); //can use findById("id likho" )

    //user ke post array me id push  kar do 
    user.posts.push(post._id);
    //save karna padta hain changes 
    await user.save();
    res.send({user, post});
})


app.listen(3000);
