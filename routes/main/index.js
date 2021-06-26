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
router.get('/favicon.ico',(req,res,next)=>{
    res.params=null;
    next();
  })
router.use(ignoreFavicon);
router.get("/practice",templete,practice);
router.get("/router/job/recruit",templete,mainController.recuruits);
router.get("/router/:group/:board/view",templete, readChk ,mainController.viewer);
router.get("/router/:group/:board/write",templete,writeChk,mainController.write);
router.post("/router/:group/:board/write",templete,upload.single('img'),mainController.write_post);
router.get("/router/:group/:board/modify",templete,mainController.modify);
router.post("/router/:group/:board/modify",templete,upload.single('img'),mainController.modify_post);
router.get("/router/:group/:board/delete",templete,mainController.delete_board);
router.get("/router/:group/:board/",templete,mainController.list);
router.get("/router/:group",mainController.onlygroup);
router.get('/',templete,mainController.main);

// function ignoerFavicon(req,res,next){
//     if(req.params.group=='favicon.ico'){
//         req.params.group='';
//         return 0;
//     }else{
//         next();
//     }
// }

function ignoreFavicon(req, res, next) {
    if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end()
    }
    next();
  }

module.exports = router;