const mysql = require('mysql')
require('dotenv').config()
var connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    multipleStatements: true
})

module.exports = connection