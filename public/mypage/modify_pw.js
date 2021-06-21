
modi_submit_btn = document.querySelector('#modi_submit_btn');


window.addEventListener('change',()=>{
    console.log('js가지고 들어옴');
    modi_pw=document.querySelector('#pw').value;
    pw_chk=document.querySelector('.pw_chk').value;
    if(modi_pw == pw_chk){
        modi_submit_btn.removeAttribute('disabled');
    }else if(modi_pw != pw_chk){
        modi_submit_btn.setAttribute('disabled','true');
    }
})

