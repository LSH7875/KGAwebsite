let num=0;

let left_btn = document.querySelector('#left_btn');
let right_btn = document.querySelector('#right_btn');

let in_img = document.querySelectorAll('.motion_sec');
let in_text = document.querySelectorAll('.interrior_text');

console.log('로드됨');
console.log(typeof right_btn)
console.log(left_btn);

left_btn.addEventListener('click',()=>{
    
    console.log('왼쪽클릭');
    if(num>=6){num=0}
    else if(num==0){num=(in_img.length)}
    num--;
    console.log('num:',num);
    in_img.forEach(e=>{
        e.setAttribute('id','nonblock');
        e.style.zIndex=0;
    })
    in_img[num].setAttribute('id','block');
    in_img[num].style.zIndex=1;
    console.log('num-1들')
    // if(num==0){
    //     in_img[(in_img.length)-1].setAttribute('id','nonblock');
    //     in_img[]
    //     console.log((in_img.length)-1);
    // }else{
    //     in_img[num-1].setAttribute('id','nonblock');
    //     in_img[num+1].setAttribute('id','nonblock');
    //     console.log(num-1);
    // }
    in_img.forEach((e)=>{
        console.log(e);
    })
}
)
right_btn.addEventListener('click',()=>{
    console.log('오른쪽');
    if(num==6){num=0}
    if(num==(in_img.length-1)){num=0;}
    num++;
    in_img.forEach(e=>{
        e.setAttribute('id','nonblock');
        e.style.zIndex=0;
    })
    // console.log('num:',num);
    in_img[num].setAttribute('id','block');
    in_img[num].style.zIndex=1;
    // in_img[num-1].setAttribute('id','nonblock');
    in_img.forEach((e)=>{
        console.log(e);
    })
})


function change_img(){

}