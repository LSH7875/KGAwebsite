const {user,popup,mainvideo}=require('../../models/index') ;
let express=require('express');
let app = express();
require('dotenv').config();
const crypto = require('crypto');
let token = require('../../jwt');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

function cryptoPw(pw){
    return crypto.createHmac('sha256',Buffer.from(toString(process.env.salt))).update(pw).digest('base64').replace('==','').replace('=',''); 
}

let academy_int=(req,res)=>{
    res.render('./admin/academy_int')
    }

let admin_list=async(req,res)=>{
    let aa = await user.findAll({
        where: {
            user_grade:4
        }
    });

    // let admin_id = await user.findOne({
    //     where:{user_id:admin_id}
    // });

    console.log(aa);
    res.render('./admin/admin_list',{
        user:aa
    })
}

let admin_login=(req,res)=>{
    res.render('./admin/admin_login')
}

let admin_loginPost = async(req,res)=>{
    let {admin_pw,admin_id}=req.body;

    user_pw = cryptoPw(admin_pw);

    try{
        let result = await user.findOne({
            where:{user_id:admin_id,user_pw}
        });
        if (!result){
            console.log('login fail');
            res.redirect('/admin/admin_list?flag=0');
        }else{
            console.log('로그인성공');
            let ctoken = token(admin_id);
            res.cookie('AccessToken',ctoken,{httponly:true, secure:true,})
            res.cookie('user_id',admin_id)
            res.redirect(`/admin/admin_list?${admin_id}`);
        }
    }catch(e){
        console.log(e);
    }
}

let board_manager=(req,res)=>{
    res.render('./admin/board_manage')
}

let board_modify=(req,res)=>{
    res.render('./admin/board_modify')
}

let community=(req,res)=>{
    res.render('./admin/community')
    }
    
let curriculum_list=(req,res)=>{
    res.render('./admin/curriculum_list')
    }

let interview_manage=(req,res)=>{
    res.render('./admin/interview_manage')
    }

let mainvideo_list=async(req,res)=>{
    let video = await mainvideo.findAll();
    res.render('./admin/mainvideo_list',{
        mainvideo: video,
    })
    }

let mainvideo_upload=(req,res)=>{
    res.render('./admin/mainvideo_upload')
    }


let mainvideo_uploadPost=async(req,res)=>{
    await mainvideo.create({
        main_image: req.body.img,
        video: req.body.video,
        show_hide: req.body.show_hide,
    })
    res.redirect('/admin/mainvideo_list');
    }

let mainvideo_modify=async(req,res)=>{
    console.log(req.query.btn)
    if( req.query.btn == "modify"){
        let video = await mainvideo.findAll({
            where: {
                id: req.query.id
            }
        })
        res.render('./admin/mainvideo_modify',{
            mainvideo: video,
        })
    } else {
        await mainvideo.destroy({
            where: {
                id: req.query.id
            }
        })
        res.redirect('/admin/mainvideo_list')
    }
    
    }

let mainvideo_modifyPost=async(req,res)=>{
    await mainvideo.update({
        main_image: req.body.img,
        video: req.body.video,
        show_hide: req.body.show_hide,
    },{
        where: {
            id: req.body.id
        }
    })
    res.redirect('/admin/mainvideo_list');
    }
let popup_list=async(req,res)=>{

    let pop = await popup.findAll();
    res.render('./admin/popup_list',{
        popup:pop,
    })
    }

let popup_delete=async(req,res)=>{
    // await popup.destroy({
    //     where : {}
    // })
    res.redirect('/admin/popup_list');
}

let popup_modify=async(req,res)=>{
    if(req.query.btn == "modify"){
        let pop = await popup.findAll({
            where: {
                id:req.query.number
            }
        })
        res.render('./admin/popup_modify',{
            popup:pop,
        })
    } else {
        await popup.destroy({
            where: {
                id:req.query.number
            }
        })
        res.redirect('/admin/popup_list');
    }
}

let popup_modifyPost=async(req,res)=>{
    console.log(req.body.id)

    await popup.update({
        show_hide: req.body.group,
        popup_width: req.body.width,
        popup_height: req.body.height,
        popup_left: req.body.from_left,
        popup_top: req.body.from_top,
        popup_type:req.body.popup_type,
        title: req.body.title,
        image_file: req.body.img,
        URL: req.body.url,
        link_type: req.body.link,
        hide_term: req.body.term
    },{
        where: {id:req.body.id}
    })
    res.redirect('/admin/popup_list');
}

let popup_make=(req,res)=>{
    res.render('./admin/popup_make')
    }

let popup_makePost=async(req,res)=>{
    await popup.create({
        show_hide: req.body.group,
        popup_width: req.body.width,
        popup_height: req.body.height,
        popup_left: req.body.from_left,
        popup_top: req.body.from_top,
        popup_type:req.body.popup_type,
        title: req.body.title,
        image_file: req.body.img,
        URL: req.body.url,
        link_type: req.body.link,
        hide_term: req.body.term
    })
    res.redirect('/admin/popup_list')
    }

let setting=(req,res)=>{
    res.render('./admin/setting')
    }

let apply_list=(req,res)=>{
    res.render('./admin/apply_list')
    }

let consulting_list=(req,res)=>{
    res.render('./admin/consulting_list')
    }

let notice=(req,res)=>{
    res.render('./admin/notice')
    }

let portfolio=(req,res)=>{
    res.render('./admin/portfolio')
    }

let admin_list_modify=async(req,res)=>{
    let aa = await user.findAll();
    console.log(aa);
    res.render('./admin/admin_list_modify',{
        user:aa,
    })
}

let admin_list_modifyPost=async(req,res)=>{
    console.log(req.body.id)
    await user.update({user_grade:req.body.group},{where: {id:req.body.id}})
    res.redirect('/admin/admin_list');
}

module.exports = {academy_int,admin_list,admin_login,board_manager,board_modify,community,curriculum_list,interview_manage,mainvideo_list,mainvideo_upload,popup_list,popup_make,setting,apply_list,consulting_list,notice,portfolio,admin_list_modify,admin_loginPost,admin_list_modifyPost,popup_makePost,popup_modify,popup_modifyPost,popup_delete,mainvideo_uploadPost,mainvideo_modify,mainvideo_modifyPost};