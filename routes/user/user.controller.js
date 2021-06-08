const {user} = require('../../models/index');
require('dotenv').config();
const crypto = require('crypto');
let token = require('../../jwt');


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


module.exports = {signAgree, signup, login, loginPost, onchnageUser, signupSuccess, logout, idChk,};