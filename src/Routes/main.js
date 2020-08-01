const express = require('express');

const mainController = require('../Controllers/main');

const mainRouter = express.Router();

mainRouter.get("/", mainController.sayHello);
mainRouter.post("/", mainController.testBody);

module.exports = mainRouter;