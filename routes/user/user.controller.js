const {user} = require('../../models/index');

let signAgree=(req,res)=>{
    res.render('./user/signupAgree')
}

let signup =async(req,res)=>{
    res.render('./user/signup',{
        ad_agree:req.body.ad_agree
    })
}

let signupSuccess = (req,res)=>{
    
    let {user_id, user_pw, user_name, User_email, user_birth, user_sex,phone} = req.body;
    
    console.log(req.body);
    
    
    try{
        res.redirect('/');
    }catch(e){
        console.log(e)
    }
}

let onchnageUser=async(req,res)=>{

}

let login = (req,res)=>{
    res.render('./user/login.html');
}

let loginPost = async(req,res)=>{

}


module.exports = {signAgree, signup, login, loginPost, onchnageUser, signupSuccess, };