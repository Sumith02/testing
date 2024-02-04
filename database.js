const { query } = require("express");

const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    passwor: "",
    database: "library data management",
    connectionLimit: 10
})

pool.query(' select * from registration ', (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})

module.exports = pool;