let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let list = document.querySelector('.container .list-images')

window.onload = setInterval(automaticNextImage, 5000);

btnNext.onclick = () => btnOnClick('next')
btnBack.onclick = () => btnOnClick('back')

function btnOnClick(type){
    let items = document.querySelectorAll('.list-images .list-item')
    console.log(items)
    if(type === 'next'){
        list.appendChild(items[0])
    }else{
        list.prepend(items[items.length-1])
    }
}

function automaticNextImage(){
    let items = document.querySelectorAll('.list-images .list-item')
    list.appendChild(items[0])
}