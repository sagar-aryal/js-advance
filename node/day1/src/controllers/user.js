const User = require("../models/user");
const userServices = require("../services/user");

const UserController = {
  loginUser: async (req, res) => {
    try {
      const { email, password } = await req.body;

      const user = await new User({
        email,
        password,
      });

      await userServices.loginUser(user);
      res.status(200).json({ message: "User loggedin successfully", user });
    } catch (error) {
      return res.status(401).json({ message: "Not authorised", error });
    }
  },

  registerUser: async (req, res) => {
    try {
      const { email, password } = await req.body;

      const user = await new User({
        email,
        password,
      });

      await userServices.registerUser({
        message: "User registered successfully",
        email: user.email,
      });
      res.json(user);
    } catch (error) {
      return res.status(401).json({ message: "User registered failed", error });
    }
  },
};

module.exports = UserController;
