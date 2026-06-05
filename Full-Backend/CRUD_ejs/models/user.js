const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testapp1");

const userSchema= mongoose.Schema ({
    image: String, //ham url likh rahe hain isi liye image string hain 
    email: String,
    name: String
})

module.exports = mongoose.model('user', userSchema);
