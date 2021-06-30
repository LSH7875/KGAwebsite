window.addEventListener('scroll',scroll_check);

// 네비바 동영상 밑으로 벗어나면 파란 배경에 fix 되는 코드
function scroll_check(){
    let scrollNav = document.documentElement.scrollTop;
    let mainNav = document.querySelector('#main_nav');
    let navUl = document.querySelector('#nav_main_list');
    let navLi = document.querySelector("#nav_main_list>li");
    let navA = document.querySelectorAll(".nav_bar");

    if(590<scrollNav){
        mainNav.style.height = "80px";
        mainNav.style.overflow = "hidden";
        navUl.style.height = "50px";
        navLi.style.height = "50px";
        navA.forEach(e=>{
            e.style.height ="25px";
            e.style.overflow = "hidden";
        })
    }else{
        mainNav.style.height = "";
        mainNav.style.overflow = "";
        navUl.style.height = "";
        navUl.style.overflow = "";
        navLi.style.height = "";
        navLi.style.overflow = "";
        navA.forEach(e=>{
            e.style.height ="";
            e.style.overflow = "";
        })
    }
}


let navA = document.querySelectorAll(".nav_bar");
let mainNav = document.querySelector('#main_nav');
let navUl = document.querySelector('#nav_main_list');
let navLi = document.querySelector("#nav_main_list>li");
let sub = document.querySelectorAll(".nav_sub_list");
let navA_a = document.querySelectorAll(".nav_bar>a");
navA.forEach(e=>{e.addEventListener('mouseover', scroll_on);
});
// 네비바 서브 메뉴들 파란 배경에 내려오게 하는 코드
function scroll_on(){
    navA.forEach(e=>{e.style.height = "250px"})
    mainNav.style.height = "250px";
    mainNav.style.overflow = "visible";
    navUl.style.height = "250px";
    sub.style.height = "250px";
    mainNav.style="overflow-y:hidden"
    navA.style="overflow-y:hidden"
    navA_a.style="overflow-y:hidden"
}

//네비바 파란 배경 fix일 때 마우스 떼면 다시 접히게
mainNav.addEventListener('mouseleave', ReturnBg)
    function ReturnBg(){
        mainNav.style.height = "70px"
        mainNav.style.transition = ".25s ease-in-out"
        navA.style="overflow-y:hidden"
        navA_a.style="overflow-y:hidden"
    }

/////팝업 쿠키관련 자바스크립트 내용
    
function set_cookie(name){
    let date = new Date().getTime();
    let limit_date = parseInt(parseInt(date)+1000*60*60*24);
    document.cookie =  `popup=${limit_date}`;
}

let pop = document.querySelector('#pop_today');
pop.addEventListener('click',async()=>{
    set_cookie();
    modal.style.display="none";
})

function popup_check(){

    if(document.cookie){
        aaa=document.cookie.split(';');
        let cookie_time;
        aaa.forEach(e=>{
            if(e.split('=')[0].trim()=="popup"){
            cookie_time= e.split("=")[1];}
        })
        
        current_time=new Date().getTime();
        if(current_time>cookie_time){
            document.cookie.popup.value="";
            modal.style.display="block";
        }else if(current_time<cookie_time){
            modal.style.display="none";
        }else{
            modal.style.display="block";
        }
    }else{
        modal.style.display="block";
    }
}
window.onload=()=>{
    popup_check();
}

let test=document.querySelector('#test');

test.addEventListener('click',()=>{
    modal.style.display="none"; 
})