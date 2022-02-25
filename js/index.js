const d = document;
import slider from "./slider.js";
import accordionList from "./accordionList.js";
import progressVar from "./progressBar.js";
import animatedCounter from "./animatedCounter.js";
import bottomToTop from "./bottomToTop.js";
import animationTrigger from "./animationTrigger.js";
import menuHamburger from "./menuHamburger.js";
import lightBox from "./lightBox.js";
d.addEventListener("DOMContentLoaded", (e) => {
  slider();
  accordionList();
  progressVar();
  animatedCounter();
  bottomToTop();
  menuHamburger();
  lightBox();
});

animationTrigger();
