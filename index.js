const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Product = require('./models/product.model.js'); // Ensure this path is correct
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




//get by id
app.get('/api/products/:id',async (req, res) => {
  try{
      const product = await Product.findById(id);
}catch(err){
  res.status(404).json({message: 'Product not found'});
  
}
  });

//api for getting products from database
app.get('/api/products',  async (req, res) => {
  try{
      const products =  await Product.find({});

    res.status(200).json(products);

  }
  catch{
    res.status(500).json({message: 'Products not found'});
  }
});





// Create a new product
app.post('/api/products', async (req, res) => {
  try {
    // Corrected: Use `Product` (the model) and `req.body`
    await Product.create(req.body);
    res.status(200).json({message: 'Product created successfully'});
  } catch (err) {
    res.status(500).json({ err: message.err});
  }
});


//update product
app.put('/api/products/:id', async (req, res) => {
  try{

    const {id} = req.params;
    await Product.findByIdAndUpdate(id, req.body);
    if(!Product){
      res.status(404).json({message: 'Product not found'})
    }
    else{
const UpdateProduct = await Product.findById(id);
res.status(200).json(UpdateProduct);



    }

  }catch{
    res.status(500).json({message: 'Product not found'});
  }
});
//delete product
app.delete('/api/products/:id', async (req, res) => {
  try{

    const {id} = req.params;
   await Product.findByIdAndDelete(id);
    if(!Product){
      res.status(404).json({message: 'Product not found'})
    }
    else{
      res.status(200).json({message: 'Product deleted successfully'});
    }
  }
  catch(err){
    res.status(500).json({err:message.err});
  }
});
