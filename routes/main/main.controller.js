const { idChk } = require("../user/user.controller");
const {board,user,board_manage,popup,group,curriculum,mainvideo,} = require('../../models/index');
const {Op} = require('sequelize');
const path = require('path');


const {recuruit} = require('../../models/index');

let main = async(req,res)=>{
    let pop = await popup.findAll();
    let {login,navi}=req;
    let {nickname}=req.cookies;

    let video = await mainvideo.findAll({
        where:{show_hide:'block'},
        order:[['id','DESC']],
        limit:1,
    })

    video1=video.video || "./main_video.mp4";

    let portfolio= await board.findAll({
        where:{board_number:'9',show_hide:'block'},
        order:[['id','DESC']],
        limit:6,
    })
    res.render('./main/main.html',{
        pop:pop,navi,login,nickname,portfolio:portfolio,video:video1
    });
    
}

let write = async(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    let sss= req.params.board;
    let review =0;
    let option =await curriculum.findAll({
        attributes:['id','cur_title']
    });
    let ddd= await board_manage.findOne({
                                where:{board_uri:sss}
                            })
    if(ddd.id==11){
        review =1;
    }
    res.render('./write',
    {   nickname,navi,login,
        modify:0,
        group:req.params.group,
        board_uri:req.params.board,
        board_name:ddd.board_title,
        board:req.params.board,
        review,
        curriculum:option
    });
}

let write_post = async(req,res)=>{
    let {group,board}=req.params;
    let sss= req.params.board;
    let cur_num = req.body.cur_num || 0;
    let ddd= await board_manage.findOne({
                                where:{board_uri:sss}
                            })
    let {title,contents} =req.body;
    let {user_id} = req.cookies;
    let userimage = req.file == undefined ? '' :req.file.filename;
    contents=contents.replace(/\&lt;/gi,"<").replace(/\&gt;/gi,">").replace(/\&quot;/gi,'"').replace(/\&amp;/gi,"&").replace(/\&nbsp;/gi," ");
    postWrite(user_id,ddd.id,title,contents,cur_num,userimage);
    res.redirect(`/router/${group}/${board}/`);
}

let modify = async(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies;
    let modnum = req.query.id;
    let {group,board} = req.params;
    let review =0;
    let option =await curriculum.findAll({
        attributes:['id','cur_title']
    });
    let ddd= await board_manage.findOne({
        where:{board_uri:board}
    })
    if(ddd.id==11){
        review =1;
    }
    await getModify(modnum)
    .then(aaa=>{
        res.render('./write',{review, board_name:ddd.board_title, curriculum:option, nickname, login, navi, id:modnum, modify:1, title:aaa.title, contents:aaa.contents, group, board_uri:board
    })
    }
    )
}

let modify_post =async(req,res)=>{
    let {title,contents,id}=req.body;
    contents=contents.replace(/\&lt;/gi,"<").replace(/\&gt;/gi,">").replace(/\&quot;/gi,'"').replace(/\&amp;/gi,"&").replace(/\&nbsp;/gi," ");
    let {user_id} = req.cookies;
    let {board,group} = req.params;
    let cur_num = req.body.cur_num || 0;
    let userimage = req.file == undefined ? '' :req.file.filename;
    let ddd= await board_manage.findOne({
        where:{board_uri:board}
    })
    cur_num=req.body.cur_num || 0;
    postWrite(user_id,ddd.id,title,contents,cur_num,userimage,'modify',id)
    res.redirect(`/router/${group}/${board}`);
}

let list = async(req,res)=>{
    let {navi,login}=req;
    let {nickname}=req.cookies
    let {board,group} = req.params;
    let page = req.query.page || 1;
    let isLogin = 0;
    if(req.cookies.user_id){
        isLogin=1;}
    
        // let {keyfield,keystring}=req.query;
    let keyfield = req.query.keyfield || "total";
    let keystring = req.query.keystring || "";
    let result2=await board_manage.findOne({
        where:{board_uri:board}
    })
    board_name=result2.board_title;
    
    await listfn(board,page,keyfield,keystring)
    .then(async(aa) =>{

        let msg=0;
        if(page==1){
            if(req.query.msg){
            msg=req.query.msg;
            }
            // 페이지 1일 때 예외사항임
            if(result2.form==1){
                res.render('./list',{
                    index:aa.index,msg,nickname,login,navi,title:aa.rst,group,board,board_name,keyfield,keystring,page,isLogin,
            })}
            else if(result2.form==3){
                res.render('./gallery',{
                    index:aa.index,msg,nickname,login,navi,title:aa.rst,group,board,board_name,keyfield,keystring,page,isLogin,
                })
            }
        }else if(aa.rst.length==0){
            // 페이지 1이 아니고 페이지가 아예 없을 때
            msg="페이지가 없습니다.";
            res.redirect(`/router/${group}/${board}/?page=${(page-1)}&msg=${msg}&keyfield=${keyfield}&keystring=${keystring}`)
        }else{
            // 페이지 1도 아니고 페이지도 있을 때
        if(req.query.msg){
            msg=req.query.msg;
        }
        if(result2.form==1){
            res.render('./list',{
                index:aa.index,msg,nickname,login,navi,title:aa.rst,group,board,board_name,keyfield,keystring,page,isLogin,
            })
        }else if(result2.form==3){
            res.render('./gallery',{
                index:aa.index,msg,nickname,login,navi,title:aa.rst,group,board,board_name,keyfield,keystring,page,isLogin,
            })
        }
        }
    })
}

    






