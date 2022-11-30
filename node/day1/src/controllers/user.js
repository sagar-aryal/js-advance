const bcrypt = require("bcrypt");

const userModel = require("../models/user");

const userController = {
  // login user
  loginUser: async (req, res) => {
    try {
      const users = await userModel.loginUser();

      const loginUser = req.body;
      const existingUser = users.find((item) => item.email === loginUser.email);

      if (!existingUser) {
        return res
          .status(201)
          .json({ error: "User doesn't exist, register as a new user " });
      } else {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(
          loginUser.password,
          existingUser.password
        );
        if (!validPassword) {
          res.status(400).json({ error: "Invalid Password" });
        } else {
          res.status(200).json({ message: "Logged in successfully" });
        }
      }
    } catch (error) {
      /* return res.status(401).json(error); */
      throw new Error("Failed to get users");
    }
  },

  // register new user
  registerUser: async (req, res) => {
    try {
      const user = req.body;

      if (!(user.email && user.password)) {
        return res.status(201).json({ error: "Enter your email and password" });
      } else {
        // set user password to hashed password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        userModel.registerUser(user);
        return res.status(200).json({
          message: "User created successfully",
          user,
        });
      }
    } catch (error) {
      /*  return res.status(401).json(error); */
      throw new Error("Failed to post user");
    }
  },
};

module.exports = userController;
