const express = require("express");
const authRoutes = express.Router();
const {signupController} = require("./auth.controller");


authRoutes.post("/signup", signupController);

module.exports = authRoutes
