const mysql = require('mysql');

let pool = mysql.createPool({
  connectionLimit:4,
  host: "localhost",
  user: "root",
  password: "ijinmasuk",
  database:"testdb"
});

pool.getConnection((err,connection)=> {
  if(!err){
    console.log(`[${new Date().toISOString()}] [INFO] Database connected successfully`);
    connection.release();
  }else{
    console.error(`[${new Date().toISOString()}] [ERROR] Database not connected: `, err.code);
  }
});

module.exports = pool;
