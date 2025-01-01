const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8080;
const TaskRouter = require("./Routes/TaskRouter");
const bodyParser = require("body-parser");
const cors = require("cors");
app.get("/", (req, res) => {
  res.send("hello from server");
});
app.use(cors());
app.use(bodyParser.json()); //important for taking json body from client side
app.use("/tasks", TaskRouter);

app.listen(PORT, () => {
  console.log(`serveris running on PORT=${PORT}`);
});
