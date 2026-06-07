const express = require("express");
const router = express.Router();

const { registerUser, loginUser, logoutUser } = require("../controllers/authcontroller");

router.get("/", (req, res) => {
    res.send("Hey it's working");
});

//make this in the auth controller
router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

module.exports = router;