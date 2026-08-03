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