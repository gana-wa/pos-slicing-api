const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");

const Router = require('./src/Routes/index');

const app = express();

const port = 7000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: false })) //x-www-form-urlencoded
app.use(logger("dev")); //morgan

app.use('Router');


// app.get("/1", (_,res) => {
//     // res.send("Hello world");
//     res.json({
//         msg: "hello world",
//         name: "gana"
//     });
// });