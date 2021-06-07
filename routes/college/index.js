const express = require('express');
const router = express.Router();
const collegeController = require('./college.controller');

//console.log('main.index');
router.get('/introductuon', collegeController.introductuon);
router.get('/history', collegeController.history);
router.get('/interior', collegeController.interior);
router.get('/location', collegeController.location);
router.get('/teachers', collegeController.teachers);


module.exports = router;