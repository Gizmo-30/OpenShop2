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


let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body'),
    arrow = document.querySelectorAll('.arrow');

if (isMobile.any()) {
    body.classList.add('touch')
    for (i = 0; i < arrow.length; i++) {
        let subMenu = arrow[i].nextElementSibling,
            thisLink = arrow[i].previousElementSibling,
            thisArrow = arrow[i];
        thisLink.classList.add('active')
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open')
            thisArrow.classList.toggle('active')
        })
    }
} else {
    body.classList.add('mouse')
}