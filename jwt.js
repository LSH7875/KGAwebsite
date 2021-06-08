const crypto = require ('crypto');
require('dotenv').config();

function createToken(userid){
    let header = {
        "alg":"HS256",
        "typ":"JWT"
    }
    let encodeheader = Buffer.from(JSON.stringify(header)).toString('base64').replace('=','');


    let exp = new Date().getTime() + ((60* 60* 2) *1000)
    
    let payload = {
        userid,
        exp,   
    }

    const encodingHeader = Buffer.from(JSON.stringify(header))
                                    .toString('base64')
                                    .replace('==','')
                                    .replace('=','');

    const encodingpayload = Buffer.from(JSON.stringify(payload))
                                    .toString('base64')
                                    .replace('==','')
                                    .replace('=','');

    const signature = crypto.createHmac('sha256',Buffer.from(toString(process.env.salt)))
                                        .update(encodingHeader+'.'+encodingpayload)
                                        .digest('base64')
                                        .replace('==','')
                                        .replace('=','');
    console.log('encodingHeader');
    console.log(encodingHeader);
    console.log('encodingpayload');
    console.log(encodingpayload);
    console.log('signature');
    console.log(signature);

    let jwt =`${encodingHeader}.${encodingpayload}.${signature}`
    return jwt;
}

module.exports = createToken;