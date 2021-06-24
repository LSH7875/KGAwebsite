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
        // navUl.style.overflow = "hidden";
        navLi.style.height = "50px";
        // navLi.style.overflow = "hidden";
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

navA.forEach(e=>{e.addEventListener('mouseover', scroll_on);
});

// 네비바 서브 메뉴들 파란 배경에 내려오게 하는 코드
function scroll_on(){
    console.log(navA);
    navA.forEach(e=>{e.style.height = "250px"})
    mainNav.style.height = "250px";
    mainNav.style.overflow = "visible";
    navUl.style.height = "250px";
    sub.style.height = "250px";
}

//네비바 파란 배경 fix일 때 마우스 떼면 다시 접히게
mainNav.addEventListener('mouseleave', ReturnBg)
    function ReturnBg(){
        mainNav.style.height = "70px"
        mainNav.style.transition = ".25s ease-in-out"
    }