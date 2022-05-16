const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "mysql",
    user: "root",
    password: "maro42",
    database: "myapp"
});

exports.pool = pool;