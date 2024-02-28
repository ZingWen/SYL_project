import mysql from "mysql2";
const db = mysql.createConnection({
    host: 'http://localhost:3000/',
    port: 3306,
    user: 'ysl_db',
    password: 'ysl',
    database: 'ysl_db'
  });

export default db;
  