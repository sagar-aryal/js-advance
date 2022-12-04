const User = require("../models/user");
const { compareHash, hashPassword } = require("../helpers/user");

const userServices = {
  loginUser: async (user) => {
    try {
      const { email, password } = user;

      const isUserExist = await User.findOne({ email });

      if (!isUserExist) {
        throw new Error(
          "Authentication failed. Please provide the correct credientials"
        );
      }

      const isValidPassword = await compareHash(password, isUserExist.password);
      console.log(isValidPassword);

      if (!isValidPassword) {
        throw new Error(
          "Authentication failed. Please provide the correct credientials"
        );
      }
      const loggedInUser = await new User();
      delete loggedInUser.password;

      return loggedInUser;
    } catch (error) {
      throw error;
    }
  },

  registerUser: async (user) => {
    try {
      const { email, password } = user;

      const isUserExist = await User.findOne({ email, password });

      if (isUserExist) {
        throw new Error("User already exists");
      }

      const hidePassword = hashPassword(password);
      const registeredUser = await new User({
        email,
        password: hidePassword,
      }).save();
      return registeredUser;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userServices;
