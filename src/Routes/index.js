// PACKAGE IMPORT
const express = require("express");
// FILEPATH IMPORT
const mainRouter = require("./main");
const productRouter = require("./products");
// DEKLARASI
const indexRouter = express.Router();
// IMPLEMENTASI
indexRouter.use("/", mainRouter);
indexRouter.use("/products", productRouter);
// EXPORT
module.exports = indexRouter;