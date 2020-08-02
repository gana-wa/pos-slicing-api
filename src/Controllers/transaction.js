const transactionModel = require("../Models/transaction");

const transactionController = {
    // POST
    addTransaction: (req, res) => {
        transactionModel
        .addTransaction(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    }
}

module.exports = transactionController;