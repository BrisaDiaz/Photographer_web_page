export default function hamburgerMenu() {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(".panel-btn") || e.target.matches(`.panel-btn *`)) {
      d.querySelector(".panel").classList.toggle("panel--active");
      d.querySelector(".hamburger").classList.toggle("is-active");
    }
    if (e.target.matches(".panel__menu-link")) {
      d.querySelector(".panel").classList.remove("panel--active");
      d.querySelector(".hamburger").classList.remove("is-active");
    }
  });
}
