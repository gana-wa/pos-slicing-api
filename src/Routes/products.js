const express = require("express");

const productRouter = express.Router();

const productController = require("../Controllers/products");

productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.postNewProduct)

// ROUTER & QUERY
productRouter.get("/:id", productController.getProductById);

module.exports = productRouter;