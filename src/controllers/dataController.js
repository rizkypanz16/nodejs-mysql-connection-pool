const connection = require('../../config/connection.js');
const bodyParser = require("body-parser");

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

exports.getData = (req, res) => {
  let query = "SELECT * FROM test_table;";
  connection.query(query, (err, results)=> {
    if(!err){
      queryLog(query);
      res.json(results);
    }else{
      errorHandler(err,req,res);
    }
  });
};
