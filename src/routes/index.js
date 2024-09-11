// src/routes/index.js
const authRoutes = require("../modules/auth/auth.routes");


const moduleRoutes = [
    {
        path: "/auth",
        route: authRoutes
    }
]


module.exports = moduleRoutes