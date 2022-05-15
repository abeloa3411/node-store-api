require("dotenv");
const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://abel:0002@Cluster0.ndg18.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
