const express = require('express');
const router = express.Router();
const adminController = require('./admin.controller');

router.get('/academy_int',adminController.academy_int);
router.get('/admin_list',adminController.admin_list);
router.get('/admin_login',adminController.admin_login);
router.get('/board_manage',adminController.board_manage);
router.get('/board_modify',adminController.board_modify);
router.get('/community',adminController.community);
router.get('/curriculum_list',adminController.curriculum_list);
router.get('/interview_manage',adminController.interview_manage);
router.get('/mainvideo_list',adminController.mainvideo_list);
router.get('/mainvideo_upload',adminController.academy_int);
router.get('/popup_list',adminController.popup_list);
router.get('/popup_manage',adminController.popup_manage);
router.get('/setting',adminController.setting);
router.get('/apply_list',adminController.apply_list);
router.get('/consulting_list',adminController.consulting_list);
router.get('/notice',adminController.notice);
router.get('/portfolio',adminController.portfolio);


module.exports = router;
