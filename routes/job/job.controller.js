const {recuruit} = require('../../models/index');
const {Op} = require('sequelize');

let job = async(req,res)=>{
    console.log('job들어옴')
    let {navi,login} = req;
    let {nickname} = req.cookies;
    let page = req.query.page || 1;
    console.log('page');
    console.log(page);
    console.log(recuruit);
    
    let {keyfield,keystring}=req.query;
    await galleryList(page,keyfield,keystring)
    .then(aa=>{
        let msg=0;
        console.log('aa들어옴');
        console.log(aa);
        if(page ==1){
            res.render('./job/recuruit',{msg,job:aa,nickname,navi,login,})
        }else if(page!=1 && aa.length==0){
            msg="페이지가 없습니다.";
            res.redirect(`/router/job/recruit?page=${page-1}&msg=${msg}`)
        }else{
            if(req.query.msg){
            console.log('msg바꾸는 과정');
            msg=req.query.msg;
            }
            res.render('./job/recuruit',{msg,job:aa,nickname,navi,login,})
    }})
    
}

async function galleryList(page,keyfield,keystring){
    console.log('갤러리 들어옴')
    let num = page;
    let rst;
    if(keyfield=='total'){
        console.log('total찍힌데 들어옴')
        rst = await recuruit.findAll({
            where:{
                [Op.or]:[
                    {
                        major:{[Op.like]:`%${keystring}%`}
                    },{                        
                        job_date:{[Op.like]:`%${keystring}%`}
                    },{
                        company:{[Op.like]:`%${keystring}%`}
                    },
                ]},
        order:[['id','DESC']],
        limit:12,
        offset:12*(page-1)
    })
    }else if(keyfield=='major'){
            rst = await recuruit.findAll({
                where:{major:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(page-1)
            })

    }else if(keyfield=='job_date'){
            rst = await recuruit.findAll({
                where:{job_date:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(page-1)
            })
    }else if(keyfield=='company'){
            rst = await recuruit.findAll({
                where:{company:{[Op.like]:`%${keystring}%`}
                        },
                order:[['id','DESC']],
                limit:12,
                offset:12*(page-1)
            })
    }else{
        rst = await recuruit.findAll({
            order:[['id','DESC']],
            limit:12,
            offset:12*(page-1)       })
    }
    console.log('rst임')
    console.log(rst);
    return rst;
}
module.exports = {job,}