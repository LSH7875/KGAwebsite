const express = require('express');
const router = express.Router();
const mypageController = require('./mypage.controller');
const templete=require('../../middleware/templete');



router.get('/qna',mypageController.qna)
router.get('/modify_pwChk',mypageController.modiPwChk);
router.post('/modify_pwChk',mypageController.modiPwChkPost)
router.get('/modify_pw',mypageController.modiPw)
router.post('/modify_pw',mypageController.modiPwPost)
router.get('/modify_info',mypageController.modiInfo)
router.post('/modify_info',mypageController.modiInfoPost)
router.get('/',templete,mypageController.index)


module.exports = router;