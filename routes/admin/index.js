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
router.get('/user_list',adminController.userList);
router.post('/user_list',adminController.userListPost);
router.get('/admin_login',adminController.admin_login);
router.post('/admin_login',adminController.admin_loginPost);
router.get('/admin_logout',adminController.admin_logout)

router.get('/board_manage',adminController.board_manager);
router.post('/board_manage',adminController.board_managePost);
router.get('/board_modify',adminController.board_modify);
router.post('/board_make',adminController.board_make);
router.get('/board_group',adminController.board_group);
router.post('/board_group',adminController.board_groupPost);
router.post('/group_make',adminController.group_make);
router.get('/community',adminController.community);

router.get('/curriculum_list',adminController.curriculum_list);
router.get('/cur_make',adminController.cur_make);
router.post('/cur_make',adminController.cur_makePost);
router.get('/cur_modify',adminController.cur_modify);
router.post('/cur_modify',adminController.cur_modifyPost);

router.get('/mainvideo_list',adminController.mainvideo_list);
router.get('/mainvideo_upload',adminController.mainvideo_upload);
router.post('/mainvideo_upload',upload.single('video'),adminController.mainvideo_uploadPost);
router.get('/mainvideo_modify',adminController.mainvideo_modify);
router.post('/mainvideo_modify',upload.single('video'),adminController.mainvideo_modifyPost);

router.get('/popup_list',adminController.popup_list);
router.get('/popup_modify',adminController.popup_modify);
router.post('/popup_modify',upload.single('img'),adminController.popup_modifyPost);
router.get('/popup_make',adminController.popup_make);
router.post('/popup_make',upload.single('img'),adminController.popup_makePost);

router.get('/interview_manage',adminController.interview_manage);
router.get('/interview_manage_write',adminController.interview_manage_write);
router.post('/interview_manage_write',adminController.interview_manage_writePost);

router.get('/admin_chatting',adminController.admin_chatting)

router.get('/employment_status',adminController.employment_statuses);
router.get('/employment_status_modify',adminController.employment_status_modify);
router.post('/employment_status_modify',adminController.employment_status_modifyPost);
router.get('/employment_status_write',adminController.employment_status_write);
router.post('/employment_status_write',adminController.employment_statusPost);

router.get('/notice',adminController.notice);
router.get('/notice_make',adminController.notice_make)
router.post('/notice_make',upload.single('img'),adminController.notice_makePost);
router.get('/notice_modify',adminController.notice_modify)
router.post('/notice_modify',upload.single('img'),adminController.notice_modifyPost);

router.get('/review',adminController.review);
router.get('/review_view',adminController.review_view)
router.post('/review_view',adminController.review_viewPost)


router.get('/setting',adminController.setting);
router.get('/apply',adminController.applies);
router.get('/apply_view',adminController.apply_view)
router.get('/portfolio',adminController.portfolio);


module.exports = router;