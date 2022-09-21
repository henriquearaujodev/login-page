const menuBtn = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('open');
  overlay.classList.toggle('open-overlay');
});
