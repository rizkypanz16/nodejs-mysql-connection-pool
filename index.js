const PORT = 3000;
const express = require('express');
const connection = require('./config/connection.js');
const app = express();
const dataRouter = require("./src/routes/dataRouter.js");

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] [INFO] ${req.method} ${req.url}`);
  next();
});

app.use('/api/data', dataRouter);

app.listen(PORT, () => {
  console.log("server running on http://localhost:"+PORT);
});
