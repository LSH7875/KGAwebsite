const express = require('express');
const router = express.Router();
const curriculumController = require('./curriculum.controller');

//console.log('main.index');
router.get('/', collegeController.curriculum);
router.get('/curriculum', collegeController.curriculum);

module.exports = router;