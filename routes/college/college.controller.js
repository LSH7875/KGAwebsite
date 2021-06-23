require('dotenv').config();

let introduction=(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/introduction.html',{
        navi,login,nickname,
    })

}

let history =(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/history.html',{
        navi,login,nickname,
    })
}

let teachers=(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/teachers.html',{
        navi,login,nickname,
    })
}

let interior=(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/interior.html',{
        navi,login,nickname,
    })
}

let location = (req,res)=>{
    const map_key = process.env.kakao_js_key
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/location.html',{
        navi,login,nickname,map_key:map_key
    })
}
module.exports = {introduction, history, teachers, interior, location,};