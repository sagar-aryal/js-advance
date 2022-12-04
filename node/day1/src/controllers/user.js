const User = require("../models/user");
const userServices = require("../services/user");

const UserController = {
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = new User({
        email,
        password,
      });

      const loggedInUser = await userServices.loginUser(user);
      res
        .status(200)
        .json({ message: "User loggedin successfully", loggedInUser });
    } catch (error) {
      return res.status(401).json({ message: "User loggin failed", error });
    }
  },

  registerUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = new User({
        email,
        password,
      });

      const registeredUser = await userServices.registerUser(user);
      res.status(200).json({
        message: "User registered successfully",
        registeredUser,
      });
    } catch (error) {
      return res.status(401).json({ message: "User registered failed", error });
    }
  },
};

module.exports = UserController;
