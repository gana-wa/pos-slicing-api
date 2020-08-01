// PACKAGE IMPORT
const express = require('express');
// FILEPATH IMPORT
const mainRouter = require('./main');
const productsRouter = require('./products')
// DEKLARASI
const indexRouter = express.Router();
// IMPLEMENTASI
indexRouter.use("/", mainRouter);
indexRouter.use("/products", productsRouter);
// EXPORT
module.exports = indexRouter;