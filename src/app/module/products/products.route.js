const express = require("express");
const router = express.Router();
const productController = require("./products.controller.js");

// Create a new product
router.post("/add", productController.createProduct);
router.get("/:category", productController.getProductsByCategory);
module.exports = router;
