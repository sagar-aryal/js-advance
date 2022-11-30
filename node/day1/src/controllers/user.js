const userModel = require("../models/user");

const userController = {
  getUsers: (req, res) => {
    try {
      const users = userModel.getUsers();
      return res.status(200).json({ users });
    } catch (error) {
      /* return res.status(401).json(error); */
      throw new Error("Failed to get users");
    }
  },

  postUser: (req, res) => {
    try {
      const user = req.body;
      userModel.postUser(user);
      return res.status(200).json({
        message: "User created successfully",
      });
    } catch (error) {
      /*  return res.status(401).json(error); */
      throw new Error("Failed to post user");
    }
  },
};

module.exports = userController;
