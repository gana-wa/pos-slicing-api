const db = require("../Configs/dbMySql");
const productRouter = require("../Routes/products");
const productModel = require("../Models/products");

const productController = {
    // GET 
    getAllProducts: (_, res) => {
        productModel
            .getAllProducts()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // GET SORTING
    getAllProductsSortByName: (_, res) => {
        productModel
            .getAllProductsSortByName()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getAllProductsSortByCategory: (_, res) => {
        productModel
            .getAllProductsSortByCategory()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getAllProductsSortByNewest: (_, res) => {
        productModel
            .getAllProductsSortByNewest()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getAllProductsSortByPrice: (_, res) => {
        productModel
            .getAllProductsSortByPrice()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    // POST
    postNewProduct: (req, res) => {
        productModel
            .postNewProduct(req.body)
            .then((data) => {
                res.status(200).json(data);;
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    },
    // UPDATE
    updateProduct: (req, res) => {
        productModel
            .updateProduct(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    },
    // DELETE
    deleteProduct: (req, res) => {
        productModel
            .deleteProduct(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    },
    // SEARCH
    getProductByName: (req, res) => {
        productModel
            .getProductByName(req.params.name)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    },
    getProductByCategory: (req, res) => {
        productModel
            .getProductByCategory(req.params.name)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    },

}

module.exports = productController;