let viewer = async(req,res)=>{
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
    let boardRst = await board_manage.findOne({
        where:{id:viewRst.board_number}
    })
    await board.update({hits,},{where:{id,}});
    res.render('./view',{
        nickname,login,navi,id,group,board:board2,user_id,title,date,contents,nickname2,hits,authority,file1,board_name:boardRst.board_title,hits,
    })

    
}

let delete_board = async(req,res)=>{
    let boardId = req.query.id;
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
    let index;
    boardId = result.id;
////토탈이 되어 있을 때....
    if(keyfield=='total'){
        console.log
        rst = await board.findAll({
            where:{board_number:boardId,show_hide:'block',
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
        index = await board.findAll({
            attribute:['id'],
            where:{board_number:boardId,show_hide:'block',
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
        })
    }else{
    //토탈이 안 되어 있을 때
        if(keyfield=='user_id'){
            rst = await board.findAll({
                where:{board_number:boardId, show_hide:'block',user_id:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            })
            index = await board.findAll({
                attribute:['id'],
                where:{board_number:boardId, show_hide:'block',user_id:`%${keystring}%`},
            })
        }
        else if(keyfield=='title'){
            rst = await board.findAll({
                where:{board_number:boardId, show_hide:'block', title:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            })
            index=await board.findAll({
                attribute:['id'],
                where:{board_number:boardId, show_hide:'block', title:`%${keystring}%`},
            })
        }
        else if(keyfield=='nickname'){
            rst = await board.findAll({
                where:{board_number:boardId, show_hide:'block', nickname:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            })
            index=await board.findAll({
                attribute:['id'],
                where:{board_number:boardId, show_hide:'block', nickname:`%${keystring}%`},
            })
        }
        else if(keyfield=='contents'){
            rst = await board.findAll({
                where:{board_number:boardId, show_hide:'block', contents:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            })
            index=await board.findAll({
                attribute:['id'],
                where:{board_number:boardId, show_hide:'block', contents:`%${keystring}%`},
            })
        }else{
            //아무것도 선택 안되었을때 보통 처음임
            rst = await board.findAll({
                where:{board_number:boardId, show_hide:'block'},
                order:[['id','DESC']],
                limit:12,
                offset:12*(num-1)
            }) 
            index=await board.findAll({
                attribute:['id'],
                where:{board_number:boardId, show_hide:'block'},
            })
        }
    }

    rst.forEach(e=>{
        changeDate(e);
    })
    for(i=0;i<rst.length;i++){
        rst[i].dataValues.file3 = parseInt(index.length)-(page-1)*12-i;
    }
    index=index.length;
    return aa={rst,index};
}

function changeDate(e){
    let cc=e.dataValues.date;
        let year = cc.getFullYear();
        let month = cc.getMonth()+1;
        if(month<10)month ='0'+month;
        let date = cc.getDate();
        if(date<10)date = '0'+date;
        cc = `${year}-${month}-${date}`
        e.dataValues.date=cc;
}

async function userFindUsingid(user_id){///promise 객체임니다...
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
    return {title,contents,nickname}=findBoardCon; 
}
async function postWrite(uid,boardnum,title,contents,cur_num,userimage,mod,boardid,){
    let userId;
    if(mod)
    {   //수정이라면
        await board.update( {contents,title,file1:userimage,cur_num,},{where:{id:boardid} })
    } 
    else{//수정이 아니라면
        let nickname2 = await userFindUsingid(uid)
        .then(async(res)=>{
            let nickname2=res.nickname
            let nickname = JSON.stringify(nickname2).replace("\"",'').replace("\"",'');
            let boardCreate = await board.create({
                cur_num,user_id:uid,board_number:boardnum,title,nickname,nickname2,contents,file1:userimage})
        })        }
        console.log('닉네임 가져오냐');
}

let onlygroup = async(req,res)=>{
    if(req.params.group=='favicon.ico'){
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.send('Cannot ' + req.method + ' ' + req.url);
    }
    let groupName =req.params.group;
    let aa=await group.findOne({
        where:{board_uri:groupName}
    });
    let bb = await board_manage.findAll({
        where:{'group':aa.id}
    })
    let cc = bb[0].board_uri;
    res.redirect(`/router/${groupName}/${cc}`);
    // res.send(bb.datavalues.board_uri)};
}

//list,modify,delete,recuruits


module.exports = {main,viewer, write, write_post, modify_post, list, modify, delete_board,onlygroup}