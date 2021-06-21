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

//메뉴바 눌렀을 때 해당 항목으로 이동 -> 이건 나중에 다시 만들어야지..
// function move_curriculum(){

// }

