const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  caption: String,
  images: String,
  price: String,
  Tags: String,
});

module.exports = mongoose.models.Product || mongoose.model('Product',ProductSchema) 
