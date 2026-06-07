const mongoose = require("mongoose");

const userSchema = mongoose.Schema ({
    fullname: {
        type: String,
        minLength: 3,
        default: "Unknown User",
        trim : true,
    
    },
    email: String,
    password: String,
    //cart ek array hain jiske andr product ki id hogi 
    cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "product", // jo id aayegi vo product schema ki id hogi 
    }],
    orders: {
    type: Array,
    default: [],
    },
    contact: Number,
    picture: String,
});

//export the mongoose 
module.exports= mongoose.model("user", userSchema);

