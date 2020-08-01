const db = require("../Configs/dbMySql");

const productModel = {
    getAllProducts: () => {
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
    },
    postNewProduct: (body) => {
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
    },
    getProductById: (id) => {
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
    },
}

module.exports = productModel;