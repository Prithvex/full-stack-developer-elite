const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema ({
    fullname: {
        type: String,
        minLength: 3,
        default: "Unknown User",
        trim : true,
    
    },
    email: String,
    password: String,
    products: {
    type: Array,
    default: [],
    },
    picture: String,
    gstin: String,

});

//export the mongoose 
module.exports= mongoose.model("owner", ownerSchema);

 
