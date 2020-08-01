const express = require('express');

const productsController = require('../Controllers/produtcs');

const productsRouter = express.Router;

// localhost:7000/products
productsRouter.get("/", productsController.getAllProducts);
// localhost:7000/products
productsRouter.post("/", productsController.postNewProduct);

// ROUTER & QUERY
productsRouter.get("/:id", productsController.getProductById);

module.exports = productsRouter;