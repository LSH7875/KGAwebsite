const express = require('express');
const router = express.Router();
const jobController = require('./job.controller');
const templete = require('../../middleware/templete');

router.get('/recruit', templete,jobController.job);


module.exports = router;