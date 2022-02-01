const menu = document.querySelector('.js-menu');
const burger = document.querySelector('.js-menu-btn');
const header = document.querySelector('.header');

if (burger) {
  burger.addEventListener('click', (e) => {
    e.preventDefault();

    header.classList.toggle('is-opened');
    document.body.classList.toggle('fixed');
  });

  menu.addEventListener('click', (e) => {
    if (!header.classList.contains('is-opened')) {
      return;
    }

    if (e.target.closest('a')) {
      header.classList.remove('is-opened');
      document.body.classList.remove('fixed');
    }
  });
}