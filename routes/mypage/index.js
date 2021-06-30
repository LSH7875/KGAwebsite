const express = require('express');
const router = express.Router();
const mypageController = require('./mypage.controller');
const templete=require('../../middleware/templete');
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

router.get('/modify_pwChk',mypageController.modiPwChk);
router.post('/modify_pwChk',mypageController.modiPwChkPost)
router.get('/modify_pw',mypageController.modiPw)
router.post('/modify_pw',mypageController.modiPwPost)
router.get('/modify_info',mypageController.modiInfo)
router.post('/modify_info',mypageController.modiInfoPost)
router.get('/modify_profile',mypageController.modiProfile)
router.post('/modify_profile',upload.single('img'),mypageController.modiProfilePost);
router.get('/',templete,mypageController.index)


module.exports = router;