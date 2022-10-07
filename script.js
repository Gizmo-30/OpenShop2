const openBtn = document.querySelector('.burger__btn-open'),
    prenavMenu = document.querySelector('.prenav__menu'),
    burgerMenu = document.querySelector('.burger__menu'),
    closeBtn = document.querySelector('.xmark');

width = burgerMenu.clientWidth

openBtn.addEventListener('click', () => {
    burgerMenu.style = `right: 0`
})

closeBtn.addEventListener('click', () => {
    burgerMenu.style = `right: -${width}px`    
})


