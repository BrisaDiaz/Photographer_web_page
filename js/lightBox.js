const d = document;

export default function lightBox() {
  d.addEventListener("click", (e) => {
    let $lightBox = d.querySelector(".light-box"),
      $imgZoom = d.querySelector(".light-box__zoom-img");

    if (
      e.target.matches(".gallery__zoom-btn") ||
      e.target.matches(".gallery__zoom-btn>*")
    ) {
      let img = e.target.dataset.img || e.target.parentNode.dataset.img;

      $imgZoom.setAttribute("src", img);

      $lightBox.classList.add("light-box--visible");
      $imgZoom.classList.add("light-box__zoom-img--visible");
    } else {
      $lightBox.classList.remove("light-box--visible");
      $imgZoom.classList.remove("light-box__zoom-img--visible");
    }
  });
}
