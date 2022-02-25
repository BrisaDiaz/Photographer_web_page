const d = document;
export default function animatedCounter() {
  const observerCounter = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        let i = 0,
          interval = entry.target.dataset.value <= 100 ? 100 : 10;

        let actualizeValue = setInterval(() => {
          entry.target.textContent = i;
          i++;
          if (i > parseInt(entry.target.dataset.value)) {
            clearInterval(actualizeValue);
          }
        }, interval);

        observerCounter.unobserve(entry.target);
      }
    });
  });
  const $counters = d.querySelectorAll(".counter");

  $counters.forEach((entries) => {
    observerCounter.observe(entries);
  });
}
