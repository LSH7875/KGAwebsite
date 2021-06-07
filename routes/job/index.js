const express = require('express');
const router = express.Router();
const jobController = require('./curriculum.job');


router.get('/interview', collegeController.interview);
router.get('/recruit', collegeController.recruit);
router.get('/portfolio', collegeController.portfolio);

module.exports = router;