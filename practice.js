const {board,board_manage,group}=require('./models/index');
// vvv={board_name,group_name}
module.exports = async(req,res,next)=>{
    let newarr2=[];
    let sss=[];
    let boardvalue=await board_manage.findAll();
    let groupvalue = await group.findAll();
    let newarr3=[];
    for(i=0;i<5;i++){
        sss[i]=groupvalue[i].dataValues;
        newarr3.push(groupvalue[i].dataValues)
        console.log(`--------------${i}------------`);
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
    req.templete=sss;
    next();
    // let rst = await group.findAll();
    // let result = await board_manage.findAll();
    // group_length=rst.length;
    // group_name1=[group_length][2];//빈 배열을 만든다.
    // console.log('실험');    
    
    // for(i=0;i<group_length;i++){
    //     console.log(rst[i].group_name);
    //     group_name1[i]=rst[i].group_name;
    //     console.log('여기까지함');
    //     for(j=0;j<result.length;j++){
    //         count=0;
    //         if(result[j].dataValues.group ==(i+1)){
    //             console.log(result[j].dataValues.board_title);
    //             group_name1[i][1].push(result[j].dataValues.board_title);
    //             count++;
    //         }    
    //     }
    // }    

    // // aaaaa["group_name"]=group_name;
    
    // console.log(group_name1);
    
    // res.render('./practice',{
    //     group:group_name1.group
    // })
}
