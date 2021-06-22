const express = require('express');
const router = express.Router();
const collegeController = require('./college.controller');
const templete = require('../../middleware/templete');

//console.log('main.index');
router.get('/introduction', templete,collegeController.introduction);
router.get('/history', templete, collegeController.history);
router.get('/interior', templete, collegeController.interior);
router.get('/location', templete, collegeController.location);
router.get('/teachers', templete, collegeController.teachers);
router.get('/', templete,collegeController.introduction);


module.exports = router;