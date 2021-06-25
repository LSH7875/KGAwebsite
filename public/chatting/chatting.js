"use strict"

const socket = io();

const nickname = document.querySelector('#nickname');
const chatting_list = document.querySelector('.chatting_list');
const msg = document.querySelector('#msg');
const btn = document.querySelector('#btn');
const content = document.querySelector('.content')

btn.addEventListener("click",()=>{
    const param = {
        name: nickname.value,
        msg: msg.value         
    }
    socket.emit("chatting",param)
})

socket.on("chatting",(data)=>{ 
    // let aaa = await user.findOne({where:{user_id:req.cookies.id}})
    // console.log(aaa.user_grade)
    console.log(socket.id);
    console.log(data)
    const { name, msg, time } = data;
    const item = new li_model(name, msg, time);
    item.makeLi()
    content.scrollTop(0, displayContainer.scrollHeight)
})
function li_model(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;
    this.makeLi = ()=>{
        const li = document.createElement('li');
        li.classList.add(nickname.value === this.name ? "sent": "received")
        if(li.className == "sent"){
            const dom = ` <span class="profile">
            <span class="user">${this.name}</span>
            <img src="/user.png" alt="">
            </span>
            <span class="message">${this.msg}</span>              
            <span class="time">${this.time}</span>`;
            li.innerHTML = dom;
        } else{
            const dom = ` <span class="profile">
            <span class="user">${this.name}</span>
            <img src="/경일이.png" alt="">
            </span>
            <span class="message">${this.msg}</span>              
            <span class="time">${this.time}</span>`;
            li.innerHTML = dom;
        }
        chatting_list.appendChild(li)
    }
}

// btn.addEventListener("click",()=>{
//     const param = {
//         name: nickname.value,
//         msg: msg.value         
//     }
//     socket.emit("setting",param)
// })
// socket.on("chatting",(data)=>{
//     console.log(admin_arr);
// })
// socket.on("chatting",(data)=>{ 
//     // let aaa = await user.findOne({where:{user_id:req.cookies.id}})
//     // console.log(aaa.user_grade)
//     console.log(socket.id);
//     console.log(data)
//     const { name, msg, time } = data;
//     const item = new li_model(name, msg, time);
//     item.makeLi()
//     content.scrollTop(0, displayContainer.scrollHeight)
// })

// function li_model(name, msg, time){
//     this.name = name;
//     this.msg = msg;
//     this.time = time;

//     this.makeLi = ()=>{
//         const li = document.createElement('li');
//         li.classList.add(nickname.value === this.name ? "sent": "received")
//         if(li.className == "sent"){
//             const dom = ` <span class="profile">
//             <span class="user">${this.name}</span>
//             <img src="/user.png" alt="">
//             </span>
//             <span class="message">${this.msg}</span>              
//             <span class="time">${this.time}</span>`;
//             li.innerHTML = dom;
//         } else{
//             const dom = ` <span class="profile">
//             <span class="user">${this.name}</span>
//             <img src="/경일이.png" alt="">
//             </span>
//             <span class="message">${this.msg}</span>              
//             <span class="time">${this.time}</span>`;
//             li.innerHTML = dom;
//         }
//         chatting_list.appendChild(li)
//     }
// }
        