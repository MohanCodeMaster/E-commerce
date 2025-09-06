const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // your MySQL username
  password: "mohan", // your MySQL password
  database: "ecommerce_db"
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

module.exports = db;
