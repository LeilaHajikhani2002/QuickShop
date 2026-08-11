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

let swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 22,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
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