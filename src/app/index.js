// src/app/index.js

const express = require("express");
const routes = require("./routes");
const middleware = require("./middleware");

const app = express();
app.use("/api", routes);

middleware(app)




module.exports = app