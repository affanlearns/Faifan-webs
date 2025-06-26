// script.js
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-content').style.display = 'block';
  });
  dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.dropdown-content').style.display = 'none';
  });
});
