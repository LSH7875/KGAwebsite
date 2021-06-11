let submit_btn=document.querySelector('.submit_btn');



// 1.아이디, 비밀번호, 비밀번호 확인, 이름, 이메일, 핸드폰 번호
// 없으면 회원가입 못하게

// 2.아이디 비밀번호 색깔에 다라 회원가입 되든지 안되든지

// 3.비밀번호 체크 만들기


window.addEventListener('change',()=>{
    let user_id = document.querySelector('#user_id').value;
    let user_pw = document.querySelector('#user_pw').value;;
    let user_pw_chk = document.querySelector('#user_pw_chk').value;;
    let user_name = document.querySelector('#user_name').value;
    let user_email = document.querySelector('#user_email').value;
    let phone2 = document.querySelector('.phone2').value.length;
    let phone3 = document.querySelector('.phone3').value.length;

    if(user_id && user_pw && user_pw_chk && user_name && user_email && phone2>=3 && phone3==4){
        submit_btn.removeAttribute('disabled');
    }else{
        submit_btn.setAttribute('disabled','true');
        submit_btn.background="lightgray"
    }
})
submit_btn.addEventListener('click',()=>{
    //id체크가 안되었거나, 중복된 아이디일때
    let id_msg = document.querySelector('.id_msg');
    let pw_msg = document.querySelector('.pw_msg');
    let user_pw_chk = document.querySelector('#user_pw_chk');
    let user_pw = document.querySelector('#user_pw');
    if(id_msg.style.color =="red" || id_msg.value =='' ){
        submit_btn.setAttribute('disabled','true');
        alert('아이디를 확인해주세요.')
    }else if(pw_msg.value){
        //비밀번호가 서로 다를 때
        submit_btn.setAttribute('disabled','true');
        user_pw.value = "";
        user_pw_chk.value ='';
        alert('비밀번호를 확인해주세요.');
    }
})


let user_pw_chk = document.querySelector('#user_pw_chk');

user_pw_chk.addEventListener('focusout',()=>{
    let user_pw = document.querySelector('#user_pw').value;
    let pw_chk_value = document.querySelector('#user_pw_chk').value;
    let pw_msg = document.querySelector('.pw_msg');
    if(user_pw != pw_chk_value){
        pw_msg.style.color="red";
        pw_msg.innerHTML ="패스워드가 다릅니다.";
    }else{
        pw_msg.innerHTML ="";
    }
})


let user_id = document.querySelector('#user_id');

user_id.addEventListener('focusout',()=>{
    let id_msg= document.querySelector('.id_msg'); 
    if(user_id.value==""){
        id_msg.style.color=black;
        id_msg.innerHTML="";
    }
})