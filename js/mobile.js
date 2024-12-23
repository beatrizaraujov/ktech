let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY
    if(scrollTop > 0){
        navBar.classList.add('rolar')
    }else{
        navBar.classList.remove('rolar')
    }
})


const btnMenuMob = document.getElementById('btn-menu-mob');
const line1 = document.querySelector('.line-menumob-1');
const line2 = document.querySelector('.line-menumob-2');
const menuMobile = document.querySelector('.menu-mobile'); 
const body = document.querySelector('body');

btnMenuMob.addEventListener('click', () => {
    line1.classList.toggle('ativo1');
    line2.classList.toggle('ativo2');
    menuMobile.classList.toggle('abrir'); 
    body.classList.toggle('no-overflow');
});
