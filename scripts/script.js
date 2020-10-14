/*Hamburger menu*/
let hamburger = document.querySelector('#hamburger');
let x = document.querySelector('#x');

let mobileMenu = document.querySelector('#mobile-menu');

let opened = false;

hamburger.addEventListener('click',function(){
    if(opened == false){
        mobileMenu.classList.remove('hide');
        mobileMenu.classList.add('show');
        hamburger.style.display = 'none';
        x.style.display = 'block';
        opened = true;
    }
});

x.addEventListener('click',function(){
    if(opened == true){
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('hide');
        x.style.display = 'none';
        hamburger.style.display = 'block';
        opened = false;
    }
});

/*Back to top*/
let backToTop = document.querySelector('#back-to-top');
backToTop.style.opacity = '0';

window.addEventListener('scroll',showBackToTop);

function showBackToTop(){
    let y = window.scrollY;
    
    if(window.innerWidth <= 1200){
        return;
    }else{
        if(y >= 200){
            backToTop.style.opacity = '1';
            backToTop.style.transform = 'translateX(0px)';
            backToTop.style.transition = '.3s ease-in-out';
        }else{
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateX(50px)'; 
        }
    }
}

backToTop.addEventListener('click',function(){
    window.scrollTo({top:0});
});

