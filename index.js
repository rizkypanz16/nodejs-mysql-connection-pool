const PORT = 3000;
const express = require('express');
const connection = require('./connection.js');
const app = express();
const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] [ERROR] Database not connected:`, err.code);
  res.status(500).json({
   "status": "error",
   "error": {
      "code": 500,
      "message": "Internal Server Error",
      "details": err.code
   }
  });
};
const queryLog = (query) => {
  console.log(`[${new Date().toISOString()}] [INFO]`, query);
};

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] [INFO] ${req.method} ${req.url}`);
  next();
});

app.get('/test', (req,res) => {
  let query = "SELECT * FROM test_table;";
  connection.query(query, (err, results)=> {
    if(!err){
      queryLog(query);
      res.json(results);
    }else{
      errorHandler(err,req,res);
    }
  });
});

app.listen(PORT, () => {
  console.log("server running on http://localhost:"+PORT);
});
