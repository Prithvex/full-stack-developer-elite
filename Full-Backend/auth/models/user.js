const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/authtestapp");

const userSchema= mongoose.Schema ({
    image: String, //ham url likh rahe hain isi liye image string hain 
    email: String,
    password: String,
    age: Number, 
})

//app.js me req kar lo exported model ko 
module.exports = mongoose.model('user', userSchema);
