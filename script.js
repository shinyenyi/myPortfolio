const menuIcon = document.querySelector('.menu-icon');
const menuItemOne = document.querySelector('.mobile-menu-item-1');
const menuItemTwo = document.querySelector('.mobile-menu-item-2');
const menuItemThree = document.querySelector('.mobile-menu-item-3');
const xMeniIcon = document.querySelector('.x-menu-icon');
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

xMeniIcon.onclick = (() => {
  mobileMenu.classList.remove('mobile-menu');
  mobileMenu.classList.toggle('displayNone');
  header.classList.remove('displayNone');
  header.classList.toggle('header');
  body.style.overflow = 'visible';
});
menuItemOne.onclick = (() => {
  xMeniIcon.click();
  return true;
});
menuItemTwo.onclick = (() => {
  xMeniIcon.click();
  return true;
});
menuItemThree.onclick = (() => {
  xMeniIcon.click();
  return true;
});