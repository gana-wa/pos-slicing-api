const db = require("../Configs/dbMySql");
const e = require("express");

const querySelect = `SELECT tb_history.invoice, tb_history.cashier, tb_history.date, tb_product.product_name, tb_history.total FROM tb_history JOIN tb_transaction ON tb_history.invoice = tb_transaction.invoice JOIN tb_product ON tb_transaction.product_id = tb_product.product_id`

const historyModel = {
    // GET
    showAllHistory: (body) => {
        return new Promise((resolve, reject) => {
            db.query(querySelect, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    showHistoryByInvoice: (invoice) => {
        const queryString = `${querySelect} WHERE tb_history.invoice = ${invoice}`;
        return new Promise((resolve, reject) => {
            db.query(queryString, (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    }
}

module.exports = historyModel;