const {user,board}=require('../../models/index');
const crypto = require('crypto');
require('dotenv').config();

let index = async(req,res)=>{
    let local=0;
    let section="";
    let {nickname,user_id}=req.cookies;
    let {navi,login}=req;
    let userinfo = await user.findOne({
        where:{user_id,}
    })
    console.log('profile');
    let {profile}=userinfo;
    console.log(profile);

    let authority;

    if(userinfo.social == 'local') local=1;

    if(userinfo.user_grade<=1){
        authority="승인받지 못했습니다. 수강생이나 직원인 경우 학원 관리자에게 연락 바랍니다."
    }else if(userinfo.user_grade==2){
        authority="경일아카데미 수강생 인증되었습니다."
    }else if(userinfo.user_grade==3){
        authority = "경일아카데미 직원 인증되었습니다. "
    }else if(userinfo.user_grade==4){
        authority = "관리자입니다."
    }else{
        authority = "오류입니다. 관리자에게 연락 바랍니다."
    }

    if(req.query.section){
        console.log('section 파트 들어옴')
        let section = req.query.section;
        console.log(section);
        res.render('./mypage/index',{local,navi,section,login,nickname,profile,user_id,nickname,authority,})
    }else{
        console.log('section 안들어감')
        res.render('./mypage/index',{local,navi,section,login,nickname,profile,user_id,nickname,authority,});
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

let modiProfile =async(req,res)=>{
    let {user_id}=req.cookies;
    let cc=await user.findOne({
        where:{user_id,}
    })
    let {profile}=cc;
    res.render('./mypage/change_profile',{
        profile,
    })
}

let modiProfilePost = async(req,res)=>{
    let{user_id}=req.cookies;
    let profile=req.file.filename;
    await user.update({profile,},{
        where:{user_id,}
    })
    res.render('./mypage/index',{section:3})
}

function cryptoPw(pw){
    console.log('함수들어옴')
    return crypto.createHmac('sha256',Buffer.from(toString(process.env.salt))).update(pw).digest('base64').replace('==','').replace('=',''); 
}
module.exports={modiProfile,modiProfilePost,modiPwPost,index,modiInfo,modiInfoPost,modiPw,modiPwChk,modiPwChkPost,}