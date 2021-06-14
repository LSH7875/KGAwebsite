const {board,user} = require('../../models/index');
const mysql = require('mysql');

let review_write=(req,res)=>{
    res.render('./community/review/write');
}

let review_write_post = async(req,res)=>{

    let [title,contents] =req.body.title;
    let {user_id} = req.cookies;
    console.log(user_id);
    let result = await user.findOne({
        where:{user_id,}
    });

    console.log('nickname');
    console.log(result.dataValues.nickname);
    let {nickname} = result;
    let nickname2 = result.dataValues.nickname;
    board_name = 1;
    


    let rst = await board.create({
        title, user_id, nickname, nickname2, contents, board_name,
    })
    
    res.redirect('/');
}

let review_modify = (req,res)=>{
    res.render('./community/review/modify');
}

let review_modify_post =(req,res)=>{
    res.redirect('/community/review/read');
}

let review_list = (req,res)=>{
    res.render('./community/review/list');
}

let review_delete=(req,res)=>{
    res.redirect('/community/review');
}



module.exports = {review_write,review_write_post,review_modify,review_modify_post,review_list,review_delete}//notice, review, kiStory, kiReporter, kiProfessor,};