const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

const header = document.querySelector('.header');

header.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky', window.scrollY > 0);
});

