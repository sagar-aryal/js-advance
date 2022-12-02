const bcrypt = require("bcryptjs");

const User = require("../models/user");

const UserController = {
  // login user
  loginUser: async (req, res) => {
    try {
      const users = await User.find();

      const loginUser = await req.body;
      const existingUser = await users.find(
        (item) => item.email === loginUser.email
      );

      if (!existingUser) {
        return res.status(201).json({
          message: "User doesn't exist, register as a new user",
          error,
        });
      }

      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compareSync(
        loginUser.password,
        existingUser.password
      );

      if (!validPassword) {
        return res.status(400).json({ message: "Invalid Password", error });
      }
      return res.status(200).json({ message: "Logged in successfully" });
    } catch (error) {
      return res.status(401).json({
        message: "Login failed. Please provide the correct credientials",
        error,
      });
    }
  },

  // register new user
  registerUser: async (req, res) => {
    try {
      const { email, password } = await req.body;

      if (!email && !password) {
        return res
          .status(201)
          .json({ message: "Enter your email and password", error });
      }

      // set user password to hashed password
      var salt = await bcrypt.genSaltSync(10);
      hash = await bcrypt.hashSync(password, salt);
      const registerUser = await new User({ email, password: hash }).save();
      return res.status(200).json({
        message: "User created successfully",
        user_Id: registerUser._id,
      });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Please register again as a new user", error });
    }
  },
};

module.exports = UserController;
