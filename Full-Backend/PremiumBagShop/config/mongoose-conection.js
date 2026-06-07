const mongoose = require("mongoose");
const dbgr= require("debug")("development:mongoose"); //yaha pe kuch bhi likh sakte hain 
const config = require ('config');


mongoose
    .connect(`${config.get("MONGODB_URI")}/premiumbagshop`) //this is just a development phase url 
    .then (function(){
        console.log("Connected");
    })

    .catch(function(err){
        console.log(err);
    })

// this is centralise file for the mongoose connection
//export the mongoose connection
module.exports= mongoose.connection;
 
 
