const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.menu-container');

hamburger.addEventListener('click', () =>{
    container.classList.toggle('show-menu');
});
