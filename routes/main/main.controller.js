const { idChk } = require("../user/user.controller");
const {board,user,board_manage} = require('../../models/index');
const {Op} = require('sequelize');
//const {postWrite,getModify,view,postDelete,listfn,userFindUsingid}=require('../../function');



//let bbb ={board,user,board_manage}
// ccc = {user_id,contents,title,nickname};




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
        res.render('./write',{id:modnum,modify:1,title:aaa.title,contents:aaa.contents,group,board_uri:board
    })
    }
    )
}
 

let modify_post =async(req,res)=>{
    let {title,contents,id}=req.body;
    console.log(id);//req.body.id는 총데이터의 글번호=board.id
    let {user_id} = req.cookies;
    let {board,group} = req.params;
    let ddd= await board_manage.findOne({
        where:{board_uri:board}
    })
    postWrite(user_id,ddd.id,title,contents,'modify',id)
    res.redirect(`/${group}/${board}`);
}

let list = async(req,res)=>{
    console.log('템플릿값');
    console.log(req.navi);
    let {board,group} = req.params;
    let {page} = req.query || 1;
    let {keyfield,keystring}=req.query;

    await listfn(board,page,keyfield,keystring)
    .then(async(aa) =>{
        console.log('then1');
            res.render('./list',{
        title:aa,group,board,
        })
    })
}

    







let viewer = async(req,res)=>{
    // console.log('templete');
    // console.log(req.templete);
    // console.log('templete end');
    let {group}=req.params;
    let board2= req.params.board;
    let id = req.query.id;
    let userid=req.cookies.user_id;
    let authority = 0;
    let viewRst = await board.findOne({
        where:{id,}
    })

    let {user_id,title,date,contents,nickname2,hits}=viewRst;
    
    if(userid == user_id ){
        authority=1;
    }
    hits++;

    await board.update({hits,},{where:{id,}});

    res.render('./view',{
        id,group,board:board2,user_id,title,date,contents,nickname2,hits,authority,
    })

    
}

let delete_board = async(req,res)=>{
    let boardId = req.query.id;
    console.log('boardId',boardId);
    let {group,board} = req.params;
    await postDelete(boardId)
    .then(async(aa)=>{
        res.redirect(`/${group}/${board}`);
    });
}

//////함수


async function postDelete(boardid){
    await board.destroy({
        where:{id:boardid}
    })
}


/////여기가 바로 리스트이다.///

async function listfn(name,page,keyfield,keystring){
    let boardId;
    let num=page || 1;
    let result = await board_manage.findOne({
        where:{board_uri:name}
    })
    let rst;
    console.log('result값까지 구함...',result);
    console.log(result.id);
    boardId = result.id;
////토탈이 되어 있을 때....
    if(keyfield=='total'){
        console.log
        rst = await board.findAll({
            where:{board_number:boardId,
                    [Op.or]:[
                        {
                        user_id:{[Op.like]:`%${keystring}%`}
                        },{                        
                        title:{[Op.like]:`%${keystring}%`}
                        },{
                        nickname:{[Op.like]:`%${keystring}%`}
                        },{
                        contents:{[Op.like]:`%${keystring}%`}
                        }
                        ]},
            order:[['id','DESC']],
            limit:10,
            offset:10*(num-1)
        })
    }else{
    //토탈이 안 되어 있을 때
        if(keyfield=='user_id'){
            rst = await board.findAll({
                where:{board_number:boardId, user_id:`%${keystring}%`},
                order:[['id','DESC']],
                limit:10,
                offset:10*(num-1)
            })
        }
        else if(keyfield=='title'){
            rst = await board.findAll({
                where:{board_number:boardId, title:`%${keystring}%`},
                order:[['id','DESC']],
                limit:10,
                offset:10*(num-1)
            })
        }
        else if(keyfield=='nickname'){
            rst = await board.findAll({
                where:{board_number:boardId, nickname:`%${keystring}%`},
                order:[['id','DESC']],
                limit:10,
                offset:10*(num-1)
            })
        }
        else if(keyfield=='contents'){
            rst = await board.findAll({
                where:{board_number:boardId, contents:`%${keystring}%`},
                order:[['id','DESC']],
                limit:10,
                offset:10*(num-1)
            })
        }else{
            console.log('이거 찍혀야 한다구...')
            rst = await board.findAll({
                where:{board_number:boardId},
                order:[['id','DESC']],
                limit:10,
                offset:10*(num-1)
            }) 
        }
    }
    console.log('이것이 rst이다');
    console.log(rst);
    console.log('어디로 가는가');
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

    // await board.update({hit:hit},{where:{id:id}});

    // res.render('./bord_view',{
    //     user_id,title,date,contents,nickname2,hit,
    // })

    return {user_id,title,date,contents,nickname2,hit,}
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
        await board.update( {contents,title,},{where:{id:boardid} })
        console.log('mod실행되나요')
    } 
    else{
        console.log('postWrite fn 들어옴');
        let nickname2 = await userFindUsingid(uid)
        .then(async(res)=>{
            let nickname2=res.nickname
            console.log('postWriteNickname',nickname2)
            let nickname = JSON.stringify(nickname2).replace("\"",'').replace("\"",'');
            let boardCreate = await board.create({
                user_id:uid,board_number:boardnum,title,nickname,nickname2,contents})
        })        }
        console.log('닉네임 가져오냐');
}

//list,modify,delete
module.exports = {main,viewer, write, write_post, modify_post, list, modify, delete_board, }