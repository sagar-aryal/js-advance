const express = require("express");

const routes = require("../routes");

const app = express();

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1", routes);

module.exports = app;
