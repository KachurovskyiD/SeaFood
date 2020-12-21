// Header-burger

let headerBurger = document.querySelector('#check-menu'),
  labelBurger = document.querySelector('#check-label'),
  headerBurgerMenu = document.querySelector('.header-burger__menu');

document.addEventListener('click', (e) => {
  if (e.target !== headerBurgerMenu && e.target !== headerBurger && e.target !== labelBurger) {
    headerBurger.checked = false;
  }
});