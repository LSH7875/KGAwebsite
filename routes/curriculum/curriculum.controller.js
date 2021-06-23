let curriculum=(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./curriculum/curriculum',{
        navi,login,nickname,
    })
}

let curriculum2 = (req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    res.render('./curriculum/curriculum2',{
        nickname,navi,login,
    })
}
module.exports = {curriculum,curriculum2,};