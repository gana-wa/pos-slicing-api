const express = require("express");

const categoryRouter = express.Router();

const categoryController = require("../Controllers/category");

// GET
categoryRouter.get("/", categoryController.getAllCategory);
// POST
categoryRouter.post("/", categoryController.postCategory);
// UPDATE
categoryRouter.patch("/update", categoryController.updateCategory);
// DELETE
categoryRouter.delete("/delete", categoryController.deleteCategory);

module.exports = categoryRouter;