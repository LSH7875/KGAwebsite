const {user,board,board_manage,group}=require('./models')



async function postDelete(boardid){
    await board.destroy({
        where:{id:boardid}
    })
}

async function listfn(name,page){
    let boardId;
    let num=page || 1;
    console.log('nym,',typeof num);

    let result = await board_manage.findOne({
        where:{board_uri:name}
    })

    console.log(result.id);
    boardId = result.id;

    let rst= await board.findAll({
        where:{board_number:boardId},
        order:[['id','DESC']],
        limit:10,
        offset:10*(num-1)

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

module.export={postWrite,getModify,view,postDelete,listfn,userFindUsingid}