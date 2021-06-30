const {board,user,board_manage} = require('../../models/index');
const mysql = require('mysql');

let review_write=(req,res)=>{
    res.render('./write',{modify:0,group:'community',board_uri:'review'});
}

let review_write_post = async(req,res)=>{
    let {title,contents} =req.body;
    let {user_id} = req.cookies;
    let {nickname}= await userFindUsingid(user_id);
    postWrite(user_id,3,title,contents,nickname);
    res.redirect('/router/community/review');
}

let review_modify = (req,res)=>{
    let modnum = req.query.id;
    let {title,contents} = getModify(modnum);
    res.render('./write',{modify:1,title,contents,nickname,group:'community',board_uri:'review'
    });
}

let review_modify_post =(req,res)=>{
    let [title,contents,id]=req.body;//req.body.id는 총데이터의 글번호=board.id
    let {user_id} = req.cookies;
    let {nickname}=userFindUsingid(user_id);
    postWrite(user_id,3,title,contents,nickname,mod,id)
    res.redirect('/router/community/review');
}

let review_list = (req,res)=>{
    let name = 'review';
    // let {page} = req.query;
    res.send(list(name));
}

let review_delete=(req,res)=>{
    let boardId = req.query.id;
    postDelete(boardId);
}





//////함수


async function postDelete(boardid){
    await board.delete({
        where:{id:boardid}
    })
}

async function list(name,page){
    let boardId;
    let num;

    let result = await board_manage.findOne({
        where:{board_uri:name}
    })

    boardId = result.id;

    let rst= await board.findAll({
        where:{board_number:boardId}
    })

    return rst;

}

async function userFindUsingid(user_id){
    let userfind = await user.findOne({
        where:{user_id,}
    })
    return userfind;
}


async function userFindUsingnick(nickname){
    let userfind = await user.findOne({
        where:{nickname,}
    })
    return userfind;
}

async function view(id,userid){
    let authority = 0;
    let viewRst = await board.findOne({
        where:{id:id}
    })

    let {user_id,title,date,contents,nickname2,hit}=viewRst;
    
    if(userid == user_id ){
        authority=1;
    }
    hit++;

    await board.update({hit:hit+1},{where:{id:vidwId}});

    res.render('./bord_view',{
        user_id,user_id,title,date,contents,nickname2,hit,
    })
}


async function boardMFindUsingNum(boarduri){

}

async function getModify(boardid){
    let modify=1;
    //보드 id로 해당하는 내용 찾기
    let findBoardCon =await board.findOne({
        where:{id:boardid}
    })
    return {title,contents,nickname}=findBoardCon; 
}
async function postWrite(uid,boardnum,title,contents,name,mod,boardid){
    let userId;
    if(mod)
    {
        let boardUpdate=await board.update( {contents,title,},{where:{id:boardid} })
    } 
    else{
        let nickname2 = await userFindUsingnick(name).nickname;
        let {nickname} = await userFindUsingnick(name);
        let boardCreate = await board.create({
            user_id:uid,board_number:boardnum,title,nickname,nickname2,contents})
    }  
}
module.exports = {review_write,review_write_post,review_modify,review_modify_post,review_list,review_delete,}
