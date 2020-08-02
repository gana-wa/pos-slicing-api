// PACKAGE IMPORT
const express = require("express");
// FILEPATH IMPORT
const mainRouter = require("./main");
const productRouter = require("./products");
const categoryRouter = require("./category");
const transactionRouter = require("./transaction");
// DEKLARASI
const indexRouter = express.Router();
// IMPLEMENTASI
indexRouter.use("/", mainRouter);
indexRouter.use("/products", productRouter);
indexRouter.use("/category", categoryRouter);
indexRouter.use("/transaction",transactionRouter);
// EXPORT
module.exports = indexRouter;