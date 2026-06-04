//lets setup mongoose 

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');

const userSchema=  mongoose.Schema({
    //this means hr user ke pass aap kys kys dena chahate  ho!
    name : String,
    username : String,
    email : String
})

//model ko route me kaam karne ke liye exports karna anivary hain 
// fir use apne route me req. kar do ( app.js)
module.exports = mongoose.model("user", userSchema); // model ke name ka plurarise name ka model banega --> user ka users 
