const express = require('express');
const router = express.Router();
const communityController = require('./community.controller');

//console.log('main.index');
router.get('/notice', collegeController.notice);
router.get('/review', collegeController.review);
router.get('/kiStory', collegeController.kiStory);
router.get('/kiReporter', collegeController.kiReporter);
router.get('/kiProfessor', collegeController.kiProfessor);

module.exports = router;