const express = require("express");
const morgon = require("morgan");
const connect = require("./db");
const cors = require("cors");
require("dotenv").config();
const app = express();

connect();

app.use(morgon("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from server");
});
app.get("/user", (req, res) => {
  res.send("hello from user");
});

app.use("/api", require("./Routers/user"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
