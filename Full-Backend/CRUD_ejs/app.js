const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user')

app.set("view engine", "ejs"); // set ejs 
app.use(express.json()); //Middleware that parses incoming requests with JSON bodies.
app.use(express.urlencoded({ extended: true })); //Middleware that parses data sent from HTML forms
app.use(express.static(path.join(__dirname, 'public'))); //Serves static files

    app.get('/', (req, res) => {
        res.render("index");
    });

    app.get('/read', async (req, res) => {
        const users = await userModel.find();
    
        res.render("read", { users });
    });

    app.post('/create', async (req, res) => {
        let { name, email, image } = req.body;
    
        let createUser = await userModel.create({
            name,
            email,
            image
        });
    
        res.redirect('/read'); //redirect to initial 
    });

    app.get('/delete/:id', async (req, res) => {
        let users = await userModel.findOneAndDelete({_id: req.params.id});
    
        res.redirect("/read");
    });

    app.get('/edit/:id', async (req, res) => {
        let user= await userModel.findOne({_id: req.params.id});
    
        res.render("edit", {user})
    });

    //this is post route 
    app.post('/update/:id', async (req, res) => {
        let { name, email, image } = req.body;
        let user= await userModel.findOneAndUpdate({_id: req.params.id}, { name, email, image }, {new: true});
    
        res.redirect("/read");
    });



    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });