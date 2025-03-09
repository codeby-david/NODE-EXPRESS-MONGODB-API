const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema(
{
name:{
  type:String,
  required:[true, 'Product name required']
},
quantity:{
  type:Number,
  required:false,
  default:0

},
price:{
  type:Number,
  required:[true, 'Product price required'],
  default:0
},
image:{
  type:String,
  required:false
},

},
{
  timeStamp:true
}

);

const product = mongoose.model("Product", ProductSchema);

module.exports = product;
