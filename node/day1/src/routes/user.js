const express = require("express");
const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/login", userController.loginUser);
userRouter.post("/register", userController.registerUser);

module.exports = userRouter;
