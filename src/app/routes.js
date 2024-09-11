const { Router } = require("express");
const modulerRoutes = require("../routes");
const routes = Router();

// all-routes
modulerRoutes.forEach(({ path, route }) => route.use(path, route));


module.exports = routes