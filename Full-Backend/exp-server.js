import express from 'express';

const app = express();

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