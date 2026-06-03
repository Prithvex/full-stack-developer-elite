const express= require('express');
const app = express();
//path bhi req hain (for path.join)
const path= require('path');


//setting up the parsers 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//for the css ye likho pehle and folder create karo 
// _dirname -- this is our current folder path 
app.use(express.static(path.join(__dirname, 'public')));  //all static forders

//setting up ejs  for ejs pages
app.set('view engine', 'ejs')
// Route
app.get('/', (req, res) => {
  res.send('Server Running is Fine, everything is OK');
});

app.get('/money', (req, res) => {
  res.render("index");
});

app.get('/calc', (req, res) => {
  res.render("calc.ejs");
});

app.get('/profile', (req, res) => {
  res.render("profile.ejs");
});

app.get('/profile/:username', (req, res) => {
  // req.param --> means aisa kuch bhi jiske aage colon hain
  res.send(`Welcome, ${req.params.username}`);
});

app.get('/profile/:username/:age', (req, res) => {
  // req.param --> means aisa kuch bhi jiske aage colon hain
  res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});