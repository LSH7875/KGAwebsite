// let curriculum=(req,res)=>{
//     let {navi,login}=req;
//     let {nickname}=req.cookies
//     res.render('./curriculum/curriculum',{
//         navi,login,nickname,
//     })
// }

let curriculum2 = (req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    res.render('./curriculum/class_intro',{
        nickname,navi,login,
    })
}
let block= (req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    res.render('./curriculum/sub_sub_page(block)',{
        nickname,navi,login,
    })
}
let programing= (req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    res.render('./curriculum/sub_sub_page(programing)',{
        nickname,navi,login,
    })
}
let vrar= (req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    res.render('./curriculum/sub_sub_page(vr,ar)',{
        nickname,navi,login,
    })
}

let gameArchi = (req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    res.render('./curriculum/sub_sub_page(gameArchi)',{
        nickname,navi,login,
    })

}




module.exports = {curriculum2,block,programing,vrar,gameArchi,};