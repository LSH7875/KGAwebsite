const express = require('express');
const router = express.Router({mergeParams: true});
const mainController = require('./main.controller');
const readChk = require('../../middleware/readCheck');
const writeChk = require('../../middleware/writeCheck');
const practice = require('../../practice');
const templete = require('../../middleware/templete');
const path = require('path');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, callback){
            callback(null,'uploads/')
        },
        filename:function(req, file, callback){
            callback(null, new Date().valueOf()+path.extname(file.originalname))
        }
    }),
})

router.get("/practice",templete,practice);
router.get("/:group/:board/view",templete, readChk ,mainController.viewer);
router.get("/:group/:board/write",templete,writeChk,mainController.write);
router.post("/:group/:board/write",templete,upload.single('img'),mainController.write_post);
router.get("/:group/:board/",templete,mainController.list);
router.get("/:group/:board/modify",templete,mainController.modify);
router.post("/:group/:board/modify",templete,upload.single('img'),mainController.modify_post);
router.get("/:group/:board/delete",templete,mainController.delete_board);
router.get("/:group",mainController.onlygroup);
router.get('/',templete,mainController.main);

module.exports = router;