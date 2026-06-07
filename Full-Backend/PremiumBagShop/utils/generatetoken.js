//moved the token here 

const jwt = require("jsonwebtoken");

const generatełoken = (user) => {
    console.log(process.env.JWT_KEY);
    return jwt.sign({ email:user.email, id: user._id }, process.env.JWT_KEY);
};
module.exports.generateToken;