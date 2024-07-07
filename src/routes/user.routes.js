const router = require("express").Router();

const userController = require("../api/v1/controllers/userController");

router.post("/signup", userController.signup);
// router.post("/login", userController.login);
// router.get("/users", userController.getAllUsers);
// router.get("/user/:id", userController.getUserById);
// router.put("/user/:id", userController.updateUserById);
// router.delete("/user/:id", userController.deleteUserById);


module.exports = router;