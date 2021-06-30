mypage_button = document.querySelectorAll('#mypage_btn>li');

mypage_btn=document.querySelector('#mypage_btn>li');
mypage_btn2=document.querySelector('#mypage_btn>li:nth-child(2)');
mypage_con=document.querySelector('#mypage_con');



chk_pw=document.querySelector('.chk_pw');
popup_flag=false;
chk_pw_btn = document.querySelector('.chk_pw_btn');
pw_check= document.querySelector('.pw_check');

mypage_button[1].addEventListener('click',()=>{
    mypage_con.innerHTML='';
    popup_flag=(popup_flag==true)? false : true;
    if(popup_flag==true){pw_check.style.display="block";}
    else{pw_check.style.display="none";}
})


mypage_btn.addEventListener('click',async()=>{

    popup_flag=false;
    pw_check.style.display="none";
    let aa = await fetch('http://localhost:3000/mypage/modify_info')
    .then(aa=>{
        return aa.text();
    })
    .then(text=>{
        mypage_con.innerHTML=`${text}`;
        var newScript =document.createElement("script");
        newScript.src= "http://localhost:3000/mypage/pw_chk.js"
        mypage_con.appendChild(newScript);
    });
})

/////비밀번호 체크에서 확인버튼 눌렀을 때
chk_pw_btn.addEventListener('click',async()=>{
    let bb = await fetch('http://localhost:3000/mypage/modify_pwChk',{
        method:'post',
        headers:{
        'Content-Type': 'application/json'},
        body:JSON.stringify({'pw':chk_pw.value})
    })
    .then(aa=>{
        return aa.json();
    })
    .then(json=>{
        if(json.check==true){
            pw_check.style.display="none";
            popup_flag=false;
            mypage_con.innerHTML=`<form action="/mypage/modify_pw" id ="form_pw_change" method="post">
            <h1>회원정보수정-비밀번호 변경</h1>
            <table>
                <tr>
                    <td><p><lable for ="pw">비밀번호</lable></p></td>
                    <td><input type = "password" id = "pw" name="user_pw"></td>
                </tr>
                <tr>
                    <td><p>비밀번호 확인</p></td>
                    <td><input type = "password" class="pw_chk"></td>
                </tr>
            </table>
            <input id = "submit_btn" type = "submit" value="완료">
        </form>`;
            newScript = document.createElement('script');
            newScript.setAttribute('type','text/javascript');
            newScript.src = "http://localhost:3000/mypage/modify_pw.js"
            mypage_con.appendChild(newScript);
        }else{
            chk_pw.value='';
            window.alert("비밀번호를 다시 입력해주세요")
        }
    })
})


mypage_button[2].addEventListener('click',async()=>{
    console.log('세번째 버튼 눌림');
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
})