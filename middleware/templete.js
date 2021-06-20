const {board,board_manage,group}=require('../models/index');

module.exports = async(req,res,next)=>{
    let sss=[];
    let boardvalue=await board_manage.findAll({
        where:{'show_hide':1}
    });
    let groupvalue = await group.findAll({
        where:{'show_hide':1}
    });
    let newarr3=[];
    for(i=0;i<5;i++){
        sss[i]=groupvalue[i].dataValues;
        newarr3.push(groupvalue[i].dataValues);
        let newarr=[];
        for(j=0;j<boardvalue.length;j++){
            if(boardvalue[j].dataValues.group ==(i+1)){
            newarr.push(boardvalue[j].dataValues)
            }    
        }
        sss[i].board=newarr;
    }
    if (req.cookies.user_id){req.login=1;}
    else{req.login=0;}
    req.navi=sss;
    return next();
}