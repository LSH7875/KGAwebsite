const express = require('express');
const app = express();
require('dotenv').config();
const {port}= process.env || 3000;
const socket = require('socket.io');
const http = require('http')
const server = http.createServer(app);
const io = socket(server);
const router = require('./routes');
const nunjucks = require('nunjucks');
const {sequelize} = require('./models');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
const moment = require('moment');
const favicon = require('serve-favicon')
const path = require('path');


app.use(favicon(path.join(__dirname,'public/images','favicon.ico')))
app.use(cookieParser());
//express.static은 파일경로를 주소로 만들겠다는 의미임.
//그래서 완전탐색이 들어감.
//그래서 라우터는 맨 끝에 써줘야 함.
//그래서 지금 이 구조는 
app.use(express.static('./node_modules/socket.io/client-dist'))
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('image'));// 이상생기지 말기를...
app.use('/se2',express.static('se2'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


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

io.sockets.on('connection',(socket)=>{
    socket.on('chatting',(data)=>{
        console.log(socket.id);
        console.log(socket.id);
        console.log(socket.id);
        
        const { name, msg } = data;
        io.emit("chatting",{
            name,
            msg,
            time: moment(new Date()).format("h:ss A")
        })
    })
})

server.listen(3000,()=>{
    console.log(`server 3000 start`)
})