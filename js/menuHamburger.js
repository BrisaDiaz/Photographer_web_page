const d = document;
export default function hamburgerMenu() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".panel-btn") || e.target.matches(`.panel-btn *`)) {
      openMenuPane();
    }
    if (e.target.matches(".panel__menu-link")) {
      closeMenuPanel();
    }
  });
  d.addEventListener("keydown", (e) => {
    if (e.key === "m") {
      openMenuPane();
    }
    if (
      e.key === "Escape" ||
      (e.target.matches(".panel__menu-link") && e.key === "Enter")
    ) {
      closeMenuPanel();
    }
  });
}

function openMenuPane() {
  d.querySelector(".panel").classList.toggle("panel--active");
  d.querySelector(".hamburger").classList.toggle("is-active");
}
function closeMenuPanel() {
  d.querySelector(".panel").classList.remove("panel--active");
  d.querySelector(".hamburger").classList.remove("is-active");
}
