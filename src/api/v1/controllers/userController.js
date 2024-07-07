// controllers/userController.js
const User = require("../../../models/User");
const userService = require("../../../");
const userSchema = require("../../../schemas/userSchema");
class UserController {
  async signup(req, res) {
    const parsBody = userSchema.safeParse(req.body);

    // if (!parsBody.success) {
    //   return res
    //     .status(400)
    //     .json({ error: "Invalid input. Please provide valid data." });
    // }
    console.log(parsBody.data);

    // try {
    //   const newUser = await userService.signup(
    //     ...Object.values(parsBody.data)
    //   );
    //   res.status(201).json({
    //     message: "User created successfully",
    //     user: newUser,
    //   });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: "Internal Server Error" });
    // }
  }

  async getUserById(req, res, next) {
    const userId = req.params.id;

    try {
      const user = await userService.getUserById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
      next(error);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateUserById(req, res, next) {
    const userId = req.params.id;
    const updatedUserData = req.body;

    try {
      const updatedUser = await userService.updateUserById(
        userId,
        updatedUserData
      );

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteUserById(req, res, next) {
    const userId = req.params.id;

    try {
      const deletedUser = await userService.deleteUserById(userId);

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({ error: "User not found" });
      }

      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
    
    
    
// async function loginUser(req, res) {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: 'Email and password are required.' });
//   }

//   try {
//     const user = await authService.verifyUser(email, password);

//     if (user) {
//       const {token, payload} = authService.generateAuthToken(user);
//       authService.setTokenCookie(res, token);

//       console.log(token);

//       res.status(200).json({ message: 'Login successful', user: payload });
//     } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// async function logoutUser(req, res) {
//   authService.clearTokenCookie(res);
//   res.status(200).json({ message: 'Logout successful' });
// }
}

module.exports = new UserController();
