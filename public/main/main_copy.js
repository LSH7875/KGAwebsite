main_nav=document.querySelector('#main_nav');
nav_bar=document.querySelectorAll('.nav_bar>a');
intro_sub=document.querySelectorAll('.intro_sub>li>a');

function big_nav(){
    main_nav.setAttribute('class','big_nav');

}

function small_nav(){
    main_nav.setAttribute('class','small_nav');

}

intro_sub.addEventListener('mouseover',()=>{
    main_nav.setAttribute('class','big_nav')
})

nav_bar.addEventListener('mouseover',()=>{
    main_nav.setAttribute('class','big_nav')
})
