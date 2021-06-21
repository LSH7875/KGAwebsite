
mypage_button = document.querySelectorAll('#mypage_btn>li');
console.log(mypage_button[1]);
mypage_btn=document.querySelector('#mypage_btn>li');
mypage_btn2=document.querySelector('#mypage_btn>li:nth-child(2)');
mypage_con=document.querySelector('#mypage_con');

console.log(typeof mypage_btn);
console.log(mypage_btn2);

chk_pw=document.querySelector('.chk_pw');
popup_flag=false;
chk_pw_btn = document.querySelector('.chk_pw_btn');
pw_check= document.querySelector('.pw_check');


console.log(mypage_btn2);


mypage_button[1].addEventListener('click',()=>{

    console.log('비밀번호변경눌림');
    mypage_con.innerHTML='';
    console.log('비밀번호변경눌림');
    popup_flag=(popup_flag==true)? false : true;
    console.log('삼항연산자 지남');
    mypage_con.innerHTML=popup_flag;
    if(popup_flag==true){pw_check.style.display="block";}
    else{pw_check.style.display="none";}
})


mypage_btn.addEventListener('click',async()=>{
    let aa = await fetch('http://localhost:3000/mypage/modify_info')
    .then(aa=>{
        console.log('aa')
        console.log(aa);
        return aa.text();
    })
    .then(text=>{
        console.log(text);
        console.log(typeof text);
        mypage_con.innerHTML=`<br><br><br>${text}`;
        var newScript =document.createElement("script");
        newScript.src= "http://localhost:3000/mypage/pw_chk.js"
        mypage_con.appendChild(newScript);
    });
})

// window.addEventListener('change',async()=>{
//     let pw_submit = document.querySelector('.pw_submit');
//     pw_submit.addEventListener('click',async()=>{
//         let cc = await fetch('http://localhost:3000/mypage/modify_info',{
//             method:'post'
//         })
//         .then(aa=>{
//             console.log('submit누른거 들어옴 결과');
//             console.log(aa);
//             return aa.text();
//         })
//         .then(text=>{
//             console.log(text);
//             mypage_con.innerHTML=`<br><br><br>${text}`;
//         })
//     })
// })


/////비밀번호 체크에서 확인버튼 눌렀을 때
chk_pw_btn.addEventListener('click',async()=>{
    console.log('비밀번호 체크 눌림')
    let bb = await fetch('http://localhost:3000/mypage/modify_pwChk',{
        method:'post',
        headers:{
        'Content-Type': 'application/json'},
        body:JSON.stringify({'pw':chk_pw.value})
    })
    .then(aa=>{
        console.log('비번체크 aa받음')
        console.log(chk_pw.value);
        console.log(aa);
        return aa.json();
    })
    .then(json=>{
        console.log('json');
        console.log(json);
        if(json.check==true){
            pw_check.style.display="none";
            popup_flag=false;
            //mypage_con.innerHTML="됐다!";
            mypage_con.innerHTML=`<form action="/mypage/modify_pw" method="post">
            <p><lable for ="pw">비밀번호</lable></p>
            <input type = "password" id = "pw" name="user_pw">
            <p>비밀번호 확인</p>
            <input type = "password" class="pw_chk">
            <input id = "modi_submit_btn" disabled="true" type = "submit" value="완료">
        </form>    `;
            newScript = document.createElement('script');
            newScript.setAttribute('type','text/javascript');
            newScript.src = "http://localhost:3000/mypage/modify_pw.js"
            // modi_javascript=`console.log('들어옴');
            // modi_pw=document.querySelector('#pw');
            // pw_chk=document.querySelector('#pw_chk');
            // modi_submit_btn = document.querySelector('#modi_submit_btn');
            
            // window.addEventListener('change',()=>{
            //     console.log('js가지고 들어옴');
            //     if(modi_pw.value == pw_chk.value){
            //         modi_submit_btn.setAttribute('disabled','false');
            //     }else{
            //         modi_submit_btn.setAttribute('disabled','true');
            //     }
            // })`
            // newScript.innerText=modi_javascript;
            mypage_con.appendChild(newScript);
        }else{
            chk_pw.value='';
            window.alert("비밀번호를 다시 입력해주세요")
        }
    })
})
