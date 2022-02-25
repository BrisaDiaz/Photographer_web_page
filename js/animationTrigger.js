const d = document;

export default function animationTrigger() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `${entry.target.dataset.anim} 0.5s linear ${entry.target.dataset.delay} 1 forwards`;

        observer.unobserve(entry.target);
      }
    });
  });
  let $animates = d.querySelectorAll("[data-anim]");

  $animates.forEach((entries) => {
    observer.observe(entries);
  });
}
