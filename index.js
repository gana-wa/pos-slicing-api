const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
// const path = require("path");

const indexRouter = require('./src/Routes/index');

const app = express();

const port = 7000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: false })) //x-www-form-urlencoded
app.use(logger("dev")); //morgan

app.use('indexRouter');

// app.get("/1", (_,res) => {
//     // res.send("Hello world");
//     res.json({
//         msg: "hello world",
//         name: "gana"
//     });
// });