const mongoose = require("mongoose");
const app = require("./app.js");
require("dotenv").config();
const port = process.env.PORT || 5000;

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  // await mongoose.connect("mongodb://127.0.0.1:27017/pc-builder");
  console.log("connected to database");
  app.listen(port, () => {
    console.log(`pc-builder server listening on ${port}`);
  });
}
main();
