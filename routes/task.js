const express = require("express");
const router = express.Router();
const { getAllTasks } = require("../controllers/products");

router.route("/").get(getAllTasks);

module.exports = router;
