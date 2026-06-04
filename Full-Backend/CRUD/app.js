const express = require('express');
const app = express();

const userModel = require('./usermodel');
const usermodel = require('./usermodel');


app.get('/',(req, res) =>{
    res.send("Can I get a houyaaaa!!!! aaaaaaaaaaaaa");
});

//Ab hum CRUD operation perform kar sakte hain 

app.get('/create', async (req, res) =>{
    //this is async code console.log ke baad me chalega
    // so use async awaits 
    let createuser = await userModel.create({
        name: "Light",
        email: "iamdetective@gmail.com",
        username: "kira",
    })

    res.send(createuser);
})

app.get('/read', async (req, res) => {
    let users =await userModel.find(); // to read all 
    // let users =await userModel.findOne({username:"Kira"}); // findOne --> this finds the single user 
    res.send(users);

});


app.get('/update', async (req, res) => {

    const updateuser = await userModel.findOneAndUpdate(
        { username: "kira" },      // search condition
        { name: "Light Yagami" },  // update
        { new: true }              // updated document return karega
    );

    res.send(updateuser);
});

app.get('/delete', async (req, res) => {
    let users =await userModel.findOneAndDelete({username:"kk"}); 
    res.send(users);

});

app.listen(3000);