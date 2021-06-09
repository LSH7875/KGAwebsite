const {user} = require('../../models/index');
require('dotenv').config();
const crypto = require('crypto');
let token = require('../../jwt');
let qs = require('qs');
const fetch = require('node-fetch')
const axios = require('axios');
const { get } = require('.');


let signAgree=(req,res)=>{
    res.render('./user/signupAgree')
}


let signup =async(req,res)=>{
    res.render('./user/signup',{
        ad_agree:req.body.ad_agree
    })
}
function cryptoPw(pw){
    return crypto.createHmac('sha256',Buffer.from(toString(process.env.salt))).update(pw).digest('base64').replace('==','').replace('=',''); 
}

let signupSuccess = async(req,res)=>{
    
    let {user_id, user_pw, user_name, user_email, user_birth, user_sex,phone,ad_agree,} = req.body;
    let user_phone=phone[0]+phone[1]+phone[2];
    console.log(req.body);
    console.log(phone); 
    user_pw = cryptoPw(user_pw);
    console.log(user_pw);
    try{
        let rst = await user.create({
            user_id, user_pw, user_name, user_email, user_birth, user_sex,user_phone,ad_agree
        })
        res.redirect('/');
    }catch(e){
        console.log(e)
    }
}

let onchnageUser=async(req,res)=>{

}

let login = (req,res)=>{
    res.render('./user/login');
    console.log('process.env.kakao.clientID');
    console.log(process.env.kakao_clientID);
    console.log('process.env.kakao_redirectUri');
    console.log(process.env.kakao_redirectUri);

    console.log(ssss);
}

let loginPost = async(req,res)=>{
    let {user_pw}=req.body;
    let {user_id}=req.body;

    user_pw = cryptoPw(user_pw);

    try{
        let result = await user.findOne({
            where:{user_id,user_pw}
        });
        if (!result){
            console.log('login fail');
            res.redirect('/user/login?flag=0');
        }else{
            console.log('로그인성공');
            let ctoken = token(user_id);
            res.cookie('AccessToken',ctoken,{httponly:true, secure:true,})
            res.redirect(`/?${user_id}`);
        }

    }catch(e){
        console.log(e);
    }
}


let logout = (req,res)=>{
    res.clearCookie('AccessToken');
    res.redirect('/?msg=로그아웃되었습니다.');
}

let idChk = async(req,res)=>{
    let idFlag = false;
    
    let user_id = req.body.user_id;
    let result = await user.findOne({
        where:{user_id,}
    });
    if (!result) idFlag =true;
    res.json({
        check:idFlag,
        user_id,
    })
}

let kakaoLogin = async(req,res)=>{
    console.log('login');
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.kakao_clientID}&redirect_uri=${process.env.kakao_redirectUri}&response_type=code`;
    let token3 = await fetch(kakaoAuthURL,{
        method:'get',
    }).then(res =>{
        return res.json();
    }).then(json=>{
        console.log(json);
    })

    console.log('token3');
    console.log(token3);
}

let kakaoCB = async(req,res)=>{

    try{
        console.log('cb들어옴');
        fetch('https://kauth.kakao.com/oauth/token',{
            method:'post',
            headers: {
                'content-type':'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: qs.stringify({
                grant_type:'authorization_code',
                client_id: REST_API,
                client_secret: secret_key,
                redirect_uri: redirect_uri,
                code:req.query.code,
            }),
        })
            
    }catch(e){console.log(e.data);}

    let user;
    try{
        console.log('user들어옴');
        fetch('https://kapi.kakao.com/v2/user/me',{
            method:'get',
            headers:{
                Authorization: `Bearer ${token1.data.access_token}`
            }
        })
    }catch(e){console.log(e);}

    console.log('user');
    console.log(user);

    res.cookie('kakao',user.data,{httponly:true, secure:true,})
    res.redirect('/');
}

let naverLogin=  (req,res)=>{
    api_uri = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + process.env.naver_clientID + '&redirect_uri=' + 'http://localhost:3000/user/auth/naver/callback' + '&state=' + '111';
    //res.end("<a href='"+ api_uri + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
    res.redirect(api_uri)
    //res.send('hello')
    // api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +  + '&redirect_uri=' + 'http://localhost:3000/user/auth/naver/callback' + '&state=' + '111';
    // res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
}


let naverCB=(req,res)=>{
    res.send('성공!');
    // code = req.query.code;
    // state = req.query.state;
    // api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    //  +  + '&client_secret=' +  + '&redirect_uri=' + 'http://localhost:3000/user/auth/naver/callback' + '&code=' + code + '&state=' + state;
    // var request = require('request');
    // var options = {
    //     url: api_url,
    //     headers: {'X-Naver-Client-Id':'S3d4WQn63MrFK49uL6rI', 'X-Naver-Client-Secret': 'P8Gwf4KUuj'}
    //  };
    // request.get(options, function (error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
    //     res.end(body);
    //   } else {
    //     res.status(response.statusCode).end();
    //     console.log('error = ' + response.statusCode);
    //   }
    // });
}
module.exports = {signAgree, signup, login, loginPost, onchnageUser, signupSuccess, logout, idChk, naverLogin, kakaoLogin, kakaoCB, naverCB,};