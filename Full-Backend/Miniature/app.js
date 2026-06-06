const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');
const postModel = require('./models/post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const crypto = require('crypto'); //for the image ke name ko difficult string banane ke liye 
const upload = require("./config/multerconfig");

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// ---------- PUBLIC ROUTES ----------
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.get('/profile/upload', (req, res) => {
    res.render("profileupload");
});

app.post('/upload',  isLoggedIn ,upload.single('image'), async (req, res) => {
    //changing the default file to uploaded file 
   let user =  await userModel.findOne({email: req.user.email})
    user.profilepic =  req.file.filename;
    await user.save();
    res.redirect("/profile")



});

// ---------- REGISTER ----------
app.post('/register', async (req, res) => {
    try {
        const { username, name, age, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        const hash = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            username,
            name,
            age,
            email,
            password: hash,
        });

        const token = jwt.sign(
            { email: newUser.email, userid: newUser._id },
            process.env.JWT_SECRET || "secretkeyyy"
        );

        res.cookie("token", token);
        res.redirect("/profile");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error during registration");
    }
});

// ---------- LOGIN ----------
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).send("Invalid email or password");
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.redirect("/login");
        }

        const token = jwt.sign(
            { email: existingUser.email, userid: existingUser._id },
            process.env.JWT_SECRET || "secretkeyyy"
        );

        res.cookie("token", token);
        res.redirect("/profile");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error during login");
    }
});

// ---------- LOGOUT ----------
app.get('/logout', (req, res) => {
    res.cookie("token", "", { maxAge: 1 });
    res.redirect("/login");
});

// ---------- MIDDLEWARE ----------
function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect("/login");
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || "secretkeyyy");
        req.user = data;
        next();
    } catch (err) {
        res.cookie("token", "", { maxAge: 1 });
        return res.redirect("/login");
    }
}

// ---------- PROFILE (with currentUserId) ----------
app.get('/profile', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email }).populate("posts");
        if (!user) {
            res.cookie("token", "", { maxAge: 1 });
            return res.redirect("/login");
        }
        // Pass currentUserId for like toggle
        res.render("profile", { user, currentUserId: req.user.userid });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

// ---------- CREATE POST ----------
app.post('/post', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email });
        const { content } = req.body;
        const post = await postModel.create({
            user: user._id,
            content,
        });
        user.posts.push(post._id);
        await user.save();
        res.redirect("/profile");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating post");
    }
});

// ---------- LIKE / UNLIKE TOGGLE ----------
app.post('/like/:id', isLoggedIn, async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) return res.status(404).send("Post not found");

        const userId = req.user.userid;
        const likeIndex = post.likes.findIndex(id => id.toString() === userId);

        if (likeIndex === -1) {
            // Like
            post.likes.push(userId);
        } else {
            // Unlike
            post.likes.splice(likeIndex, 1);
        }

        await post.save();
        res.redirect("/profile");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

// ---------- EDIT POST (GET form) ----------
app.get('/edit/:id', isLoggedIn, async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) return res.status(404).send("Post not found");
        // Ensure the post belongs to the logged-in user
        if (post.user.toString() !== req.user.userid) {
            return res.status(403).send("Unauthorized");
        }
        res.render("edit", { post });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

// ---------- UPDATE POST (POST edit) ----------
app.post('/edit/:id', isLoggedIn, async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) return res.status(404).send("Post not found");
        if (post.user.toString() !== req.user.userid) {
            return res.status(403).send("Unauthorized");
        }

        post.content = req.body.content;
        await post.save();
        res.redirect("/profile");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));