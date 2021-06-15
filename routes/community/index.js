const express = require('express');
const router = express.Router();
const communityController = require('./community.controller');

//console.log('main.index');
router.get('/review/write', communityController.review_write);
router.post('/review/write', communityController.review_write_post);
router.get('/review/modify', communityController.review_modify);
router.post('/review/modify', communityController.review_modify_post);
router.post('/review/delete',communityController.review_delete);
router.get('/review', communityController.review_list);



// router.get('/notice', communityController.notice);
// router.get('/review', communityController.review_list);

// router.get('/review/modify', communityController.review_modify);
// router.get('/review/modify', communityController.review_modify);
// router.get('/kiStory', communityController.kiStory);
// router.get('/kiReporter', communityController.kiReporter);
// router.get('/kiProfessor', communityController.kiProfessor);


module.exports = router;