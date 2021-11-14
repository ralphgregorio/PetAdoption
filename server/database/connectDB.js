const mysql = require('mysql');
const config = require('./config/db_config.json');

const db = mysql.createConnection({
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});

module.exports = db;