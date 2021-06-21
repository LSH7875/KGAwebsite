

submit_chk = document.querySelector('.submit');

submit_chk.addEventListner('click',async()=>{
    console.log('submit_chk들어옴');
    pw_chk = document.querySelector('#pw');
    await fetch('http://localhost:3000//mypage/modify_pwChk',{
    'method':'post',
    'body':{'user_pw':`${pw_chk.value}`}
    })
    .then(dd=>{
    return dd.text();
    })
    .then(text=>{
    mypage_con=document.querySelector('#mypage_con');
    mypage_con.innerHTML=`<br><br><br>${text}`
})


