  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });