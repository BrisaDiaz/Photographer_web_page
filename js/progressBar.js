const d = document;
export default function progressBar() {
  // PROGRESS VAR OBSERVER
  const observerVar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.width = `${entry.target.dataset.value}%`;

        observerVar.unobserve(entry.target);
      }
    });
  });
  const $progress = d.querySelectorAll(".skill__progress");

  $progress.forEach((entries) => {
    observerVar.observe(entries);
  });

  // PROGRESS PERCENTAGE OBSERVER

  const observerPercentage = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        let i = 0;

        let actualizeValue = setInterval(() => {
          entry.target.textContent = i;
          i++;
          if (i > parseInt(entry.target.dataset.value)) {
            clearInterval(actualizeValue);
          }
        }, 12);

        observerPercentage.unobserve(entry.target);
      }
    });
  });
  const $percentage = d.querySelectorAll(".skill__percentage");

  $percentage.forEach((entries) => {
    observerPercentage.observe(entries);
  });
}
