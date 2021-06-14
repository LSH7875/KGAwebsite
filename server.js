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
const moment = require('moment')


app.use(cookieParser());

app.use(express.static('./node_modules/socket.io/client-dist'))
app.use(express.static('public'));
app.use(express.static('image'));
app.use(express.static('views'));


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

io.sockets.on('connection',(socket)=>{
    console.log('접속완료')
    socket.on('chatting',(data)=>{
        const { name, msg } = data;
        io.emit("chatting",{
            name,
            msg,
            time: moment(new Date()).format("h:ss A")
        })
    })
})

app.listen(3000,()=>{
    console.log(`server 3000 start`)
})