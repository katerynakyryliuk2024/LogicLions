const openBurgerMenu = document.querySelector('.solid_menu');
const closeBurgerMenu = document.querySelector('.menu-close-btn');
const modal = document.querySelector('.mobile-menu');

openBurgerMenu.addEventListener('click', () =>{
  modal.classList.add('is-open')
})
closeBurgerMenu.addEventListener('click', () => {
  modal.classList.remove('is-open')
})