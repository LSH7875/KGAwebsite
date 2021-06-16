const express = require('express');
const router = express.Router({mergeParams: true});
const mainController = require('./main.controller');
const readChk = require('../../middleware/readCheck');
const writeChk = require('../../middleware/writeCheck');
const practice = require('../../practice');
const templete = require('../../middleware/templete');


router.get("/practice",practice);
router.get("/:group/:board/view",templete, readChk ,mainController.viewer);
router.get("/:group/:board/write",writeChk,mainController.write);
router.post("/:group/:board/write",mainController.write_post);
router.get("/:group/:board/",templete,mainController.list);
router.get("/:group/:board/modify",mainController.modify);
router.post("/:group/:board/modify",mainController.modify_post);
router.get("/:group/:board/delete",mainController.delete_board);

router.get('/', mainController.main);

module.exports = router;