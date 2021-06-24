main_nav=document.querySelector('#main_nav');
nav_bar=document.querySelectorAll('.nav_bar>a');
intro_sub=document.querySelectorAll('.intro_sub>li>a');

// function big_nav(){
//     main_nav.setAttribute('class','big_nav');

// }

// function small_nav(){
//     main_nav.setAttribute('class','small_nav');

// }

// intro_sub.addEventListener('mouseover',()=>{
//     main_nav.setAttribute('class','big_nav')
// })

// nav_bar.addEventListener('mouseover',()=>{
//     main_nav.setAttribute('class','big_nav')
// })
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

