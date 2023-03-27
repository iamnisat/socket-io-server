const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

const route = require("./src/routes");
const port = 3000;

const app = express();
const http = require("http").Server(app);
const io = socket(http, {
  cors: {
    origin: "*",
  },
});
const Op = Sequelize.Op;

app.use(cors());
app.use((req, res, next) => {
  req.Op = Op;
  res.io = io;
  next();
});
app.use(bodyParser.json());
app.use(route);

http.listen(port, () => {
  console.log("Listening on " + port);
});
