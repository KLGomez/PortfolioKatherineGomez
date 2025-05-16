document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  const darkToggles = document.querySelectorAll("#dark-mode-toggle, #dark-mode-toggle-mobile");
  const body = document.body;

  // Menú hamburguesa
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.contains("hidden");
      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.classList.toggle("hidden");
    });
  }

  // Modo oscuro (escuchamos todos los toggles)
  darkToggles.forEach((toggle) => {
    toggle.addEventListener("change", () => {
      body.classList.toggle("dark-mode", toggle.checked);

      // Sincroniza todos los toggles
      darkToggles.forEach((t) => {
        if (t !== toggle) t.checked = toggle.checked;
      });
    });
  });
});
