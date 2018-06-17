document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.title > .menu-icon').addEventListener('click', toggleNavbar, false);
}, false);
function toggleNavbar() {
  document.body.classList.toggle('navbar-expanded');
}