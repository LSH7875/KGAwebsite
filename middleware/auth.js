const crypto = require('crypto');
require('dotenv').config();

module.exports = (req,res,next)=>{
    let {AccessToken}= res.cookies;

    if(!AccessToken){
        res.redirect('/?msg=로그인이 필요합니다.');
        return 0;
    }

    let [header,payload,sign] = AccessToken.split('.');
    let signature = getSignature(header,payload);

    if(sign == signature){
        console.log('검증된 토큰');
        let {userid,exp}=JSON.parse(Buffer.from(payload,'base64'),toString());
        console.log(userid);
        let nextexp = new Date().getTime();

        if(nextexp >=exp){
            res.clearCookie('AccessToken');
            res.redirect('/?msg=로그인 유효 시간이 지났습니다.');
        }
        res.user_id=userid;
        next();
    
    }else{
        res.redirct('/?msg = 잘못된 접근입니다.');
    }
}

function getSignature(head,pay){
    const signature=crypto.createHmac(Buffer.from(toString(process.env.salt)))
                            .update(head+"."+pay)
                            .digest('base64')
                            .replace('==','')
                            .replace('=','');
    return signature;
}
