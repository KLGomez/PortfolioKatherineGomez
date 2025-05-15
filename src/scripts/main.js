// /src/scripts/main.js

// Menú hamburguesa
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    navList.classList.toggle('active');
  });
}

// Modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
  });
}
