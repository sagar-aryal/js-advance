const bcrypt = require("bcryptjs");

const User = require("../models/user");

const UserController = {
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      // first find user if exits then only compare password
      if (!user) {
        return res.status(401).json({
          message:
            "Authentication failed. Please provide the correct credientials",
          error,
        });
      }

      // if user was already registered, then only compare password if it matches or not
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({
          message:
            "Authentication failed. Please provide the correct credientials",
          error,
        });
      }
      return res.status(200).json({ message: "Logged in successfully" });
    } catch (error) {
      return res.status(401).json({
        message: "Login failed. Please provide the correct credientials",
        error,
      });
    }
  },

  registerUser: async (req, res) => {
    try {
      const { email, password } = await req.body;

      if (!email && !password) {
        return res
          .status(409)
          .json({ message: "Enter your email and password", error });
      }
      // don't use sync method  because it is cpu tintensive and might block our event loop
      var salt = await bcrypt.genSalt(10);
      hash = await bcrypt.hash(password, salt);
      const { _id } = await new User({ email, password: hash }).save();
      return res.status(200).json({
        message: "User created successfully",
        user_id: _id,
      });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Please register again as a new user", error });
    }
  },
};

module.exports = UserController;
