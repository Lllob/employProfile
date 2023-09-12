const mysql = require('mysql')

   const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: "company-staff", //the name from mysql
 })

module.exports = { db }