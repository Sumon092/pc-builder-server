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
const getAllProductsByCategory = async () => {
  try {
    const productsByCategory = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          products: { $push: "$$ROOT" },
        },
      },
    ]);
    return productsByCategory;
  } catch (error) {
    throw new Error("Unable to get products by category");
  }
};

module.exports = {
  createProduct,
  getProductsByCategory,
  getAllProductsByCategory,
};
