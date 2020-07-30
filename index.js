const express = require("express");
// import express from "express";

const app = express();

const port = 7000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

app.get("/", (_,res) => {
    // res.send("Hello world");
    res.json({
        msg: "hello world",
        name: "gana"
    });
});