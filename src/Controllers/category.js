const categoryModel = require("../Models/category");
const categoryRouter = require("../Routes/category");

const categoryController = {
    // GET
    getAllCategory: (_, res) => {
        categoryModel
            .getAllCategory()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    },
    // POST
    postCategory: (req, res) => {
        categoryModel
            .postCategory(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    },
    // UPDATE
    updateCategory: (req, res) => {
        categoryModel
        .updateCategory(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    // DELETE
    deleteCategory: (req,res) => {
        categoryModel
        .deleteCategory(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    }
}

module.exports = categoryController;