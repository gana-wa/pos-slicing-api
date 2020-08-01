const express = require('express');
const { Router } = require('express');

const productsRouter = express.Router;

const queryPromiseGet = () => {
    return new Promise((resolve, rejects) => {
        const queryString = "SELECT tb_product.product_id, tb_product.product_name, tb_category.category_name, tb_product.price FROM tb_product JOIN tb_category ON tb_product.category_id = tb_category.category_id";
        db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                rejects(err);
            }
        });
    });
};
productsRouter.get("/", (_, res) => {
    queryPromiseGet()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
});

const queryPromisePost = (body) => {
    // const { product_name, price, category_id } = body;
    // const queryString = `INSERT INTO tb_product SET product_name="${product_name}", price=${price}, category_id="${category_id}"`
    const queryString = "INSERT INTO tb_product SET ?";
    return new Promise((resolve, rejects) => {
        db.query(queryString, [body], (err, data) => {
            // db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                rejects(err);
            }
        })
    });
};
productsRouter.post("/", (req, res) => {
    queryPromisePost(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
            // res.status(500).json(err);
        })
})

// ROUTER & QUERY
const queryPromiseGetById = (id) => {
    return new Promise((resolve, rejects) => {
        const queryString = "SELECT tb_product.product_id, tb_product.product_name, tb_category.category_name, tb_product.price FROM tb_product JOIN tb_category ON tb_product.category_id = tb_category.category_id WHERE tb_product.product_id = ?";
        db.query(queryString, [id], (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                rejects(err);
            }
        });
    });
};
productsRouter.get("/:id", (req, res) => {
    queryPromiseGetById(req.params.id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
});

module.exports = productsRouter;