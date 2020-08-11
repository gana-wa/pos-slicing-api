const authRouter = require('express').Router();
const authController = require('../Controllers/auth');

authRouter.post("/register", authController.register);

module.exports = authRouter;