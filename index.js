const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.static("./Public"));
app.use(express.json());

app.use("/api/v2/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("succesfully connected to database");
    await app.listen(port, () => {
      console.log(`Server is running on port ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
