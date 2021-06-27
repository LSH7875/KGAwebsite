const { idChk } = require("../user/user.controller");
const {board,user,board_manage,popup,group} = require('../../models/index');
const {Op} = require('sequelize');
const path = require('path');
//const {postWrite,getModify,view,postDelete,listfn,userFindUsingid}=require('../../function');

//let {navi}=req;
//안한 곳:modify_post

//let bbb ={board,user,board_manage}
// ccc = {user_id,contents,title,nickname};


const {recuruit} = require('../../models/index');

// let recuruits = async(req,res)=>{
//     let {navi,login} = req;
//     let {nickname} = req.cookies;
//     let page = req.query.page || 1;
//     console.log(recuruit);
//     let rst = await recuruit.findAll({
//         // order:[['id','DESC']],
//         // limit:10,
//         // offset:10*(page-1)
//     })
//     .then(aa=>{
//         res.render('./job/recuruit',{job:aa,nickname,navi,login,})
//     })
   
// }





let main = async(req,res)=>{
    console.log('main들어옴')
    let pop = await popup.findAll();
    let {login,navi}=req;
    let {nickname}=req.cookies;
    res.render('./main/main.html',{
        pop:pop,navi,login,nickname,
    });
    
}

let write = async(req,res)=>{
    console.log('write들어옴...');
    console.log(req.cookies.user_id)
    let {navi,login}=req;
    let {nickname}=req.cookies
    let sss= req.params.board;
    // let ccc= bbb[sss];  
    let ddd= await board_manage.findOne({
                                where:{board_uri:sss}
                            })
    console.log(ddd);
    console.log('navi');
    console.log(req.navi);
    console.log('-------navi---------')
    res.render('./write',
    {   nickname,navi,login,
        modify:0,
        group:req.params.group,
        board_uri:req.params.board,
        board_name:ddd.board_title
    });
}
//멀터실험
let write_post = async(req,res)=>{
    let {group,board}=req.params;
    let sss= req.params.board;
    // let ccc= bbb[sss];  
    let ddd= await board_manage.findOne({
                                where:{board_uri:sss}
                            })
    let {title,contents} =req.body;
    let {user_id} = req.cookies;
    let userimage = req.file == undefined ? '' :req.file.filename;
    console.log('userimage');
    console.log(userimage);
    
    // console.log('writepost_nickname',nickname)//여기까진 성공
    postWrite(user_id,ddd.id,title,contents,userimage);
    res.redirect(`/router/${group}/${board}/`);
}
////여기까지 성공
let modify = async(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    let modnum = req.query.id;
    let {group,board} = req.params;
    await getModify(modnum)
    .then(aaa=>{
        console.log('res');
        console.log(aaa.title);
        res.render('./write',{nickname,login,navi,id:modnum,modify:1,title:aaa.title,contents:aaa.contents,group,board_uri:board
    })
    }
    )
}
 

let modify_post =async(req,res)=>{
    let {title,contents,id}=req.body;
    console.log(id);//req.body.id는 총데이터의 글번호=board.id
    let {user_id} = req.cookies;
    let {board,group} = req.params;
    let userimage = req.file == undefined ? '' :req.file.filename;
    let ddd= await board_manage.findOne({
        where:{board_uri:board}
    })
    postWrite(user_id,ddd.id,title,contents,userimage,'modify',id)
    res.redirect(`/router/${group}/${board}`);
}

let list = async(req,res)=>{
    console.log('list들어옴')
    let {navi,login}=req;
    let {nickname}=req.cookies
    let {board,group} = req.params;
    let page = req.query.page || 1;
    let {keyfield,keystring}=req.query;
    let result2=await board_manage.findOne({
        where:{board_uri:board}
    })

    // console.log('result2');
    // console.log(result2);
    
    await listfn(board,page,keyfield,keystring)
    .then(async(aa) =>{
        console.log('page',page);
        let msg=0;
        if(page==1){
            if(req.query.msg){
            console.log('msg값 바꾸는 과정');
            msg=req.query.msg;
            console.log('msg',msg)
            }
            // 페이지 1일 때 예외사항임
            console.log('리스트에서 페이지 1인거 들어옴 aa의 폼은?')
            console.log(result2.form);
            console.log('page1일때 msg')
            console.log(msg);
            if(result2.form==1){
                res.render('./list',{
                    msg,nickname,login,navi,title:aa,group,board,
            })}
            else if(result2.form==3){
                console.log('갤러리일때')
                res.render('./gallery',{
                    msg,nickname,login,navi,title:aa,group,board,
                })
            }
        }else if(aa.length==0){
            // 페이지 1이 아니고 페이지가 아예 없을 때
            console.log('aaif문 들어옴')
            console.log('page',page);
            msg="페이지가 없습니다.";
            console.log('리다이렉트 먹나?')
            res.redirect(`/router/${group}/${board}/?page=${(page-1)}&msg=${msg}`)
        }else{
            // 페이지 1도 아니고 페이지도 있을 때
        if(req.query.msg){
            console.log('msg값 바꾸는 과정');
            msg=req.query.msg;
            console.log('msg',msg)
        }
        // console.log(aa.length);
        console.log('렌더한다');
        console.log('이제 띄울 시간이다. sg어떠냐')
        console.log(msg);
        if(result2.form==1){
            console.log('페이지1아니고 페이지 있고 리스트일때')
            res.render('./list',{
                msg,nickname,login,navi,title:aa,group,board,
            })
        }else if(result2.form==3){
            console.log('페이지 1 아니고 페이지 있고 갤러리일때')
            res.render('./gallery',{
                msg,nickname,login,navi,title:aa,group,board,
            })
        }
        }
    })
}

    







