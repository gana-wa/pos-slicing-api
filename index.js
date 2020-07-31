const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const mySQL = require("mysql");

const app = express();

const port = 7000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: false })) //x-www-form-urlencoded
app.use(logger("dev"));

const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "week4_api"
});
db.connect(errMsg => {
    if(errMsg) throw errMsg;
    console.log("Database connected")
})

// app.get("/1", (_,res) => {
//     // res.send("Hello world");
//     res.json({
//         msg: "hello world",
//         name: "gana"
//     });
// });

const Router = express.Router();
app.use(Router);
Router.get("/", (_, res) => {
    res.json({
        msg: "hello world"
    })
});
Router.post("/",(req,res) => {
    console.log(req.body);
    res.json({
        msg:"Body sudah diterima", 
    })
})