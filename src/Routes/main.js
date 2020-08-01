const express = require('express');

const mainRouter = express.Router();

mainRouter.get("/", (_, res) => {
    res.json({
        msg: "hello world"
    });
});
mainRouter.post("/",(req,res) => {
    console.log(req.body);
    res.json({
        msg:"Body sudah diterima",
        body : req.body,
    });
});

module.exports = mainRouter;