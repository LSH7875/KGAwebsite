const express = require('express');
const router = express.Router();
const adminController = require('./admin.controller');
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

router.get('/mainvideo_list',adminController.mainvideo_list);
router.get('/mainvideo_upload',adminController.mainvideo_upload);
router.post('/mainvideo_upload',adminController.mainvideo_uploadPost);
router.get('/mainvideo_modify',adminController.mainvideo_modify);
router.post('/mainvideo_modify',adminController.mainvideo_modifyPost);

router.get('/popup_list',adminController.popup_list);
router.get('/popup_modify',adminController.popup_modify);
router.post('/popup_modify',adminController.popup_modifyPost);
router.get('/popup_make',adminController.popup_make);
router.post('/popup_make',upload.single('img'),adminController.popup_makePost);

router.get('/interview_manage',adminController.interview_manage);
router.get('/interview_manage_write',adminController.interview_manage_write);
router.post('/interview_manage_write',adminController.interview_manage_writePost);

router.get('/employment_status',adminController.employment_statuses);
router.get('/employment_status_modify',adminController.employment_status_modify);
router.post('/employment_status_modify',adminController.employment_status_modifyPost);
router.get('/employment_status_write',adminController.employment_status_write);
router.post('/employment_status_write',adminController.employment_statusPost);
router.get('/setting',adminController.setting);
router.get('/apply_list',adminController.apply_list);
router.get('/apply',adminController.apply);
router.get('/notice',adminController.notice);
router.get('/portfolio',adminController.portfolio);


module.exports = router;
