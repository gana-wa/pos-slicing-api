const db = require("../Configs/dbMySql");
const productRouter = require("../Routes/products");
const productModel = require("../Models/products");

const productController = {
    getAllProducts: (_, res) => {
        productModel
            .getAllProducts()
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    postNewProduct: (req, res) => {
        productModel
            .postNewProduct(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
                // res.status(500).json(err);
            })
    },
    getProductById: (req, res) => {
        productModel
            .getProductById(req.params.id)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    }
}

module.exports = productController;