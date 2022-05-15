const Product = require("../models/products");

const getAllTasks = async (req, res) => {
  const { featured, company, name } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  const products = await Product.find(queryObject);
  res.status(200).send({ products });
};

module.exports = {
  getAllTasks,
};
