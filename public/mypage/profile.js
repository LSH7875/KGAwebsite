const profile_submit=document.querySelector('#profile_submit');
const img =document.querySelector('#img');


    profile_submit.setAttribute('disabled','true');


img.addEventListener('change',()=>{
    profile_submit.removeAttribute('disabled');
})

