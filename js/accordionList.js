const d = document;
export default function accordionList() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".accordion__header ")) {
      let $contentBox = e.target.parentNode;
      $contentBox.classList.toggle("accordion__item--active");
    }
    if (e.target.matches(".accordion__header>*")) {
      let $label = e.target.parentNode;
      let $contentBox = $label.parentNode;
      $contentBox.classList.toggle("accordion__item--active");
    }
  });
}
