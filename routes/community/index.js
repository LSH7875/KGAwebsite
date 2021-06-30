const express = require('express');
const router = express.Router();
const communityController = require('./community.controller');

router.get('/review/write', communityController.review_write);
router.post('/review/write', communityController.review_write_post);
router.get('/review/modify', communityController.review_modify);
router.post('/review/modify', communityController.review_modify_post);
router.post('/review/delete',communityController.review_delete);
router.get('/review', communityController.review_list);




module.exports = router;