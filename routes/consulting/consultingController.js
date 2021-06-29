const {apply,board}=require('../../models/index');

let applys=(req,res)=>{
    let {navi,login} = req;
    let {nickname}=req.cookies;
    res.render('./consulting/apply',{navi,login,nickname,board_name:"지원하기",group:"consulting"})
}
let applyPost=async (req,res)=>{
    await apply.create({
        cur_title:req.body.objective,
        sex:req.body.sex,
        name:req.body.nickname,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        motive:req.body.motive,
        privacy:req.body.privacy
    })
    res.send("<script>alert('지원이 완료되었습니다.');location.href='/router/consulting/apply';</script>");

}
module.exports={applys,applyPost,}