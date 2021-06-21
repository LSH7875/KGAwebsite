const {user,board}=require('../../models/index');
const crypto = require('crypto');
require('dotenv').config();

let index = (req,res)=>{
    let section="";
    let {nickname}=req.cookies;
    let {navi,login}=req;
    if(req.query.section){
        console.log('section 파트 들어옴')
        let section = req.query.section;
        console.log(section);
        res.render('./mypage/index',{navi,section,login,nickname,})
    }else{
        console.log('section 안들어감')
        res.render('./mypage/index',{navi});
    }
}

let modiInfo = async(req,res)=>{
    let {user_id}=req.cookies;
    await user.findOne({where:{user_id,}})
    .then(aa=>{
        let {user_name,user_email,user_phone,user_sex,user_birth,nickname}=aa;
        let phone2="";
        let phone3="";
        console.log('user_phone');
        console.log(typeof user_phone);
        
        if(user_phone.length==11){
            console.log('11들어옴');
            phone2 = user_phone.substring(3,6);
            phone3 = user_phone.substring(7,10);
        }else{
            phone2 = user_phone.substring(3,5);
            phone3 = user_phone.substring(6,9);
        }
        console.log("phone2");
        console.log(phone2);
        res.render('./mypage/modi_user',{
            user_name,user_email,phone2,phone3,user_sex,user_birth,nickname,
        });
    })
}

let modiInfoPost = async(req,res)=>{
    console.log('post들어옴.')
    let {user_id}=req.cookies;
    let {user_name,user_email,phone,user_sex,user_birth,nickname}=req.body;
    let user_phone="";
    
    for(i=0;i<3;i++){
        user_phone+=phone[i];
    }
    console.log('user_phone');
    console.log(user_phone);
    await user.update({user_name,user_email,user_phone,user_sex,user_birth,nickname,},{where:{user_id,}}
        ).then(aa=>{
            res.redirect("/mypage?section=2")
    })
    

}

let modiPw=(req,res)=>{
    res.render('./mypage/modify_pw')   
}

let modiPwPost=async(req,res)=>{
    let {user_pw}=req.body;
    let {user_id}=req.cookies;
    console.log('user_pw안바뀐거');
    console.log(user_pw);
    user_pw=cryptoPw(user_pw);
    console.log('user_pw바뀐거');
    console.log(user_pw)
    await user.update({user_pw,},{
        where:{user_id,user_pw,}}
    ).then(aa=>{
        res.render("./mypage/index",{section:1})
    })
}

let modiPwChkPost=async(req,res)=>{
    console.log('modiPwChkPost들어옴')
    let {pw} = req.body;
    let {user_id} = req.cookies;
    console.log('pw받음')
    console.log('userid:',user_id);
    console.log('pw',pw);
    let user_pw = cryptoPw(pw);
    let rst = await user.findOne({
        where:{user_id,user_pw}
    })
    if(!rst){
        console.log('정보없음')
        res.json({check:false})
    }else{
        console.log('정보있음')
        // res.cookie('pwchange',`${user_pw}`)
        res.json({check:true});
    }
}

let modiPwChk=(req,res)=>{
    let msg=0;
    if(req.query.msg){
        msg=req.query.msg;
        res.render('./mypage/chk_pw',{msg,})
    }else{
    res.render('./mypage/chk_pw',{msg,})
    } 
}

let qna =(req,res)=>{

}

function cryptoPw(pw){
    console.log('함수들어옴')
    return crypto.createHmac('sha256',Buffer.from(toString(process.env.salt))).update(pw).digest('base64').replace('==','').replace('=',''); 
}
module.exports={modiPwPost,index,modiInfo,modiInfoPost,modiPw,modiPwChk,qna,modiPwChkPost,}