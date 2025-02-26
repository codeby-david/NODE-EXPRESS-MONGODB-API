
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

// Start the server
app.listen(3000, () => {
  console.log("App is running at port 3000, perfectly listening");
});

// Define a route
app.get('/', (req, res) => {
  res.send("Hello there! Welcome to the home page of the app");
});

app.post('/api/products',(req, res) => {
  console.log(req.body);
  res.send(req.body);
})