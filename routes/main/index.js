const express = require('express');
const router = express.Router();
const mainController = require('./main.controller');

console.log('main.index');
router.get('/', mainController.main);


module.exports = router;