const {user,popup,mainvideo,board,board_manage,recuruit,curriculum,apply,group}=require('../../models/index') ;
const { Op } = require("sequelize");
let express=require('express');
let app = express();
require('dotenv').config();
const crypto = require('crypto');
let token = require('../../jwt');
const bodyParser=require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

function cryptoPw(pw){
    return crypto.createHmac('sha256',Buffer.from(toString(process.env.salt))).update(pw).digest('base64').replace('==','').replace('=',''); 
}

let userList=async(req,res)=>{
    let {user_id} = req.cookies
    let aa = await user.findAll();
    console.log(aa);
    res.render('./admin/user_list',{
        user:aa,user_id
    })
}

let userListPost=async(req,res)=>{
    let {user_id} = req.cookies
    let aa = await user.findAll({
        where:{
            [Op.or]: [{user_id:req.body.searchinfo}, {user_name:req.body.searchinfo}, {nickname:req.body.searchinfo}, {user_email:req.body.searchinfo}]
        }
    });
    console.log(aa);
    res.render('./admin/user_list',{
        user:aa,user_id
    })
}

let review=async(req,res)=>{
    let review= await board.findAll({
        where:{board_number:11}
    });
    let {user_id} = req.cookies
    res.render('./admin/review',{
        user_id, reviews:review
    })
}
let review_view=async(req,res)=>{
    let {user_id} = req.cookies
    if(req.query.btn == "view"){
        let review= await board.findAll({
            where:{
                [Op.and]: [{board_number:11}, {id:req.query.id}]
            }
        });
        res.render('./admin/review_view',{
            user_id, reviews:review
        })
    } else{
        await board.destroy({
            where: {
                [Op.and]: [{board_number:11}, {id:req.query.id}]
            }
        })
        res.redirect('./admin/review');
    }
}

let review_viewPost=async(req,res)=>{
    if(req.query.btn == "view"){
        let review= await board.findAll({
            where:{
                [Op.and]: [{board_number:11}, {id:req.query.id}]
            }
        });
        res.render('./admin/review_view',{
            user_id, reviews:review
        })
    } else{
        await board.destroy({
            where: {
                [Op.and]: [{board_number:11}, {id:req.query.id}]
            }
        })
        res.redirect('./admin/review');
    }
}

let admin_chatting=(req,res)=>{
    res.render('./admin/admin_chatting')    
}

let admin_list=async(req,res)=>{
    let {user_id} = req.cookies
    let aa = await user.findAll({
        where: {
            user_grade:4
        }
    });
    console.log(user_id)
    // let aaa = await user.findOne({
    //     where: {user_id}
    // })
    // let admin_id = await user.findOne({
    //     where:{user_id:admin_id}
    // });

    res.render('./admin/admin_list',{
        user:aa,user_id
    })
}

let employment_status_write=(req,res)=>{
    res.render('./admin/employment_status_write')
}

let employment_statuses=async(req,res)=>{
    let es = await recuruit.findAll();
    res.render('./admin/employment_status',{
        employ:es
    })
}
let employment_status_modify=async(req,res)=>{
    let {user_id} = req.cookies
    if(req.query.btn == "modify"){
        console.log(req.query.number);
        let es = await recuruit.findAll({
            where: {
                id:req.query.number
            }
        })
        res.render('./admin/employment_status_modify',{
            employ:es, user_id
        })
    } else {
        await recuruit.destroy({
            where: {
                id:req.query.number
            }
        })
        res.redirect('/admin/employment_status');
    }
}

let employment_status_modifyPost=async(req,res)=>{
    console.log(req.body.id)

    await recuruit.update({
        job_date:req.body.employed_date,
        major:req.body.major,
        cardinal:req.body.number,
        name: req.body.nickname,
        company:req.body.company
    },{
        where: {id:req.body.id}
    })
    res.redirect('/admin/employment_status');
}

let employment_statusPost=async(req,res)=>{
    await recuruit.create({
        job_date:req.body.employed_date,
        major:req.body.major,
        cardinal:req.body.number,
        name: req.body.nickname,
        company:req.body.company
    })
    res.render('./admin/employment_status')
}

