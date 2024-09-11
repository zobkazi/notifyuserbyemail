// src/app/routes.js
const { Router } = require("express");
const moduleRoutes = require("../routes"); // Ensure this path is correct
const routes = Router();

// Apply each module route
moduleRoutes.forEach(({ path, route }) => routes.use(path, route));

module.exports = routes;
