const express = require('express');
const router = express.Router();
const mainRouter = require('./main');
const adminRouter = require('./admin');
const mypageRouter= require('./mypage');
const collegeRouter = require('./college');
const curriculumRouter = require('./curriculum');
const jobRouter = require('./job');
// const communityRouter = require('./community');
const userRouter= require('./user')


router.get('/favicon.ico',(req,res,next)=>{
  res.params=null;
  next();
})


router.use(ignoreFavicon);
router.use('/mypage',mypageRouter);
router.use('/user',userRouter);
router.use('/admin',adminRouter);
router.use('/college',collegeRouter);
router.use('/curriculum',curriculumRouter);
router.use('/job',jobRouter);
router.get('/chatting',(rew,res)=>{
  res.render('chatting/chatting')
})
// router.use('/community',communityRouter);
router.use('/',mainRouter);



function ignoreFavicon(req, res, next) {
    if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end()
    }
    next();
  }

module.exports = router;