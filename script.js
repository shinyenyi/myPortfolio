const menuIcon = document.querySelector('.menu-icon');
// const menuItemOne = document.querySelector('.mobile-menu-item-1');
// const menuItemTwo = document.querySelector('.mobile-menu-item-2');
// const menuItemThree = document.querySelector('.mobile-menu-item-3');
// const xMeniIcon = document.querySelector('.x-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.querySelector('.header');
const body = document.querySelector('.body');

menuIcon.onclick = (() => {
  header.classList.remove('header');
  header.classList.toggle('displayNone');
  mobileMenu.classList.remove('displayNone');
  mobileMenu.classList.toggle('mobile-menu');
  body.style.overflow = 'hidden';
});
