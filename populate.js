require("dotenv").config();
const connectDB = require("./db/connect");
const jsonProducts = require("./products.json");
const product = require("./models/products");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(jsonProducts);
    console.log("SUCCESS!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
