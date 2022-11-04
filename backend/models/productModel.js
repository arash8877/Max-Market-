const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    data: Buffer ,
    contentType: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number
  },
  qty: {
    type: Number
  },
 
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;