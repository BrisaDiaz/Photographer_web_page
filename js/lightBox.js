const d = document;

export default function lightBox() {
  let $lightBox = d.querySelector(".light-box"),
    $imgZoom = d.querySelector(".light-box__zoom-img");

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".gallery__zoom-btn") ||
      e.target.matches(".gallery__zoom-btn>*")
    ) {
      return addVisibleStyles($lightBox, $imgZoom, e);
    }
    removeVisibleStyles($lightBox, $imgZoom);
  });
  d.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.matches(".gallery__zoom-btn")) {
      return addVisibleStyles($lightBox, $imgZoom, e);
    }
    if (
      e.key === "Escape" ||
      (e.key === "Enter" && e.target.matches(".light-box__close-btn"))
    ) {
      removeVisibleStyles($lightBox, $imgZoom);
    }
  });
}

function addVisibleStyles($lightBox, $imgZoom, e) {
  let imageSrc = e.target.dataset.img || e.target.parentNode.dataset.img;

  $imgZoom.setAttribute("src", imageSrc);

  $lightBox.classList.add("light-box--visible");
  $imgZoom.classList.add("light-box__zoom-img--visible");
}
function removeVisibleStyles($lightBox, $imgZoom) {
  $lightBox.classList.remove("light-box--visible");
  $imgZoom.classList.remove("light-box__zoom-img--visible");
}