let viewer = async(req,res)=>{
    // console.log('templete');
    // console.log(req.templete);
    // console.log('templete end');
    let {navi,login}=req;
    let {group}=req.params;
    let {nickname}=req.cookies
    let board2= req.params.board;
    let id = req.query.id;
    let userid=req.cookies.user_id;
    let authority = 0;
    let viewRst = await board.findOne({
        where:{id,}
    })
    changeDate(viewRst);
    let {user_id,title,date,contents,nickname2,hits,file1}=viewRst;
    
    if(userid == user_id ){
        authority=1;
    }
    hits++;

    await board.update({hits,},{where:{id,}});
    console.log('viewer의 file1');
    console.log(file1);
    res.render('./view',{
        nickname,login,navi,id,group,board:board2,user_id,title,date,contents,nickname2,hits,authority,file1,
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
    // console.log('result값까지 구함...',result);
    // console.log(result.id);
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
            limit:12,
            offset:12*(num-1)
        })
    }else{
    //토탈이 안 되어 있을 때
        if(keyfield=='user_id'){
            rst = await board.findAll({
                where:{board_number:boardId, user_id:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            })
        }
        else if(keyfield=='title'){
            rst = await board.findAll({
                where:{board_number:boardId, title:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            })
        }
        else if(keyfield=='nickname'){
            rst = await board.findAll({
                where:{board_number:boardId, nickname:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            })
        }
        else if(keyfield=='contents'){
            rst = await board.findAll({
                where:{board_number:boardId, contents:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            })
        }else{
            console.log('아무것도 선택 안되었을때 보통 처음임')
            rst = await board.findAll({
                where:{board_number:boardId},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            }) 
        }
    }
    // console.log('이것이 rst이다');
    // console.log(rst);
    // console.log('어디로 가는가');
    rst.forEach(e=>{
        changeDate(e);
    })
    // rst.forEach((e)=>{
    //     let cc=e.dataValues.date;
    //     let year = cc.getFullYear();
    //     let month = cc.getMonth()+1;
    //     if(month<10)month ='0'+month;
    //     let date = cc.getDate();
    //     if(date<10)date = '0'+date;
    //     cc = `${year}-${month}-${date}`
    //     console.log(cc);
    //     e.dataValues.date=cc;
    // })
    return rst;
}

function changeDate(e){
    let cc=e.dataValues.date;
        let year = cc.getFullYear();
        let month = cc.getMonth()+1;
        if(month<10)month ='0'+month;
        let date = cc.getDate();
        if(date<10)date = '0'+date;
        cc = `${year}-${month}-${date}`
        console.log(cc);
        e.dataValues.date=cc;
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
async function postWrite(uid,boardnum,title,contents,userimage,mod,boardid,){
    let userId;
    
    console.log('///////////////함수의 userimage');
    console.log(userimage);
    if(mod)
    {   
        console.log('mod실행됨');
        await board.update( {contents,title,file1:userimage},{where:{id:boardid} })
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
                user_id:uid,board_number:boardnum,title,nickname,nickname2,contents,file1:userimage})
        })        }
        console.log('닉네임 가져오냐');
        // res.redirect(`/${group}/${board}`);
}

let onlygroup = async(req,res)=>{
    if(req.params.group=='favicon.ico'){
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.send('Cannot ' + req.method + ' ' + req.url);
    }
    console.log('onlygroup들어옴')
    let groupName =req.params.group;
    console.log('req.params');
    console.log(req.params);
    let aa=await group.findOne({
        where:{board_uri:groupName}
    });
    console.log('aa구함');
    console.log(aa);
    let bb = await board_manage.findAll({
        where:{'group':aa.id}
    })
    let cc = bb[0].board_uri;
    console.log(cc);
    console.log('res주소');
    console.log(`/${groupName}/${cc}`);
    res.redirect(`/${groupName}/${cc}`);
    // res.send(bb.datavalues.board_uri)};
}

//list,modify,delete,recuruits


module.exports = {main,viewer, write, write_post, modify_post, list, modify, delete_board,onlygroup}