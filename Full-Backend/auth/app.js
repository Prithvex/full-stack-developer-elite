const cookieParser = require("cookie-parser");
const express = require("express");
const userModel = require("./models/user");
const jwt = require('jsonwebtoken');

const app = express();
const path = require('path');
const bcrypt = require('bcrypt');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
    //sab ko bahar nikalo 
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).send("Error generating salt");
        }

        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) {
                return res.status(500).send("Error hashing password");
            }

            try {
                let createUser = await userModel.create({
                    username,
                    email,
                    password: hash, //password ki value hash hogi 
                    age
                });
                
                //account ban gaya hain to login bhi karva digiye
                let token = jwt.sign({email}, "MyScretKey");
                //send the token to browser 
                res.cookie("token",token );
                res.send(createUser);



            } catch (error) {
                res.status(500).send("Error creating user");
            }
        });
    });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    let user = await userModel.findOne({email: req.body.email});
    if (!user) return res.send("Something is wrong ");

    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (result) {
            let token = jwt.sign({email: user.email}, "MyScretKey");
                //send the token to browser 
            res.cookie("token",token );
            res.send("yes you can login");
        }   
        else res.send("no you can't login");
    });

});


app.post("/logout", (req, res) => {
    res.cookie("token", ""); // set kiya hua token hat jayega  
    res.redirect("/");

});
  



  

app.listen(3000);