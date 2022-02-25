const d = document;
export default function slider() {
  const $btnNext = document.getElementById("btn-next"),
    $btnPrev = document.getElementById("btn-prev"),
    $slides = document.querySelectorAll(".testimonial-carousel__slide");

  let i = 0;
  const movePrev = () => {
    $slides[i].classList.remove("testimonial-carousel__slide--active");
    i--;
    if (i < 0) i = $slides.length - 1;
    $slides[i].classList.add("testimonial-carousel__slide--active");
  };
  const moveNext = () => {
    $slides[i].classList.remove("testimonial-carousel__slide--active");
    i++;

    if (i >= $slides.length) i = 0;

    $slides[i].classList.add("testimonial-carousel__slide--active");
  };
  const autoSlider = setInterval(() => {
    moveNext();
  }, 5000);

  d.addEventListener("click", (e) => {
    if (e.target === $btnPrev) {
      e.preventDefault();
      movePrev();
      clearInterval(autoSlider);
    }
    if (e.target === $btnNext) {
      e.preventDefault();
      moveNext();
      clearInterval(autoSlider);
    }
  });
  d.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if (e.target === $btnPrev) {
      e.preventDefault();
      movePrev();
      clearInterval(autoSlider);
    }
    if (e.target === $btnNext) {
      e.preventDefault();
      moveNext();
      clearInterval(autoSlider);
    }
  });
}
