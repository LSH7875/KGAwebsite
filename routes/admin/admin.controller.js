let academy_int=(req,res)=>{
    res.render('./admin/academy_int')
    }

let admin_list=(req,res)=>{
    res.render('./admin/admin_list')
}

let admin_login=(req,res)=>{
    res.render('./admin/admin_login')
}

let board_manage=(req,res)=>{
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

let mainvideo_list=(req,res)=>{
    res.render('./admin/mainvideo_list')
    }

let mainvideo_upload=(req,res)=>{
    res.render('./admin/mainvideo_upload')
    }

let popup_list=(req,res)=>{
    res.render('./admin/popup_list')
    }

let popup_manage=(req,res)=>{
    res.render('./admin/popup_manage')
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


module.exports = {academy_int,admin_list,admin_login,board_manage,board_modify,community,curriculum_list,interview_manage,mainvideo_list,mainvideo_upload,popup_list,popup_manage,setting,apply_list,consulting_list,notice,portfolio,};