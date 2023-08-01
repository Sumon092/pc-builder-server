const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["In Stock", "Out of stock"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyFeatures: {
    brand: { type: String },
    model: { type: String },
    specification: { type: String },
    port: { type: String },
    type: { type: String },
    resolution: { type: String },
    voltage: { type: String },
  },
  quantity: {
    type: Number,
    default: 0,
  },
  averageRating: {
    type: Number,
    min: 1,
    max: 5,
  },
  personalRating: {
    type: Number,
    min: 1,
    max: 5,
  },
  reviews: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
