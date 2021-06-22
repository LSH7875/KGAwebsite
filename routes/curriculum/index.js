const express = require('express');
const router = express.Router();
const curriculumController = require('./curriculum.controller');
const templete=require('../../middleware/templete');

//console.log('main.index');
router.get('/', templete,curriculumController.curriculum2);
// router.get('/', templete,curriculumController.curriculum);
// router.get('/curriculum', collegeController.curriculum);

module.exports = router;