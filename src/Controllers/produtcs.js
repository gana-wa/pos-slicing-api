const db = require('../Configs/dbMySql');

const productsModel = require('../Models/products');

// Controller
const productsController = {
    getAllProducts: (_, res) => {
        productsModel
            .getAllProducts
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    postNewProduct: (req, res) => {
        productsModel
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
        productsModel
            .getProductById(req.params.id)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    }
};

module.exports = productsController;