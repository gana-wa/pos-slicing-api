const express = require("express");

const categoryRouter = express.Router();

const categoryController = require("../Controllers/category");
const checkToken = require('../Helpers/Middleware/checkToken');

// GET
categoryRouter.get("/", categoryController.getAllCategory);
// POST
categoryRouter.post("/", checkToken.checkAdmin, categoryController.postCategory);
// UPDATE
categoryRouter.patch("/", checkToken.checkAdmin, categoryController.updateCategory);
// DELETE
categoryRouter.delete("/", checkToken.checkAdmin, categoryController.deleteCategory);

module.exports = categoryRouter;