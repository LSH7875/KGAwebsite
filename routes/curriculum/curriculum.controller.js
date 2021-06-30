const {Op} = require('sequelize');
const {curriculum, consultant, cur_cardinal,board, faq}=require('../../models/index');

let curriculum2 = (req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    res.render('./curriculum/6gak',{
        nickname,navi,login,
    })
}

//여기서부터 변수별로받는거임
let curr= async(req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    let {curr}=req.params;
    
    let result = await curriculum.findOne({
        where:{cur_uri:curr}
    })

    //가장 최근 거 보여주기
    let rst = await cur_cardinal.findOne({
        where:{curr_id:result.id},
        order:[['id','DESC']],
            limit:1        
    })



    // 제대로 작동함
    let rstReview = await board.findAll({
        where:{cur_num:result.id, show_hide:'block'},
        order:[['id','DESC']],
        limit:6
    })


    //잘작동함
    let cst = await consultant.findAll({
        where:{
            [Op.or]:[{id: result.professor1} ,{id: result.professor2}]}
    })
    let faqq= await faq.findAll({
        where:{
            [Op.or]:[{id:result.faq1},{id:result.faq2},{id:result.faq3}]
        }
    })
    res.render('./curriculum/sub_sub_page',{
        faq:faqq,nickname,navi,login,curr,result,rst,rstReview,cst,
    })
}

let curriculum1 = (req,res)=>{
    res.redirect('/router/curriculum');
}



module.exports = {curriculum2,curr,curriculum1,};