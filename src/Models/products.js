const db = require("../Configs/dbMySql");

const querySelect = `SELECT tb_product.product_id, tb_product.product_name, tb_category.category_name, tb_product.price, tb_product.image FROM tb_product JOIN tb_category ON tb_product.category_id = tb_category.category_id`;

const productModel = {
    // GET or SELECT
    getAllProducts: () => {
        return new Promise((resolve, rejects) => {
            const queryString = `${querySelect}`;
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    getPaginatedProducts: (page, limit) => {
        return new Promise((resolve, rejects) => {
            const offset = (page - 1) * limit;
            const queryString = `${querySelect} LIMIT ? OFFSET ?`;
            db.query(queryString, [Number(limit), offset], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    // GET or SELECT with SORTING
    getAllProductsSortByName: () => {
        return new Promise((resolve, rejects) => {
            const queryString = `${querySelect} ORDER BY tb_product.product_name ASC`;
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    getAllProductsSortByCategory: () => {
        return new Promise((resolve, rejects) => {
            const queryString = `${querySelect} ORDER BY tb_category.category_id ASC`;
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    getAllProductsSortByNewest: () => {
        return new Promise((resolve, rejects) => {
            const queryString = `${querySelect} ORDER BY tb_product.product_id DESC`;
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    getAllProductsSortByPrice: () => {
        return new Promise((resolve, rejects) => {
            const queryString = `${querySelect} ORDER BY tb_product.price ASC`;
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    // POST or INSERT
    postNewProduct: (body) => {
        const { product_name, price, category_id, image } = body;
        const queryString = "INSERT INTO tb_product SET product_name=?, price=?, category_id=?, image=?"
        // const queryString = "INSERT INTO tb_product SET ?";
        return new Promise((resolve, rejects) => {
            db.query(queryString, [product_name, price, category_id, image], (err, data) => {
                // db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            })
        });
    },
    // UPDATE
    updateProduct: (body) => {
        const { product_name, price, category_id, product_id } = body;
        const queryUpdate = `UPDATE tb_product SET product_name = ?, price = ?, category_id = ? WHERE tb_product.product_id = '${product_id}'`;
        return new Promise((resolve, rejects) => {
            db.query(queryUpdate, [product_name, price, category_id, product_id], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    // DELETE
    deleteProduct: (body) => {
        const { product_id } = body;
        const queryUpdate = `DELETE FROM tb_product WHERE tb_product.product_id = '${product_id}'`;
        return new Promise((resolve, rejects) => {
            db.query(queryUpdate, [product_id], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    // SEARCH
    getProductByName: (name) => {
        return new Promise((resolve, rejects) => {
            const queryString = `${querySelect} WHERE tb_product.product_name LIKE '%${name}%'`;
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    getProductByCategory: (name) => {
        return new Promise((resolve, rejects) => {
            const queryString = `${querySelect} WHERE tb_category.category_name LIKE '%${name}%'`;
            db.query(queryString, (err, data) => {
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