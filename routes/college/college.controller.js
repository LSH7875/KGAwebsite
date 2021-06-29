require('dotenv').config();
const nunjucks = require('nunjucks');

let group="college"

let introduction=(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/introduction.html',{
        navi,login,nickname,group,board_name:'학원소개'
    })

}

let history =(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/history.html',{
        navi,login,nickname,group,board_name:'연혁'
    })
}

let teachers=(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/teachers.html',{
        navi,login,nickname,group,board_name:'교직원소개'
    })
}

let interior=(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/interior.html',{
        navi,login,nickname,group,board_name:'시설소개'
    })
}

let location = (req,res)=>{
    const map_key = process.env.kakao_js_key
    console.log(process.env.kakao_js_key);
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/location.html',{
        navi,login,nickname,map_key:map_key,group,board_name:'오시는길'
    })
}
module.exports = {introduction, history, teachers, interior, location,};