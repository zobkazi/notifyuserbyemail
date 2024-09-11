// src/modules/auth/auth.routes.js
const express = require("express");
const authRoutes = express.Router();
const {signupController, getAuthController} = require("./auth.controller");


authRoutes.post("/signup", signupController);
authRoutes.get("/all", getAuthController);


module.exports = authRoutes
