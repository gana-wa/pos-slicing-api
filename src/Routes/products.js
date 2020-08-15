const express = require("express");

const productRouter = express.Router();

const productController = require("../Controllers/products");
const uploadFile = require('../Helpers/Middleware/uploadFile');

// get all product
productRouter.get("/", productController.getAllProducts);
// get whit pagination
productRouter.get("/pagination", productController.getPaginatedProducts);
// insert product
productRouter.post("/", uploadFile.singleUpload, productController.postNewProduct);
// get with sorting
productRouter.get("/sort/byname", productController.getAllProductsSortByName);
productRouter.get("/sort/bycategory", productController.getAllProductsSortByCategory);
productRouter.get("/sort/bynewest", productController.getAllProductsSortByNewest);
productRouter.get("/sort/byprice", productController.getAllProductsSortByPrice);
// update product
productRouter.patch("/update", productController.updateProduct); //cuma bisa update harga
// delete product
productRouter.delete("/delete", productController.deleteProduct); //delete by name
// search product by
// productRouter.get("/search/name", productController.getProductByName);
productRouter.get("/search/name/:name", productController.getProductByName);
productRouter.get("/search/category/:name", productController.getProductByCategory);

module.exports = productRouter;