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
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./college/location.html',{
        navi,login,nickname,
    })
}
module.exports = {introduction, history, teachers, interior, location,};