const express = require("express");

const historyRouter = express.Router();

const historyController = require("../Controllers/history");

// GET
historyRouter.get("/",historyController.showAllHistory);
historyRouter.get("/:invoice",historyController.showHistoryByInvoice);

module.exports = historyRouter;