const {board,user,board_manage} = require('../models/index');
//id로 user에서 체크해서 읽기 등급 알아온다. 없으면 -1부여
//board_num으로 체크해서 읽기 등급 알아온다.
//그래서 id의 읽기등급이 boardnum의 읽기 등급보다 높으면
//next()로 넘어가고 그렇지 않으면 alert내용 뜨게끔
module.exports = async(req,res,next)=>{
    let user_grade;
    let board_writegrade;    
    let {user_id} =req.cookies;
    let {board} =req.params; 
    let usergrade=await userFindUsingid(user_id)
        .then(aa=>{
            user_grade = aa.user_grade ||-1;
        }) 

    let boardgrade=await boaradFindUsinguri(board)
        .then(bb=>{
            board_writegrade = bb.write_authority;
        })    
       
    if(user_grade >= board_writegrade){
        next();
    }else{
        res.send('등급 조절 필요합니다.');
        //res.status(401).send("unauthenticated");
    }
}


async function userFindUsingid(user_id){///promise 객체임니다...
    let userfind = await user.findOne({
        where:{user_id,}
    })
    return userfind;
}

async function boaradFindUsinguri(boarduri){
let findBoardCon =await board_manage.findOne({
    where:{board_uri:boarduri}
})
return findBoardCon;
}