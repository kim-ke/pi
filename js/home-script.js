let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll.r5v('.btn');
let currentSlide = 1;

// for image slider manual navigation
let manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');


        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', ()=> {
        manualNav(i);
        currentSlide = i;
    });
});

