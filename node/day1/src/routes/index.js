const express = require("express");

const TodoRouter = require("./todo");
const UserRouter = require("./user");

const router = express.Router();

router.use("/todo", TodoRouter);
router.use("/auth", UserRouter);

module.exports = router;
