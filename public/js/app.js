// dark mode
let toggleThemeBtn = document.querySelector('#toggleThemeBtn')
toggleThemeBtn.addEventListener('click' , function(){
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }else{
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
})

//swiper
let swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1536: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    }

})
//swiperReading
let swiperReading = new Swiper('.swiperReading', {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-custom-readings',
        prevEl: '.swiper-button-prev-custom-readings',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1536: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    }

})

//mobile sub menu
let openSubMenuBtn = document.querySelector('.open-sub-menu-btn');
let mobileSubMenu= document.querySelector('.mobile-sub-menu');

openSubMenuBtn.addEventListener('click' , function(){
    mobileSubMenu.classList.toggle('hidden')
    openSubMenuBtn.classList.toggle('rotate-180')
})

// open and close moblie nav
let burgerByn=document.querySelector('.burger-btn');
let mobileNav=document.querySelector('.mobile-nav');
let blackLayer=document.querySelector('.black-layer');
let closeBtn=document.querySelector('.close-btn');
let shoppingCardBtn=document.querySelector('.shopping-card-btn');
let mobileShoppingCard=document.querySelector('.mobile-shopping-card');
let closeShoppingCardBtn=document.querySelector('.close-shopping-card-btn');



burgerByn.addEventListener('click', function(){
    mobileNav.classList.remove('-right-80')
    mobileNav.classList.add('right-0')
    blackLayer.classList.toggle('hidden')
})



closeBtn.addEventListener('click' , function(){
    mobileNav.classList.add('-right-80')
    mobileNav.classList.remove('right-0')
    blackLayer.classList.toggle('hidden')
})



blackLayer.addEventListener('click' , function(){
    //close menu
    mobileNav.classList.add('-right-80')
    mobileNav.classList.remove('right-0')

    //close-shopping-card
    mobileShoppingCard.classList.add('-bottom-full')
    mobileShoppingCard.classList.remove('bottom-0')

    blackLayer.classList.toggle('hidden')
})




shoppingCardBtn.addEventListener('click' , function(){

    if(window.matchMedia("(max-width: 1279px)").matches){
        mobileShoppingCard.classList.remove('-bottom-full')
        mobileShoppingCard.classList.add('bottom-0')

        blackLayer.classList.toggle('hidden')
    }

})



closeShoppingCardBtn.addEventListener('click' , function(){
    mobileShoppingCard.classList.add('-bottom-full')
    mobileShoppingCard.classList.remove('bottom-0')

    blackLayer.classList.toggle('hidden')

})