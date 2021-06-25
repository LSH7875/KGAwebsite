// ==================코드 좀 더 다듬어 볼게요==========================

// =================버튼 누르면 돌아가는 코드=====================
let classBtn = document.querySelectorAll(".class_all");
let hex = document.querySelector("#hexagon>img");

classBtn.forEach(e=>{
    e.addEventListener("click", circle)
})

function circle(){
    const target = event.target;

    if(classBtn[0]==target){
        hex.setAttribute("class","z");
        hex.style.transition = "1s ease-in-out";
    }else if(classBtn[1]==target){
        hex.setAttribute("class","x");
        hex.style.transition = "1.5s ease-in-out";
    }else if(classBtn[2]==target){
        hex.setAttribute("class","c");
        hex.style.transition = "1.5s ease-in-out";
    }else if(classBtn[3]==target){
        hex.setAttribute("class","n");
        hex.style.transition = "1.5s ease-in-out";
    }else if(classBtn[4]==target){
        hex.setAttribute("class","b");
        hex.style.transition = "1.5s ease-in-out";
    }else{
        hex.setAttribute("class","v");
        hex.style.transition = "1.5s ease-in-out";
    }
}


//=========== 버튼 누르면 과목 상세가 뜨게 하는 코드===============

classBtn.forEach(e=>{
    e.addEventListener("click", clickBtn)
})
function clickBtn(){
    const classDetail = document.querySelectorAll(".curri");
    const target = event.target;
    
    for(let i=0; i<classBtn.length; i++){
        console.log('classBtn[i]=', classBtn[i], 'target=',target)
        if(classBtn[i]==target){
            //console.log(classBtn[i]==target)
            classDetail[i].classList.add("show_detail");
            classDetail[i].classList.add("on");
            //console.log(classDetail[i])
        }else{
            classDetail[i].classList.remove("show_detail");
            classDetail[i].classList.remove("on");
        }
    }
}

// ======================back 누르면 들어가는 코드=============================



let back = document.querySelectorAll(".back");
back.forEach(e=>{
    e.addEventListener( "click" , slideOff )
})

function slideOff(){
    const classDetail = document.querySelectorAll(".curri")
    classDetail.forEach(e=>{
        e.classList.remove("on")
        e.setAttribute("class","curri off")
    })
}