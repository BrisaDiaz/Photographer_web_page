const d = document;
import slider from "./slider.js";
import acordionList from "./acordionList.js";
import progressVar from "./progressVar.js";
import animatedCounter from "./animatedCounter.js";
import bottonToTop from "./bottonToTop.js";
import animationTrigger from "./animationTrigger.js"
import menuHamburger from "./menuHamburger.js"
import lightBox from "./lightBox.js"
d.addEventListener("DOMContentLoaded", e => {

slider(); 
acordionList();
progressVar();
animatedCounter();
bottonToTop();
menuHamburger();
lightBox();
})

animationTrigger();
