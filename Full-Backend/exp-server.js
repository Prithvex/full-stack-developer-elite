import express from 'express';
const app = express();

//Form Handling, Session and Cookies


//this is the format to read the data, jeson and xwww (in POSTMAN app )
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



// Middleware
app.use((req, res, next) => {
  console.log("MiddleWare Chalo");
  next();
});

// Route
app.get('/', (req, res) => {
  res.send('Server Running is Fine, everything is OK');
});

// Error route --> next likhna jaruri hain 
app.get('/pika', (req, res, next) => {
  next(new Error('Something Went Wrong'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Terminal pe dikhega

  res.status(500).send('Something Broke!'); // Browser pe dikhega
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});