const express = require("express");
const UserController = require("../controllers/user");

const UserRouter = express.Router();

UserRouter.post("/login", UserController.loginUser);
UserRouter.post("/register", UserController.registerUser);

module.exports = UserRouter;
