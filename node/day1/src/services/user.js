const User = require("../models/user");
const { compareHash, hashPassword, generateToken } = require("../helpers/user");

const userServices = {
  loginUser: async (user) => {
    try {
      const { email, password } = user;

      // check if user exists or not
      const isUserExist = await User.findOne({ email });

      if (!isUserExist) {
        throw new Error(
          "Authentication failed. Please provide the correct credientials"
        );
      }

      // validate password
      const isValidPassword = await compareHash(password, isUserExist.password);

      if (!isValidPassword) {
        throw new Error(
          "Authentication failed. Please provide the correct credientials"
        );
      }

      // generate token using jwt
      const token = await generateToken({
        id: user._id,
        email: user.email,
      });
      console.log(token);

      //deep cloning user and delete passport for security purpose
      // const loggedInUser = JSON.parse(JSON.stringify(user));

      const loggedInUser = new User(user);
      return { loggedInUser, token };
    } catch (error) {
      throw error;
    }
  },

  registerUser: async (user) => {
    try {
      const { email, password } = user;

      // check if user exists or not
      const isUserExist = await User.findOne({ email });

      if (isUserExist) {
        throw new Error("User already exists");
      }

      // hash password
      const hashedPassword = await hashPassword(password);
      const registeredUser = new User({
        email,
        password: hashedPassword,
      }).save();
      delete (await registeredUser).password;
      return registeredUser;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userServices;