let admin_login=(req,res)=>{
    res.render('./admin/admin_login')
}

let admin_loginPost = async(req,res)=>{
    let {admin_pw,admin_id}=req.body;

    user_pw = cryptoPw(admin_pw);

    try{
        let result = await user.findOne({
            where:{user_id:admin_id,user_pw,user_grade:4}
        });
        if (!result){
            console.log('login fail');
            res.send("<script>alert('관리자등급이 아닙니다.');location.href='/admin/admin_login';</script>");
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

let admin_logout=(req,res)=>{
    length1=res.cookies;
    out=Object.keys(req.cookies);

    for(i=0;i<out.length;i++){
        res.clearCookie(out[i]);
    }
    
    res.redirect('/admin/admin_login');
}

let board_group=async(req,res)=>{
    let {user_id} = req.cookies
    let bg = await group.findAll();
    res.render('./admin/board_group',{
        user_id,board_group:bg
    });
}

let board_groupPost=async(req,res)=>{
    if(req.body.btn == "modify"){
        await group.update({
            group_name:req.body.group,
            board_uri:req.body.uri
        },{where:
            {id:req.body.id}
        })
        res.redirect('/admin/board_group')
    } else{
        await group.destroy({
            where:{id:req.body.id}
        })
        res.redirect('/admin/board_group')
    }
}

let group_make=async(req,res)=>{
    await group.create({
        group_name:req.body.group_name,
        board_uri:req.body.make_uri
    })
    res.redirect('/admin/board_group')
}

let board_manager=async(req,res)=>{
    let bm = await board_manage.findAll();
    let {user_id} = req.cookies
    res.render('./admin/board_manage',{
        user_id, board_manage:bm
    })
}

let board_managePost=async(req,res)=>{
    let bm = await board_manage.findAll();
    let {user_id} = req.cookies
    if( req.body.btn == "modify"){
        await board_manage.update({
            group:req.body.group,
            board_uri:0,
            board_title:req.body.title,
            preview:0,
            read_authority:req.body.read_authority,
            write_authority:req.body.write_authority,
            form:req.body.form,
            file:req.body.files,
            show_hide:req.body.show_hide,
            curr_id:0
        },{
            where: {
                id: req.body.id
            }
        })
        res.redirect('/admin/board_manage')
    } else {
        await board_manage.destroy({
            where: {
                id: req.body.id
            }
        })
        res.redirect('/admin/board_manage')
    }
}

let board_modify=async(req,res)=>{
    let {user_id} = req.cookies
    res.render('./admin/board_modify',{
        user_id
    })
}

let board_make =async(req,res)=>{
    await board_manage.create({
        group:req.body.group,
        board_title:req.body.board_title
    })
    res.redirect('/admin/board_manage');
}

let community=(req,res)=>{
    let {user_id} = req.cookies
    res.render('./admin/community',{
        user_id
    })
    }
    
let curriculum_list=async(req,res)=>{
    let cur = await curriculum.findAll();
    let {user_id} = req.cookies
    res.render('./admin/curriculum_list',{
        user_id,curriculum:cur
    })
    }
let cur_make=async(req,res)=>{
    let {user_id} = req.cookies
    res.render('./admin/cur_make',{
        user_id,
    })
}
let cur_makePost=async(req,res)=>{
    let {user_id} = req.cookies
    await curriculum.create({
        cur_title:req.body.cur_title,
        detail_name:req.body.detail_name,
        cur_uri:req.body.cur_uri,
        character:req.body.character,
        syllabus:req.body.syllabus,
        side_info1:req.body.side_info1,
        side_info2:req.body.side_info2,
        period:req.body.period,
        tuition:req.body.tuition,
        qualification:req.body.qualification,
        // professor1:req.body.professor1,
        // professor2:req.body.professor2,
        // faq1:req.body.faq1,
        // faq2:req.body.faq2,
        // faq3:req.body.faq3
    })
    res.render('./admin/cur_make',{
        user_id,
    })
}
let cur_modify=async(req,res)=>{
    let {user_id} = req.cookies
    let cur = await curriculum.findAll({
        where:{id:req.query.id}
    })
    res.render('./admin/cur_modify',{
        user_id,curriculum:cur
    })
}
let cur_modifyPost=async(req,res)=>{
    // let {user_id} = req.cookies
    // let cur = await curriculum.findAll({
    //     where:{id:req.body.id}
    // })
    if(req.body.btn == "modify"){
        console.log(req.body.side_info1.toString())
        await curriculum.update({
            cur_title:req.body.cur_title,
            detail_name:req.body.detail_name,
            cur_uri:req.body.cur_uri,
            main_image:req.body.main_img,
            character:req.body.character,
            syllabus:req.body.syllabus,
            side_info1:req.body.side_info1.toString(),
            side_info2:req.body.side_info2,
            period:req.body.period,
            tuition:req.body.tuition,
            qualification:req.body.qualification,
            // professor1:req.body.professor1,
            // professor2:req.body.professor2,
            // faq1:req.body.faq1,
            // faq2:req.body.faq2,
            // faq3:req.body.faq3
        },{
            where: {id:req.body.id}
        })
        res.redirect('/admin/curriculum_list')
    } else{
        await curriculum.destroy({
            where: {
                id: req.body.id
            }
        })
        res.redirect('/admin/curriculum_list')
    }
}
   
let interview_manage=async(req,res)=>{
    let {user_id} = req.cookies
    let im = await board.findAll({
        where:{board_number:7}
    })
    res.render('./admin/interview_manage',{
        user_id, interviews:im
    })
    }
let interview_manage_write=(req,res)=>{
    res.render('./admin/interview_manage_write')
}
let interview_manage_writePost=async(req,res)=>{
    let {user_id} = req.cookies
    console.log(user_id);
    await board.create({
        user_id: user_id,
        board_number:7,
        title: req.body.title,
        nickname: req.body.nickname,
        contents: req.body.contents
    },{
        where:{board_number:7}
    })
    res.redirect('/admin/interview_manage')
}

let mainvideo_list=async(req,res)=>{
    let {user_id} = req.cookies
    let video = await mainvideo.findAll();
    res.render('./admin/mainvideo_list',{
        mainvideo: video,user_id
    })
    }

let mainvideo_upload=(req,res)=>{
    let {user_id} = req.cookies
    res.render('./admin/mainvideo_upload',{
        user_id
    })
    }


let mainvideo_uploadPost=async(req,res)=>{
    let uservideo = req.file == undefined ? '' :req.file.filename;
    let img = '';
    await mainvideo.create({
        main_image: img,
        video: uservideo,
        show_hide: req.body.show_hide,
    })
    console.log(uservideo)
    res.redirect('/admin/mainvideo_list');
    }

let mainvideo_modify=async(req,res)=>{
    let {user_id} = req.cookies
    console.log(req.query.btn)
    if( req.query.btn == "modify"){
        let video = await mainvideo.findAll({
            where: {
                id: req.query.id
            }
        })
        res.render('./admin/mainvideo_modify',{
            mainvideo: video,user_id
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
    let uservideo = req.file == undefined ? '' :req.file.filename;
    let img ='';
    await mainvideo.update({
        main_image: img,
        video: uservideo,
        show_hide: req.body.show_hide,
    },{
        where: {
            id: req.body.id
        }
    })
    res.redirect('/admin/mainvideo_list');
    }
let popup_list=async(req,res)=>{
    let {user_id} = req.cookies
    let pop = await popup.findAll();
    res.render('./admin/popup_list',{
        popup:pop,user_id
    })
    }

let popup_modify=async(req,res)=>{
    let {user_id} = req.cookies
    if(req.query.btn == "modify"){
        let pop = await popup.findAll({
            where: {
                id:req.query.number
            }
        })
        res.render('./admin/popup_modify',{
            popup:pop,user_id
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
        title: req.body.title,
        image_file: req.body.img,
        URL: req.body.url
    },{
        where: {id:req.body.id}
    })
    res.redirect('/admin/popup_list');
}

let popup_make=(req,res)=>{
    let {user_id} = req.cookies
    res.render('./admin/popup_make',{
        user_id
    })
    }

let popup_makePost=async(req,res)=>{
    let userimage = req.file == undefined ? '' :req.file.filename;
    await popup.create({
        show_hide: req.body.group,
        popup_width: req.body.width,
        popup_height: req.body.height,
        popup_left: req.body.from_left,
        popup_top: req.body.from_top,
        title: req.body.title,
        image_file: userimage,
        URL: req.body.url
    })
    console.log(userimage)
    res.redirect('/admin/popup_list')
    }

let setting=(req,res)=>{
    let {user_id} = req.cookies
    res.render('./admin/setting',{
        user_id
    })
    }

let applies=async(req,res)=>{
    let {user_id} = req.cookies
    let a = await apply.findAll();
    res.render('./admin/apply',{
        user_id, applies:a
    })
}
let apply_view=async(req,res)=>{
    let {user_id} = req.cookies
    if(req.query.btn == "view"){
        let a = await apply.findAll({
            where:{id:req.query.id}
        });
        res.render('./admin/apply_view',{
            user_id, applies:a
        })
    } else {
        await apply.destroy({
            where:{id:req.query.id}
        })
        res.redirect('/admin/apply')
    }
}

let notice=async(req,res)=>{
    let notice= await board.findAll({
        where:{board_number:10}
    });
    let {user_id} = req.cookies
    res.render('./admin/notice',{
        user_id, notices:notice
    })
    }
let notice_make=(req,res)=>{
    let {user_id} = req.cookies
    res.render('./admin/notice_make',{
        user_id
    })
}
let notice_makePost=async(req,res)=>{
    await board.create({
       title:req.body.title,
       nickname:req.body.nickname,
       contents:req.body.content,
       file1:req.body.img,
       show_hide:req.body.show_hide,
       board_number:10
    })
    res.redirect('/admin/notice')
}

let notice_modify=async(req,res)=>{
    console.log(req.query.btn);
    let {user_id} = req.cookies
    if(req.query.btn == "modify"){
        let notice = await board.findAll({
            where: {
                board_number:10,
                id:req.query.id
            }
        })
        res.render('./admin/notice_modify',{
            notice:notice,user_id
        })
    } else {
        await board.destroy({
            where: {
                id:req.query.id
            }
        })
        res.redirect('/admin/notice');
    }
}

let notice_modifyPost=async(req,res)=>{
    await board.update({
       title:req.body.title,
       nickname:req.body.nickname,
       contents:req.body.content,
       file1:req.body.img,
       show_hide:req.body.show_hide,
       board_number:10
    })
    res.redirect('/admin/notice')
}
let portfolio=(req,res)=>{
    let {user_id} = req.cookies
    res.render('./admin/portfolio',{
        user_id
    })
    }

let admin_list_modify=async(req,res)=>{
    let {user_id} = req.cookies
    let aa = await user.findAll();
    console.log(aa);
    res.render('./admin/admin_list_modify',{
        user:aa,user_id
    })
}

let admin_list_modifyPost=async(req,res)=>{
    console.log(req.body.id)
    await user.update({user_grade:req.body.group},{where: {id:req.body.id}})
    res.redirect('/admin/admin_list');
}

module.exports = {group_make,board_groupPost,board_group,board_make,review_view,review_viewPost,admin_logout,userListPost,userList,apply_view,notice_modify,notice_modifyPost,notice_makePost,notice_make,review,cur_modifyPost,cur_makePost,cur_modify,cur_make,admin_chatting,interview_manage_write,interview_manage_writePost,employment_status_modify,employment_status_modifyPost,admin_list,admin_login,board_manager,board_modify,community,curriculum_list,interview_manage,mainvideo_list,mainvideo_upload,popup_list,popup_make,setting,applies,notice,portfolio,admin_list_modify,admin_loginPost,admin_list_modifyPost,popup_makePost,popup_modify,popup_modifyPost,mainvideo_uploadPost,mainvideo_modify,mainvideo_modifyPost,board_managePost,employment_statuses,employment_status_write,employment_statusPost};
