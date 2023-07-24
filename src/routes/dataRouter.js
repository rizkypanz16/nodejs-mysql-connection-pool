const express = require('express');
const router = express.Router();
const dataController = require('./../controllers/dataController.js');

router.get('/', dataController.getData);

//export this router to use in our index.js
module.exports = router;
