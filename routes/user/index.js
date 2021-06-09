const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

console.log('userindex');
router.get('/auth/naver/callback',userController.naverCB);
router.get('/auth/naver',userController.naverLogin);
router.get('/auth/kakao/callback',userController.kakaoCB);
router.get('/auth/kakao',userController.kakaoLogin);
router.get('/signAgree', userController.signAgree);
router.post('/signup/idChk',userController.idChk);
router.get('/signup',userController.signup);
router.post('/signup',userController.signupSuccess);
router.post('/onchnageUser',userController.onchnageUser);
router.get('/login',userController.login);
router.post('/login',userController.loginPost);
router.get('/logout',userController.logout);
router.get('/',userController.login);


module.exports = router;