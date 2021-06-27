const express = require('express');
const router = express.Router();
const curriculumController = require('./curriculum.controller');
const templete=require('../../middleware/templete');

//console.log('main.index');

// router.get('/', templete,curriculumController.curriculum);
router.get('/curriculum', curriculumController.curriculum1);

router.get('/:curr',templete,curriculumController.curr);
router.get('/', templete,curriculumController.curriculum2);

module.exports = router;