const express = require('express');
const router = express.Router();
const mainRouter = require('./main');
const adminRouter = require('./admin');



// router.use('/admin',adminRouter);
router.use('/',mainRouter);
module.exports = router;