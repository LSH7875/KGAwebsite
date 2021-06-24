const {user,board_manage} = require('../models/index');

const express = require('express');
const router = express.Router({mergeParams: true});


//id로 user에서 체크해서 읽기 등급 알아온다. 없으면 -1부여
//board_num으로 체크해서 읽기 등급 알아온다.
//그래서 id의 읽기등급이 boardnum의 읽기 등급보다 높으면
//next()로 넘어가고 그렇지 않으면 alert내용 뜨게끔
module.exports = async(req,res,next)=>{
    console.log('읽기미들웨어들어옴');
    let user_grade;
    let board_readgrade;    
    let {user_id} = req.cookies;
    let {board} = req.params; 

    let usergrade=await userFindUsingid(user_id)
        .then(aa=>{
            user_grade = aa.user_grade ||-1;
            console.log('읽기등급');
            console.log(user_grade);
        }) 

    let boardgrade=await boaradFindUsinguri(board)
        .then(bb=>{
            
            board_readgrade = bb.read_authority;
            
            console.log('게시판 읽기등급');
            console.log(bb.read_authority);
        })    

    if(user_grade >= board_readgrade) next();

    else{
        res.json('잘못되었습니다.');
        //res.status(401).send("unauthenticated");
    }
}


async function userFindUsingid(user_id){///promise 객체임니다...
    console.log('userFindUsingid들어옴')
    let userfind = await user.findOne({
        where:{user_id,}
    })
    console.log('findusingid:',userfind)
    return userfind;
}
async function boaradFindUsinguri(boarduri){
let findBoardCon =await board_manage.findOne({
    where:{board_uri:boarduri}
})
return findBoardCon;
}