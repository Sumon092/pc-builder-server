const productService = require("./product.services.js");

async function createProduct(req, res) {
  try {
    const productData = req.body;
    const product = await productService.createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product." });
  }
}
async function getProductsByCategory(req, res) {
  try {
    const category = req.params.category;
    const products = await productService.getProductsByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
}
module.exports = {
  createProduct,
  getProductsByCategory
};
