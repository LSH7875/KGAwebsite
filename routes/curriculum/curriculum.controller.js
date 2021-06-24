const {Op} = require('sequelize');
const {curriculum, consultant, cur_cardinal,board, faq}=require('../../models/index');

let curriculum2 = (req,res)=>{
    let {nickname}=req.cookies;
    let {navi,login}=req;
    res.render('./curriculum/class_intro',{
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
    console.log(result);
    // let aa = await sequelize.query(`SELECT faq_id FROM faq_curriculum WHERE cur_id=${result.id}`);
    // console.log(aa[0]);
    // res.send(aa[0]);

    //가장 최근 거 보여주기
    let rst = await cur_cardinal.findOne({
        where:{curr_id:result.id},
        order:[['id','DESC']],
            limit:1        
    })



    // 제대로 작동함
    let rstReview = await board.findAll({
        where:{cur_num:result.id},
        order:[['id','DESC']],
        limit:6
    })


    //잘작동함
    let cst = await consultant.findAll({
        where:{
            [Op.or]:[{id: result.professor1} ,{id: result.professor2}]}
    })
    console.log('faq전')
    let faqq= await faq.findAll({
        where:{
            [Op.or]:[{id:result.faq1},{id:result.faq2},{id:result.faq3}]
        }
    })
    console.log('faq후')
    console.log(faqq);
    res.render('./curriculum/sub_sub_page',{
        faq:faqq,nickname,navi,login,curr,result,rst,rstReview,cst,
    })
}





module.exports = {curriculum2,curr,};