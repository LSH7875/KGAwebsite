const {recuruit} = require('../../models/index');
const {Op} = require('sequelize');

let job = async(req,res)=>{
    let {navi,login} = req;
    let {nickname} = req.cookies;
    let page = req.query.page || 1;
    let keyfield = req.query.keyfield || 'total';
    let keystring = req.query.keystring || '';
    await galleryList(page,keyfield,keystring)
    .then(aa=>{
        let msg=0;
        if(page ==1){
            if(req.query.msg){
                msg=req.query.msg;
                }
            res.render('./job/recuruit',{index:aa.index,msg,job:aa.rst,nickname,navi,login,board:'recruit',group:'job',board_name:'취업현황',keyfield,keystring,page,})
        }else if(aa.length==0){
            msg="페이지가 없습니다.";
            res.redirect(`/router/job/recruit?page=${page-1}&msg=${msg}&keyfield=${keyfield}&keystring=${keystring}`)
        }else{
            if(req.query.msg){
            msg=req.query.msg;
            }
            res.render('./job/recuruit',{index:aa.index,msg,job:aa.rst,nickname,navi,login,group:'job',board_name:'취업현황',keyfield,keystring,page,})
    }})
    
}

async function galleryList(page,keyfield,keystring){
    let num = page;
    let rst;
    let index;
    if(keyfield=='total'){
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
    });
        index = await recuruit.findAll({
            attributes:['id'],
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
        })
    }else if(keyfield=='major'){
            rst = await recuruit.findAll({
                where:{major:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(page-1)
            })
            index=await recuruit.findAll({
                attributes:['id'],
                where:{major:`%${keystring}%`}
            })

    }else if(keyfield=='job_date'){
            rst = await recuruit.findAll({
                where:{job_date:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(page-1)
            });
            index = await recuruit.findAll({
                attributes:['id'],
                where:{job_date:`%${keystring}%`}
            })
    }else if(keyfield=='company'){
            rst = await recuruit.findAll({
                where:{company:`%${keystring}%`},
                order:[['id','DESC']],
                limit:12,
                offset:12*(page-1)
            });
            index = await recuruit.findAll({
                attributes:['id'],
                where:{company:`%${keystring}%`}
            })
    }else{
        rst = await recuruit.findAll({
            order:[['id','DESC']],
            limit:12,
            offset:12*(page-1)       
        });
        index = await recuruit.findAll({
            attributes:['id'],
        })
            
    }
    index=index.length;
    return aa={rst,index};
}
module.exports = {job,}