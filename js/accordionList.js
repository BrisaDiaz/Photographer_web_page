const d = document;
export default function accordionList() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".accordion__header")) {
      toggleActiveStyles(e.target);
    }
    if (e.target.matches(".accordion__label")) {
      toggleActiveStyles(e.target.parentNode);
    }
  });
  d.addEventListener("keydown", (e) => {
    if (e.target.matches(".accordion__label") && e.key === "Enter") {
      toggleActiveStyles(e.target.parentNode);
    }
  });
}

function toggleActiveStyles($accordionHeader) {
  let $contentBox = $accordionHeader.parentNode;
  $contentBox.classList.toggle("accordion__item--active");
  $accordionHeader.classList.toggle(".accordion__header--active");
}
