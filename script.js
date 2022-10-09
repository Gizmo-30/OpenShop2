const openBtn = document.querySelector('.burger__btn-open'),
    prenavMenu = document.querySelector('.prenav__menu'),
    burgerMenu = document.querySelector('.burger__menu'),
    closeBtn = document.querySelector('.xmark'),
    searchOpen = document.querySelector('.prenav .nav__searchicon'),
    prenavNav = document.querySelector('.prenav__nav'),
    prenavContent = document.querySelector('.prenav__content'),
    searchPanel = document.querySelector('.prenav .nav__search'),
    searchClose = document.querySelector('.searchPanel__btn-close');


width = burgerMenu.clientWidth

openBtn.addEventListener('click', () => {
    burgerMenu.style = `right: 0`
})

closeBtn.addEventListener('click', () => {
    burgerMenu.style = `right: -${width}px`    
})

searchOpen.addEventListener('click', () => {
    prenavNav.style = `display: none;`
    prenavContent.style = `justify-content: end;`
    searchPanel.style = `opacity: 1;`
    searchClose.style = `opacity: 1;`
})

searchClose.addEventListener('click', () => {
    prenavNav.style = `display: block;`
    prenavContent.style = `justify-content: space-between;`
    searchPanel.style = `opacity: 0;`
    searchClose.style = `opacity: 0;`    
})