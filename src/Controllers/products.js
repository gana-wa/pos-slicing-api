const productModel = require("../Models/products");
const formRespone = require("../Helpers/Forms/formRespone");

const productController = {
    // GET 
    getAllProducts: (_, res) => {
        productModel
            .getAllProducts()
            .then((data) => {
                formRespone.success(res,data);
                // res.status(200).json(data);
            })
            .catch((err) => {
                formRespone.error(res, err);
                // res.status(500).json(err)
            })
    },
    // GET SORTING
    getAllProductsSortByName: (_, res) => {
        productModel
            .getAllProductsSortByName()
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err)
                formRespone.error(res, err);
            })
    },
    getAllProductsSortByCategory: (_, res) => {
        productModel
            .getAllProductsSortByCategory()
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err)
                formRespone.error(res, err);
            })
    },
    getAllProductsSortByNewest: (_, res) => {
        productModel
            .getAllProductsSortByNewest()
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err)
                formRespone.error(res, err);
            })
    },
    getAllProductsSortByPrice: (_, res) => {
        productModel
            .getAllProductsSortByPrice()
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err)
                formRespone.error(res, err);
            })
    },
    // POST
    postNewProduct: (req, res) => {
        productModel
            .postNewProduct(req.body)
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    },
    // UPDATE
    updateProduct: (req, res) => {
        productModel
            .updateProduct(req.body)
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    },
    // DELETE
    deleteProduct: (req, res) => {
        productModel
            .deleteProduct(req.body)
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    },
    // SEARCH
    getProductByName: (req, res) => {
        productModel
        // .getProductByName(req.query.product_name)
            .getProductByName(req.params.name)
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    },
    getProductByCategory: (req, res) => {
        productModel
            .getProductByCategory(req.params.name)
            .then((data) => {
                // res.status(200).json(data);
                formRespone.success(res,data);
            })
            .catch((err) => {
                // res.status(500).json(err);
                formRespone.error(res, err);
            })
    },

}

module.exports = productController;