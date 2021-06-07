const express = require('express');
const router = express.Router();
const mainRouter = require('./main');
const adminRouter = require('./admin');
const collegeRouter = require('./college');
const curriculumRouter = require('./curriculum');
const jobRouter = require('./job');
const communityRouter = require('./community');




router.use('/',mainRouter);
// router.use('/admin',adminRouter);
// router.use('/college',collegeRouter);
// router.use('/curriculum',curriculumRouter);
// router.use('/job',jobRouter);
// router.use('/community',communityRouter);

module.exports = router;