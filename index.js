const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const chalk = require("chalk");
const cors = require("cors")

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors())

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.bgBlue.white.bold("[Mongo Connected]"));
  })
  .catch((err) => console.log(err));


app.use("/todos", require("./routes/todos"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server running on port : " + PORT);
});
