let btn_A = document.querySelector('.A')
let btn_B = document.querySelector('.B')
let btn_C = document.querySelector('.C')
let btn_D = document.querySelector('.D')
let btn_E = document.querySelector('.E')
let btn_F = document.querySelector('.F')
let all = document.querySelector('#hexagon>img')
let Class = document.querySelector('.class')
let CLASS = document.querySelectorAll('.class');
let classA = document.querySelector('.curriculum_A')
let classB = document.querySelector('.curriculum_B')
let classC = document.querySelector('.curriculum_C')
let classD = document.querySelector('.curriculum_D')
let classE = document.querySelector('.curriculum_E')
let classF = document.querySelector('.curriculum_F')
let contentBox = document.querySelector('.curr_content');
let back = document.querySelector('.back');

function circle_A(){
    all.style.transform = "rotate(60deg)";
    all.style.transition = "1s ease-in-out";
    btn_A.style.display = "none";
    btn_B.style.display = "none";
    btn_C.style.display = "none";
    btn_D.style.display = "none";
    btn_E.style.display = "none";
    btn_F.style.display = "none";
    classA.style.display = "block";
    
}
function circle_B(){
    all.style.transform = "rotate(0deg)";
    all.style.transition = "1.5s ease-in-out";
    btn_A.style.display = "none";
    btn_B.style.display = "none";
    btn_C.style.display = "none";
    btn_D.style.display = "none";
    btn_E.style.display = "none";
    btn_F.style.display = "none";
    classB.style.display = 'block';
}

function circle_C(){
    all.style.transform = "rotate(-60deg)";
    all.style.transition = "1.5s ease-in-out";
    btn_A.style.display = "none";
    btn_B.style.display = "none";
    btn_C.style.display = "none";
    btn_D.style.display = "none";
    btn_E.style.display = "none";
    btn_F.style.display = "none";
    classC.style.display = 'block';
}

function circle_D(){
    all.style.transform = "rotate(120deg)";
    all.style.transition = "1.5s ease-in-out";
    btn_A.style.display = "none";
    btn_B.style.display = "none";
    btn_C.style.display = "none";
    btn_D.style.display = "none";
    btn_E.style.display = "none";
    btn_F.style.display = "none";
    classD.style.display = 'block';
}

function circle_E(){
    all.style.transform = "rotate(180deg)";
    all.style.transition = "1.5s ease-in-out";
    btn_A.style.display = "none";
    btn_B.style.display = "none";
    btn_C.style.display = "none";
    btn_D.style.display = "none";
    btn_E.style.display = "none";
    btn_F.style.display = "none";
    classE.style.display = 'block';
}

function circle_F(){
    all.style.transform = "rotate(-120deg)";
    all.style.transition = "1.5s ease-in-out";
    btn_A.style.display = "none";
    btn_B.style.display = "none";
    btn_C.style.display = "none";
    btn_D.style.display = "none";
    btn_E.style.display = "none";
    btn_F.style.display = "none";
    classF.style.display = 'block';
}

function slideOn(){
    contentBox.setAttribute('class','curr_content on');
}

function slideOff(){
    if(contentBox.className=='curr_content on'){
       contentBox.setAttribute('class','curr_content off');
    }else{
        contentBox.setAttribute('class','curr_content');
    }
    
    btn_A.style.display = "block";
    btn_B.style.display = "block";
    btn_C.style.display = "block";
    btn_D.style.display = "block";
    btn_E.style.display = "block";
    btn_F.style.display = "block";

    
    classA.style.display = "none";
    classB.style.display = "none";
    classC.style.display = "none";
    classD.style.display = "none";
    classF.style.display = "none";
    classA.style.display = "none";
}




btn_A.addEventListener('click',circle_A);
btn_B.addEventListener('click',circle_B);
btn_C.addEventListener('click',circle_C);
btn_D.addEventListener('click',circle_D);
btn_E.addEventListener('click',circle_E);
btn_F.addEventListener('click',circle_F);


