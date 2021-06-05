const express = require('express');
const app = express();
require('dotenv').config();
const {port}= process.env || 3000;
const router = require('./routes');
const nunjucks = require('nunjucks');


app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

app.use('/',router);

app.listen(port,()=>{
    console.log(`server ${port} start`)
})