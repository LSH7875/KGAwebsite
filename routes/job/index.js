const express = require('express');
const router = express.Router();
const jobController = require('./job.controller');
const templete = require('../../middleware/templete');


// router.get('/interview', collegeController.interview);
router.get('/recruit', templete,jobController.job);
// router.get('/portfolio', collegeController.portfolio);

module.exports = router;