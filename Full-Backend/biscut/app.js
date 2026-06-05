const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

//jwt 
const jwt = require('jsonwebtoken');
// bcrypt use karte hain 
const bcrypt = require('bcrypt');

//important for cookie operation
app.use(cookieParser());

app.get("/", (req, res) =>{
    //setting a cookie (server se browser pe data save karva dena)
    res.cookie("name", "Prithvii");
    res.send("done");
})

//ab aap browser se kisi bhi route pe jaoge cookie chipkti jayegi by default 
app.get("/read", (req, res) =>{
    console.log(req.cookies);
    res.send("Cosole me cookie dekh");
})
//this is bcrypt 
const password = "Thisismypass";

app.get("/bcrypt", (req, res) => { 
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).send("Error generating salt");
        }
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).send("Error hashing password");
            }
            console.log(hash);
            res.send(hash);
        });
    });
});

//compare the bcrypt string 
const hash = "$2b$10$wvgekLRthaR7Ngx5eEa9xOmQFlCDSmHFhGr2tpjhEZAj5LiIrwroG";

bcrypt.compare(password, hash, function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result); // true or false
});

//lets dive into jeson web token 


app.get("/jwt", function (req, res) {
    // Secret key ko bahut hi secret rakhna padta hai
    const token = jwt.sign(
        { email: "prithvi@example.com" },
        "secret"
    );
    //Token browser ko bhej dete hain 
    res.cookie("token", token);
    res.send(token);
    console.log(token);
});

//checking the token is send to browser or not 
app.get("/check", (req, res) => {
    console.log(req.cookies.token);

    res.send("Token checked");
});

//Lets verify the token 
app.get("/verify", (req, res) => {
   let dataCheck=  jwt.verify(req.cookies.token, "secret");

    res.send(dataCheck);
});





app.listen(3000, function(){
    console.log("Server starts successful")
});