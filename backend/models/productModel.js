const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: ,
  },
  description: {
    type: String,
  },
  price: {
    type: Number
  },
  qty: {
    type: number,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;