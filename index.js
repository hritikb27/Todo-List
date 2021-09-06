const input = document.querySelector('#input');
const list = document.querySelector('.ls')
let item;

input.addEventListener('keypress', (e)=>{
    if(e.key=='Enter'){
        item = document.createElement('li');
        item.innerText =input.value;
        list.appendChild(item)
        input.value = "";
    }
})