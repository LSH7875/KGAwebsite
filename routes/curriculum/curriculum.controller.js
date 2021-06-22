let curriculum=(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    res.render('./curriculum/curriculum',{
        navi,login,nickname,
    })
}

let curriculum2 = (req,res)=>{
    res.render('./curriculum/curriculum2')
}
module.exports = {curriculum,curriculum2,};