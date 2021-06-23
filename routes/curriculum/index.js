const express = require('express');
const router = express.Router();
const curriculumController = require('./curriculum.controller');
const templete=require('../../middleware/templete');

//console.log('main.index');

// router.get('/', templete,curriculumController.curriculum);
// router.get('/curriculum', collegeController.curriculum);
router.get('/block',templete,curriculumController.block);
router.get('/gameArchi',templete,curriculumController.gameArchi);
router.get('/programing',templete,curriculumController.programing);
router.get('/vrar',templete,curriculumController.vrar);
router.get('/', templete,curriculumController.curriculum2);
module.exports = router;