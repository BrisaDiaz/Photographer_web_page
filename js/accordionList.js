const d = document;
export default function accordionList() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".accordion__header")) {
      toggleActiveStyles(e.target);
    }
  });
  d.addEventListener("keydown", (e) => {
    if (e.target.matches(".accordion__label") && e.key === "Enter") {
      toggleActiveStyles(e.target.parentNode);
    }
  });
}

function toggleActiveStyles($accordionHeader) {
  const isExpanded =
    $accordionHeader.getAttribute("aria-expanded") === "true" ? true : false;

  let $contentBox = $accordionHeader.parentNode;

  $accordionHeader.setAttribute("aria-expanded", !isExpanded);
  $contentBox.classList.toggle("accordion__item--active");
  $accordionHeader.classList.toggle(".accordion__header--active");
}
