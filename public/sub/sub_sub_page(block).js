window.addEventListener('scroll',addScroll);

function addScroll(){
    let one = document.querySelector('.one');
    let two = document.querySelector('.two');
    let three = document.querySelector('.three');
    let four = document.querySelector('.four');
    let five = document.querySelector('.five');
    let six = document.querySelector('.six');
    let sub = document.querySelector('.Sub');
    let scroll = document.documentElement.scrollTop;
    // console.log(document.documentElement.scrollTop);
    if(scroll<1600){
        sub.style.display = "block";
        one.style.display = "block";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    }else if(scroll<2800){
        one.style.display = "none";
        two.style.display = "block";
        sub.style.display = "block";
        three.style.display = "none";
    }else if(scroll<3800){
        sub.style.display = "none";
        two.style.display = "none";
        three.style.display = "block";
        four.style.display = "none";
        sub.style.display = "none";
        one.style.display = "none";     
    }else if(scroll<5000){
        three.style.display = "none";
        four.style.display = "block";
        five.style.display="none";
        sub.style.display = "none";
        one.style.display = "none";    
    }else if(scroll<6400){
        four.style.display="none";
        five.style.display="block";
        six.style.display = "none";
        sub.style.display = "none";
        one.style.display = "none";
    }else{
        five.style.display = "none";
        six.style.display = "block";
        sub.style.display = "none";
        one.style.display = "none";       
    }

}

//메뉴바 눌렀을 때 해당 항목으로 이동--------------------------------


function move_curriculum(q){
    let showDiv = document.querySelector(q);
    let divId = showDiv.id;
    let divElement = '#'+divId;
    console.log(divElement);
    let hi = document.querySelector(divElement);
    hi.scrollIntoView(true);
    hi.scrollIntoView({behavior: "smooth"});
}


//==========================스크롤 시간에 따라 애니메이션================================
const scrollAnimation = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.intersectionRatio>0){
            entry.target.classList.add('scroll_animation')
        }
        else{
            entry.target.classList.remove('scroll_animation');
        }
    })
})

// let scroll_animation = document.querySelectorAll('.scroll_animation');

// scroll_animation.forEach(ele=>{
//     scrollAnimation.observe(ele);
// })

// const scroll_animation = new IntersectionObserver(entries=>{
//     entries.forEach(entry=>{
//         console.log(entry.intersectionRatio)
//     })
// })

