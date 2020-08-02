const historyModel = require("../Models/history");

const historyController = {
    showAllHistory: (_,res) => {
        historyModel.showAllHistory()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    showHistoryByInvoice: (req, res) => {
        historyModel.showHistoryByInvoice(req.params.invoice)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    }
}

module.exports = historyController;