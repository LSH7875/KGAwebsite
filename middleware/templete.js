const {board,board_manage,group}=require('../models/index');

module.exports = async(req,res,next)=>{
    let sss=[];
    let boardvalue=await board_manage.findAll();
    let groupvalue = await group.findAll();
    let newarr3=[];
    for(i=0;i<5;i++){
        sss[i]=groupvalue[i].dataValues;
        newarr3.push(groupvalue[i].dataValues);
        let newarr=[];
        for(j=0;j<boardvalue.length;j++){
            if(boardvalue[j].dataValues.group ==(i+1)){
            console.log(boardvalue[j].dataValues);
            newarr.push(boardvalue[j].dataValues)
            }    
        }
        sss[i].board=newarr;
    }
    console.log('sss');
    console.log(sss);
    req.navi=sss;
    return next();
}