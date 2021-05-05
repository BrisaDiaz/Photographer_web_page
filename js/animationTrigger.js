const d = document;

export default function  animationTrigger(){

  const observer = new IntersectionObserver(entries=>{
 entries.forEach( entrie => {
   if(entrie.intersectionRatio > 0){
     entrie.target.style.animation= `${entrie.target.dataset.anim} 0.5s linear ${entrie.target.dataset.delay} 1 forwards`;

     observer.unobserve(entrie.target)
   }
 })
})
let $animetes = d.querySelectorAll("[data-anim]")

$animetes.forEach(entries => {
  observer.observe(entries)
} )
}