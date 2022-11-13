const openBtn = document.querySelector('.burger__btn-open'),
    prenavMenu = document.querySelector('.prenav__menu'),
    burgerMenu = document.querySelector('.burger__menu'),
    closeBtn = document.querySelector('.xmark'),
    searchOpen = document.querySelector('.prenav .nav__searchicon'),
    prenavNav = document.querySelector('.prenav__nav'),
    prenavContent = document.querySelector('.prenav__content'),
    prenavLi = document.querySelectorAll('.burger__menu .prenav__li'),
    searchPanel = document.querySelector('.searchPanel'),
    searchClose = document.querySelector('.searchPanel__btn-close'),
    linkInBurger = document.querySelector('.burger__menu .menu__link'),
    menu = document.querySelector('.menu');


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

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body'),
    dropDowns = document.querySelectorAll('.menu .menu__link'),
    arrows = document.querySelectorAll('.arrow'),
    icon = document.querySelector('.prenav-menuicon');

if (isMobile.any()) {
    body.classList.add('touch')

    dropDowns.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            dropDowns.forEach(item => {
                item.classList.remove('open')
            });
            element.classList.add('open')
            window.addEventListener('click', (e) => {
                if (e.target != element) {
                    element.classList.remove('open')
                } 
            })
        })
    });
} else {
    body.classList.add('mouse')
}

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



/* >>>>>>>>>>>>>>>>>>>>>>>...... */

/* SLIDER START */


class Slider {
    constructor(obj) {
        this.slider = document.querySelector(obj.slider)
        this.track = this.slider.querySelector(obj.track)
        this.slides = [...this.track.children]
        this.indicator = this.slider.querySelectorAll(obj.indicator)
        this.width = this.slider.clientWidth

        this.slides.forEach((slide, i) => {
            slide.style = `min-width: ${this.width}px;`
        });

    
        this.move()
    }

    move() {
        this.indicator.forEach((item, i) => {
            item.addEventListener('click', () => {
                this.track.style = `transform: translateX(-${this.width * i}px)`
                this.clearClass(this.indicator)
                item.classList.toggle('active')
            })
        });

    }

    clearClass(array) {
        array.forEach(element => {
            element.classList.remove('active')
        });
    
    }
}

const slider = new Slider({
    slider: '.slider',
    track: '.slider__track',
    indicator: '.indicator',
})

console.log(slider);

/* SLIDER END */

/* >>>>>>>>>>>>>>>>>>>>>>>...... */