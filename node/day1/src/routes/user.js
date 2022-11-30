const express = require("express");
const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/users", userController.getUsers);
userRouter.post("/user", userController.postUser);

module.exports = userRouter;
