const express = require("express");

const db = require("./config/mongoDBCoenact");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();



app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use(cookieParser());


module.exports = app;
