const openBtn = document.querySelector('.burger__btn-open'),
    prenavMenu = document.querySelector('.prenav__menu'),
    burgerMenu = document.querySelector('.burger__menu'),
    closeBtn = document.querySelector('.xmark'),
    searchOpen = document.querySelector('.prenav .nav__searchicon'),
    prenavNav = document.querySelector('.prenav__nav'),
    prenavContent = document.querySelector('.prenav__content'),
    searchPanel = document.querySelector('.searchPanel'),
    searchClose = document.querySelector('.searchPanel__btn-close');


width = burgerMenu.clientWidth

openBtn.addEventListener('click', () => {
    burgerMenu.style = `right: 0`
    FuncClose()
})

closeBtn.addEventListener('click', () => {
    burgerMenu.style = `right: -${width}px`    
})

searchOpen.addEventListener('click', () => {
    FuncOpen()
})

searchClose.addEventListener('click', (e) => {
    FuncClose()
})

function FuncClose() {
    prenavNav.style = `display: block;`;
    searchPanel.style = `display: none;`;
    prenavContent.style = `justify-content: space-between;`;
    return;
}

function FuncOpen() {
    prenavNav.style = `display: none;`;
    searchPanel.style = `display: flex;`;
    prenavContent.style = `justify-content: end;`;
    return;
}
