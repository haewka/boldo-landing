document.addEventListener('DOMContentLoaded',function () {
    console.log('ready');
    function mobileMenu(){
        let hamburgerBtn = document.querySelector('.header__burger-btn'),
            headerMenu = document.querySelector('.header__menu');

        hamburgerBtn.addEventListener('click',function(){
            hamburgerBtn.classList.toggle('active');
            headerMenu.classList.toggle('active');
        })
        
    }
    mobileMenu()
    
})