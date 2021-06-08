const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

console.log('userindex');
router.get('/signAgree', userController.signAgree);
router.get('/signup',userController.signup);
router.post('/signup',userController.signupSuccess);
router.post('/onchnageUser',userController.onchnageUser);
router.get('/login',userController.login);
router.post('/login',userController.loginPost);
router.get('/',userController.login);

module.exports = router;