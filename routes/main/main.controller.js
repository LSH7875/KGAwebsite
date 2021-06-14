const { idChk } = require("../user/user.controller");
const {board,user,board_manage} = require('../../models/index');

let bbb={board,user,board_manage}

let main = (req,res)=>{
    res.render('./main/main.html');
}

let write = async(req,res)=>{
    let sss= req.params.board;
    // let ccc= bbb[sss];  
    let ddd= await board_manage.findOne({
                                where:{board_uri:sss}
                            })
    console.log(ddd);
    res.render('./write',
    {
        modify:0,
        group:req.params.group,
        board_uri:req.params.board,
        board_name:ddd.board_title
    });
}

let write_post = async(req,res)=>{
    let sss= req.params.board;
    // let ccc= bbb[sss];  
    let ddd= await board_manage.findOne({
                                where:{board_uri:sss}
                            })
    let {title,contents} =req.body;
    let {user_id} = req.cookies;
    // console.log('writepost_nickname',nickname)//여기까진 성공
    postWrite(user_id,ddd.id,title,contents);
    res.redirect('/community/review');
}
////여기까지 성공
let modify = async(req,res)=>{
    let modnum = req.query.id;
    let {group,board} = req.params;
    await getModify(modnum)
    .then(aaa=>{
        console.log('res');
        console.log(aaa.title);
        res.render('./write',{modify:1,title:aaa.title,contents:aaa.contents,group,board_uri:board
    })
    }
    )
}
 

let modify_post =async(req,res)=>{
    let {title,contents,id}=req.body;//req.body.id는 총데이터의 글번호=board.id
    let {user_id} = req.cookies;
    let {board,group} = req.params;
    let ddd= await board_manage.findOne({
        where:{board_uri:board}
    })
    postWrite(user_id,ddd.id,title,contents,1,id)
    res.redirect(`/${group}/${board}`);
}

let list = (req,res)=>{
    let name = 'review';
    // let {page} = req.query;
    res.send(listfn(name));
}

let delete_board = async(req,res)=>{
    let boardId = req.query.id;
    postDelete(boardId);
}





//////함수


async function postDelete(boardid){
    await board.delete({
        where:{id:boardid}
    })
}

async function listfn(name,page){
    let boardId;
    let num;

    let result = await board.findAll({
        where:{board_uri:name}
    })

    boardId = result.id;

    let rst= await board.findAll({
        where:{board_number:boardId}
    })

    return rst;
}

async function userFindUsingid(user_id){///promise 객체임니다...
    console.log('userFindUsingid들어옴')
    let userfind = await user.findOne({
        where:{user_id,}
    })
    console.log('findusingid:',userfind)
    return userfind;
}


async function userFindUsingnick(nickname){
    console.log('닉네임가지고 찾는거')
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
    console.log('findBoardCon',findBoardCon);
    return {title,contents,nickname}=findBoardCon; 
}
async function postWrite(uid,boardnum,title,contents,mod,boardid){
    let userId;
    if(mod)
    {   
        console.log('mod실행됨');
        let boardUpdate=await board.update( {contents,title,},{where:{id:boardid} })
        console.log('mod실행되나요')
    } 
    else{
        console.log('postWrite fn 들어옴');
        let nickname2 = await userFindUsingid(uid)
        .then(async(res)=>{
            let nickname2=res.nickname
            console.log('postWriteNickname',nickname2)
            let nickname = JSON.stringify(nickname2);
            let boardCreate = await board.create({
                user_id:uid,board_number:boardnum,title,nickname,nickname2,contents})
        })        }
        console.log('닉네임 가져오냐');
}

//list,modify,delete
module.exports = {main, write, write_post, modify_post, list, modify, delete_board, }