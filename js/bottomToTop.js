const d = document;
const w = window;

export default function scrollToTop() {
  const $btnScroll = d.querySelector(".scroll-top-btn ");
  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 600) {
      $btnScroll.classList.remove("hidden");
    } else {
      $btnScroll.classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(".scroll-top-btn ")) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
