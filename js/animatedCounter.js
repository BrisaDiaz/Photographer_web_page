const d = document;
export default function animatedCounter() {

    const observerCounter = new IntersectionObserver(entries=>{
 entries.forEach( entrie => {
   if(entrie.intersectionRatio > 0){
 let i=0,
 interval = (entrie.target.dataset.value <= 100) ? 100 : 10; 
 
    let actualizeValue = setInterval(() => {
      entrie.target.textContent= i;
       i++
       if( i > parseInt(entrie.target.dataset.value) ){
      clearInterval(  actualizeValue )
    }
 }, interval);

  
     observerCounter.unobserve(entrie.target)
   }
 })
})
  const $counters =d.querySelectorAll(".counter");

$counters .forEach(entries => {
 observerCounter.observe(entries)
} )

}