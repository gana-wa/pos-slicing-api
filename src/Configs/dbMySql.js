const mySQL = require("mysql");

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

module.exports = db;