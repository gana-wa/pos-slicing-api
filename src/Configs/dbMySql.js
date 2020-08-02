const mySQL = require("mysql");

const db = mySQL.createConnection({
    host: process.env.HOST,
    user: "root",
    password: "",
    database: process.env.DATABASE
});
db.connect(errMsg => {
    if (errMsg) throw errMsg;
    console.log("Database connected");
});

module.exports = db;