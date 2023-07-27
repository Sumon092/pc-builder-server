const express = require("express");
const cors = require("cors");
const productRoutes = require("./app/module/products/products.route.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
  res.send("pc builder app server is running");
});
module.exports = app;
