const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const mySQL = require("mysql");
const { resolve } = require("path");
const { rejects } = require("assert");
const { query } = require("express");

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
    if (errMsg) throw errMsg;
    console.log("Database connected");
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
// Router.get("/", (_, res) => {
//     res.json({
//         msg: "hello world"
//     })
// });
// Router.post("/",(req,res) => {
//     console.log(req.body);
//     res.json({
//         msg:"Body sudah diterima", 
//     })
// })
const queryPromiseGet = () => {
    return new Promise((resolve, rejects) => {
        const queryString = "SELECT tb_product.product_id, tb_product.product_name, tb_category.category_name, tb_product.price FROM tb_product JOIN tb_category WHERE tb_product.category_id = tb_category.category_id";
        db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                rejects(err);
            }
        });
    });
};
Router.get("/products", (_, res) => {
    queryPromiseGet()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
});

const queryPromisePost = (body) => {
    // const { product_name, price, category_id } = body;
    // const queryString = `INSERT INTO tb_product SET product_name="${product_name}", price=${price}, category_id="${category_id}"`
    const queryString = "INSERT INTO tb_product SET ?";
    return new Promise((resolve, rejects) => {
        db.query(queryString, [body], (err, data) => {
            // db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                rejects(err);
            }
        })
    });
};
Router.post("/products", (req, res) => {
    queryPromisePost(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
            // res.status(500).json(err);
        })
})