const express = require("express");

const productRouter = express.Router();

const productController = require("../Controllers/products");

// get all product
productRouter.get("/", productController.getAllProducts);
// get with sorting
productRouter.get("/sort/byname", productController.getAllProductsSortByName);
productRouter.get("/sort/bycategory", productController.getAllProductsSortByCategory);
productRouter.get("/sort/bynewest", productController.getAllProductsSortByNewest);
productRouter.get("/sort/byprice", productController.getAllProductsSortByPrice);
// insert product
productRouter.post("/", productController.postNewProduct);
// update product
productRouter.patch("/update/:name", productController.updateProduct);
// delete product
productRouter.delete("/delete/:name", productController.deleteProduct);
// search product by
productRouter.get("/search/name/:name", productController.getProductByName);
productRouter.get("/search/category/:name", productController.getProductByCategory);

module.exports = productRouter;