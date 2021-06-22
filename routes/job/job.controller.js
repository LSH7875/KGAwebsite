const {recuruit} = require('../../models/index');

let job = async(req,res)=>{
    let {navi,login} = req;
    let {nickname} = req.cookies;
    let page = req.query.page || 1;
    console.log(recuruit);
    let rst = await recuruit.findAll({
        // order:[['id','DESC']],
        // limit:10,
        // offset:10*(page-1)
    })
    .then(aa=>{
        res.render('./job/recuruit',{job:aa,nickname,navi,login,})
    })
   
}


module.exports = {job,};