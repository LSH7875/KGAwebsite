mypage_btn1=document.querySelectorAll('#mypage_btn1>li');

mypage_btn1[0].addEventListener('click',change_info);
mypage_btn1[1].addEventListener('click',change_profile);


async function change_info(){ 
    popup_flag=false;
    pw_check.style.display="none";
    let aa = await fetch('http://localhost:3000/mypage/modify_info')
    .then(aa=>{
        console.log('aa')
        console.log(aa);
        return aa.text();
    })
    .then(text=>{
        console.log(text);
        console.log(typeof text);
        mypage_con.innerHTML=`${text}`;
        var newScript =document.createElement("script");
        newScript.src= "http://localhost:3000/mypage/pw_chk.js"
        mypage_con.appendChild(newScript);
    });

}
async function change_profile(){
    popup_flag=false;
    pw_check.style.display="none";
    await fetch('http://localhost:3000/mypage/modify_profile')
    .then(aa=>{
        return aa.text();
    })
    .then(text=>{
        mypage_con.innerHTML=`<br><br><br>${text}`;
        var newScript =document.createElement("script");
        newScript.src= "http://localhost:3000/mypage/profile.js"
        mypage_con.appendChild(newScript);
    })

}