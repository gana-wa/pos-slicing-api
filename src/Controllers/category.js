const categoryModel = require("../Models/category");
const formRespone = require("../Helpers/Forms/formRespone");

const categoryController = {
    // GET
    getAllCategory: (_, res) => {
        categoryModel
            .getAllCategory()
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res, data);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    },
    // POST
    postCategory: (req, res) => {
        categoryModel
            .postCategory(req.body)
            .then((data) => {
                const responseObj = {
                    category_id: data.insertID,
                    ...req.body
                }
                formRespone.success(res, responseObj, data);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    },
    // UPDATE
    updateCategory: (req, res) => {
        categoryModel
            .updateCategory(req.body)
            .then((data) => {
                const responseObj = {
                    status: "Successfully updated",
                    category_id: data.insertId,
                    ...req.body
                }
                formRespone.success(res, responseObj);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    },
    // DELETE
    deleteCategory: (req, res) => {
        categoryModel
            .deleteCategory(req.body)
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res, data);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    }
}

module.exports = categoryController;