const express = require('express');
const app = express();
require('dotenv').config();
const {port}= process.env || 3000;
const router = require('./routes');
const nunjucks = require('nunjucks');

app.use(express.static('public'))
app.use(express.static('image'))

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})



app.use('/',router);


app.listen(3000,()=>{
    console.log(`server 3000 start`)
})