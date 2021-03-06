const {user} = require('../../models/index');
let express=require('express');
let app = express();
require('dotenv').config();
const crypto = require('crypto');
let token = require('../../jwt');
let qs = require('qs');
const fetch = require('node-fetch')
const axios = require('axios');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

let signAgree=(req,res)=>{
    let {login,navi}=req;
    let {nickname}=req.cookies;
    res.render('./user/signupAgree',{login,navi,nickname,})
}


let signup =async(req,res)=>{
    let {login,navi}=req;
    let {nickname}=req.cookies;
    res.render('./user/signup',{
        ad_agree:req.query.chk[2],login,navi,nickname,
    })
}
function cryptoPw(pw){
    return crypto.createHmac('sha256',Buffer.from(toString(process.env.salt))).update(pw).digest('base64').replace('==','').replace('=',''); 
}

let signupSuccess = async(req,res)=>{
    
    let {nickname,user_id, user_pw, user_name, user_email, user_birth, user_sex,phone,ad_agree,} = req.body;
    let user_phone=phone[0]+phone[1]+phone[2]; 
    user_pw = cryptoPw(user_pw);
    try{
        let rst = await user.create({
            nickname, user_id, user_pw, user_name, user_email, user_birth, user_sex,user_phone,ad_agree
        })
        res.redirect('/');
    }catch(e){
        console.log(e)
    }
}

let onchnageUser=async(req,res)=>{

}

let login = (req,res)=>{
    let {login,navi}=req;
    let {nickname}=req.cookies;
    let msg;
    let alert;
    if(req.query.flag==0){
        msg="아이디,비밀번호를 확인해주세요."
    }else{
        msg=0;
    }
    res.render('./user/login',{msg,login,navi,nickname,});
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

            res.redirect('/user/login?flag=0');
        }else{
            let ctoken = token(user_id);
            res.cookie('AccessToken',ctoken,{httponly:true, secure:true,})
            res.cookie('user_id',user_id);
            res.cookie('nickname',result.nickname);
            res.redirect(`/?${user_id}`);
        }
    }catch(e){
        console.log(e);
    }
}


let logout = (req,res)=>{
    let backURL = req.header;
    length1=res.cookies;
    bbb=Object.keys(req.cookies);

    
    for(i=0;i<bbb.length;i++){
        res.clearCookie(bbb[i]);
    }
    
    // res.clearCookie('AccessToken');
    // res.redirect(`/${link}/?msg=로그아웃되었습니다.`);
    res.redirect('/');
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


//////////////////////카카오로그인///////////
const kakao = {
    clientID: process.env.kakao_clientID,
    clientSecret: process.env.kakao_secret,
    redirectUri: process.env.kakao_RedirectURI
}

//카카오 계정으로 가입하는 페이지로 보내주기
let kakaoLogin = (req,res)=>{
    
        const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code`;
        res.redirect(kakaoAuthURL);
    }


////가입 후 콜백
let kakaoCB = async(req,res)=>{
    try{//access토큰을 받기 위한 코드
    kakaoToken = await axios({//token
        method: 'POST',
        url: 'https://kauth.kakao.com/oauth/token',
        headers:{
            'content-type':'application/x-www-form-urlencoded'
        },
        data:qs.stringify({
            grant_type: 'authorization_code',//특정 스트링
            client_id:kakao.clientID,
            client_secret:kakao.clientSecret,
            redirectUri:kakao.redirectUri,
            code:req.query.code,
            })
        })
    }catch(err){
        res.json(err.data);
    }
    //access토큰을 받아서 사용자 정보를 알기 위해 쓰는 코드
    let users;
    try{
//access정보를 가지고 또 요청해야 정보를 가져올 수 있음.
        users = await axios({
            method:'get',
            url:'https://kapi.kakao.com/v2/user/me',
            headers:{
                Authorization: `Bearer ${kakaoToken.data.access_token}`
            }//헤더에 내용을 보고 보내주겠다.
        })

        res.cookie('access_token',kakaoToken.data.access_token);
        res.cookie('token_type',kakaoToken.data.token_type);
        res.cookie('refresh_token',kakaoToken.data.refresh_token);
        res.cookie('expires_in',kakaoToken.data.expires_in);
        res.cookie('scope',kakaoToken.data.scope);
        res.cookie('refresh_token_expires_in',kakaoToken.data.refresh_token_expires_in);
        user_id = users.data.id;
        nickname = users.data.kakao_account.profile.nickname;
        res.cookie('user_id',user_id);
        res.cookie('nickname',nickname);        
        user_email = users.data.kakao_account.email;

    }catch(e){
        console.log(e);
    }

    makemember(user_id,nickname,user_email);

    async function makemember(a,b,c){
        let mem = await fetch('http://localhost:3000/user/signup/idChk',{
            method:'post',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({user_id:a})
        }).then(res=>{
            return res.json()
        }).then (async(json)=>{
            if(json.check){
                signup2 = await user.create({
                user_id:a ,user_email:c ,nickname:b, 
                social:"kakao"
                })
                
            }
        })
    }
    // 
    res.redirect('/');

        
        
}
        
     
      

////////////네이버 로그인///////////////
var client_id = process.env.naver_clientID;
var client_secret = process.env.naver_secret;
var state = "RAMDOM_STATE";
var redirectURI = encodeURI(process.env.naver_RedirectURI);

let naverLogin=  (req,res)=>{
    api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
    res.redirect(api_url);
}


let naverCB=async(req,res)=>{
    //네이버 로그인 콜백 들어옴
    code= req.query.code;
    state = req.query.state;
    let YOUR_ACCESS_TOKEN;

    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
//토큰 받기 과정
    try{
        let naverlog = await fetch(api_url,{
            method:"post",
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        }).then(res=>{

            return res.json();
        }).then(json=>{
            res.cookie('access_token',json.access_token);
            res.cookie('refresh_token',json.refresh_token);
            res.cookie('token_type',json.token_type);
            res.cookie('expires_in',json.expires_in);
            YOUR_ACCESS_TOKEN=json.access_token;
            
        })
    

    //받은 토큰으로 정보 요청
        try{
            let user_id,user_name,user_email,phone;
            var token = YOUR_ACCESS_TOKEN;
            var header = "Bearer " + token; // Bearer 다음에 공백 추가

            let member = await fetch('https://openapi.naver.com/v1/nid/me',{
                method:"post",
                headers:{'Authorization': header}
            }).then(res=>{
                return res.json();
            }).then(json=>{
                user_id=json.response.id;
                res.cookie('user_id',user_id);
                user_email = json.response.email;
                user_phone=json.response.mobile.toString().replace('-','').replace('-','');
                user_name = json.response.name;

                res.cookie('nickname',user_name);
                //네이버는 이름을 던져준다.
            })


            let rst= await fetch('http://localhost:3000/user/signup/idChk',{
                method:'post',
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({user_id:user_id})
            }).then(res=>{
                console.log
                return res.json()
            }).then (async(json)=>{
                if (json.check){
                    let signup1 = await user.create({
                    user_name,user_id,user_email,nickname:user_name,user_phone,
                    social:"naver"
                })
            }

            })
        }catch(e){
            console.log(e);
        }
        res.redirect('/');
    }catch(e){console.log(e)}
}

module.exports = {signAgree, signup, login, loginPost, onchnageUser, signupSuccess, logout, idChk, naverLogin, kakaoLogin, kakaoCB, naverCB,};