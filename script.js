// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
  });
});
