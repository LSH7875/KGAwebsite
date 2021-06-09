const all_agree = document.querySelector('.all_agree');

function check(checked = true){
    console.log('체크 들어옴.');
    const agree = document.querySelectorAll('input[name="chk"]');
    
    agree.forEach((chk)=>{
        chk.checked=checked;
    });
}

function checkAll(){
    if(all_agree.checked) check();
    else check(false);
}



all_agree.onclick = checkAll;


// 체크박스 해제

let chk1=document.querySelector('.agree_essential');
let chk2=document.querySelector('.agree_optional');

chk1.addEventListener('click',()=>{
    console.log('언체크1들어옴.');
    unchk_all();
})

chk2.addEventListener('click',()=>{
    console.log('언체크2들어옴.');
    unchk_all();
})

function unchk_all(){
    console.log('전체선택 언체크하는거 들어옴.');
    if(!this.checked)all_agree.checked=false;    
}


