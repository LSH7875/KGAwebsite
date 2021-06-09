const express = require('express');
const app = express();
require('dotenv').config();
const {port}= process.env || 3000;
const router = require('./routes');
const nunjucks = require('nunjucks');
const {sequelize} = require('./models');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static('image'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

sequelize.sync({force:false})
.then(()=>{
    console.log('sequelize success');
})
.catch((err)=>{
    console.log(err);
})

app.use('/',router);


app.listen(3000,()=>{
    console.log(`server 3000 start`)
})