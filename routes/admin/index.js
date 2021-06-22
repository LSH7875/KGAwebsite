const express = require('express');
const router = express.Router();
const adminController = require('./admin.controller');

router.get('/admin_list',adminController.admin_list);
router.post('/admin_list',adminController.admin_list);
router.get('/admin_list_modify',adminController.admin_list_modify);
router.post('/admin_list_modify',adminController.admin_list_modifyPost);
router.get('/admin_login',adminController.admin_login);
router.post('/admin_login',adminController.admin_loginPost);

router.get('/board_manage',adminController.board_manager);
router.post('/board_manage',adminController.board_managePost);
router.get('/board_modify',adminController.board_modify);
router.get('/community',adminController.community);
router.get('/curriculum_list',adminController.curriculum_list);
router.get('/interview_manage',adminController.interview_manage);

router.get('/mainvideo_list',adminController.mainvideo_list);
router.get('/mainvideo_upload',adminController.mainvideo_upload);
router.post('/mainvideo_upload',adminController.mainvideo_uploadPost);
router.get('/mainvideo_modify',adminController.mainvideo_modify);
router.post('/mainvideo_modify',adminController.mainvideo_modifyPost);

router.get('/popup_list',adminController.popup_list);
router.get('/popup_modify',adminController.popup_modify);
router.post('/popup_modify',adminController.popup_modifyPost);
router.get('/popup_make',adminController.popup_make);
router.post('/popup_make',adminController.popup_makePost);

router.get('/setting',adminController.setting);
router.get('/apply_list',adminController.apply_list);
router.get('/consulting_list',adminController.consulting_list);
router.get('/notice',adminController.notice);
router.get('/portfolio',adminController.portfolio);


module.exports = router;
