const historyModel = require("../Models/history");
const formRespone = require("../Helpers/Forms/formRespone");

const historyController = {
    showAllHistory: (_,res) => {
        historyModel.showAllHistory()
        .then((data) => {
            // res.status(200).json(data);
            formRespone.success(res,data);
        })
        .catch((err) => {
            // res.status(500).json(err);
            formRespone.error(res, err);
        })
    },
    showHistoryByInvoice: (req, res) => {
        historyModel.showHistoryByInvoice(req.params.invoice)
        .then((data) => {
            // res.status(200).json(data);
            formRespone.success(res,data);
        })
        .catch((err) => {
            // res.status(500).json(err);
            formRespone.error(res, err);
        })
    }
}

module.exports = historyController;