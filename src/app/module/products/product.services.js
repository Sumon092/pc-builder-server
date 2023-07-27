const Product = require("./products.model.js");

// Create a new product
async function createProduct(productData) {
  try {
    const newProduct = new Product(productData);
    return await newProduct.save();
  } catch (error) {
    throw new Error("Failed to create product.");
  }
}

async function getProductsByCategory(category) {
  try {
    const products = await Product.find({ category: category });
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products.");
  }
}

module.exports = {
  createProduct,
  getProductsByCategory,
};
