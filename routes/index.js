const express = require('express');
const router = express.Router();
const mainRouter = require('./main');
const adminRouter = require('./admin');
const mypageRouter= require('./mypage');
const collegeRouter = require('./college');
const curriculumRouter = require('./curriculum');
const jobRouter = require('./job');
const userRouter= require('./user')


router.get('/favicon.ico',(req,res,next)=>{
  res.params=null;
  next();
})


router.use(ignoreFavicon);
router.use('/mypage',mypageRouter);
router.use('/user',userRouter);
router.use('/admin',adminRouter);
router.use('/router/college',collegeRouter);
router.use('/router/curriculum',curriculumRouter);
router.use('/router/job',jobRouter);
router.get('/chatting',(rew,res)=>{
  res.render('chatting/chatting')
})
router.use('/',mainRouter);



function ignoreFavicon(req, res, next) {
    if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end()
    }
    next();
  }

module.exports = router;