let burger = document.getElementsByClassName('bars')[0],
menu = document.getElementsByClassName('top-nav')[0];
let hoverMenu = true;

burger.addEventListener('click',function (event){
    
    if (hoverMenu){
        menu.classList.add('d-block')
        hoverMenu = false
    }
    else {
        menu.classList.remove('d-block')
        hoverMenu = true
    }
})