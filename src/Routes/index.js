const express = require("express");
const Router = express.Router();

const mainRouter = require("./main");
const productRouter = require("./products");

Router.use("/", mainRouter);
Router.use("/products", productRouter);

module.exports = Router;