let num=0;

let left_btn = document.querySelector('#left_btn');
let right_btn = document.querySelector('#right_btn');

let in_img = document.querySelectorAll('.motion_sec');
let in_text = document.querySelectorAll('.interrior_text');



left_btn.addEventListener('click',()=>{
    
    if(num>=6){num=0}
    else if(num==0){num=(in_img.length)}
    num--;

    in_img.forEach(e=>{
        e.setAttribute('id','nonblock');
        e.style.zIndex=0;
    })
    in_img[num].setAttribute('id','block');
    in_img[num].style.zIndex=1;
    
    in_img.forEach((e)=>{
        console.log(e);
    })
}
)
right_btn.addEventListener('click',()=>{
    if(num==6){num=0}
    if(num==(in_img.length-1)){num=0;}
    num++;
    in_img.forEach(e=>{
        e.setAttribute('id','nonblock');
        e.style.zIndex=0;
    })
    in_img[num].setAttribute('id','block');
    in_img[num].style.zIndex=1;
    in_img.forEach((e)=>{
        console.log(e);
    })
})


function change_img(){

}