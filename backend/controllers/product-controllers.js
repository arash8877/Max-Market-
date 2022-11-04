const products = require("../models/products");
const productModel = require("../models/productModel");

const getAllProducts = async (req, res, next) => {
  try {
    const result = await productModel.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

const getProduct = (req, res, next) => {
  const product = products.find((item) => {
    return item._id === req.params.id;
  });

  res.json(product);
};

exports.getAllProducts = getAllProducts;
exports.getProduct = getProduct;
