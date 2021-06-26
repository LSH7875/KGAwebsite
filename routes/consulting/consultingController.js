const {board}=require('../../models/index');

let apply=(req,res)=>{
    let {navi,login} = req;
    let {nickname}=req.cookies;
    res.render('./consulting/apply',{navi,login,nickname,})
}
let applyPost=async (req,res)=>{
    let nickname = "anonymous";

}
module.exports={apply,applyPost,}