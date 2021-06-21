const express = require('express');
const router = express.Router();
const userController = require('./user.controller');
const templete = require('../../middleware/templete');
//1.일단 라우터에 붙이기
//2.뷰페이지에 붙이기

//네이버 로그인
router.get('/auth/naver/callback',userController.naverCB);
router.get('/auth/naver',userController.naverLogin);

//카카오 로그인
router.get('/auth/kakao/callback',userController.kakaoCB);
router.get('/auth/kakao',userController.kakaoLogin);

//로컬 가입
router.get('/signAgree', templete,userController.signAgree);//1했음 2했음
router.post('/signup/idChk',userController.idChk);
router.get('/signup',templete,userController.signup);//1했음 2했음
router.post('/signup',userController.signupSuccess);
router.post('/onchnageUser',userController.onchnageUser);

//로그인
router.get('/login',templete,userController.login);//1햇음 
router.post('/login',userController.loginPost);
router.get('/logout',userController.logout);
router.get('/',userController.login);


module.exports = router;