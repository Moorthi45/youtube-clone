let menuIcon = document.querySelector('.menu-icon')
let sidebar =document.querySelector('.sidebar')
let contrainer=document.querySelector('.container')

menuIcon.onclick=function(){
    sidebar.classList.toggle('small-sidebar')
    contrainer.classList.toggle('large-container')
}