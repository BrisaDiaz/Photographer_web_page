const d = document;
export default function proggressVar() {

// PROGRESS VAR OBSERVER
  const observerVar = new IntersectionObserver(entries=>{
 entries.forEach( entrie => {
   if(entrie.intersectionRatio > 0){
     entrie.target.style.width = `${entrie.target.dataset.value}%`
  
     observerVar.unobserve(entrie.target)
   }
 })
})
  const $progress = d.querySelectorAll(".progress");

$progress.forEach(entries => {
  observerVar.observe(entries)
} )

// PROGRESS PERCENTAGE OBSERVER

  const observerPercentage = new IntersectionObserver(entries=>{
 entries.forEach( entrie => {
   if(entrie.intersectionRatio > 0){
 let i=0;
 
    let actualizeValue = setInterval(() => {
      entrie.target.textContent= i;
       i++
       if( i > parseInt(entrie.target.dataset.value) ){
      clearInterval(  actualizeValue )
    }
 }, 12);

  
     observerPercentage.unobserve(entrie.target)
   }
 })
})
  const $percentage  = d.querySelectorAll ( ".skill .header-skill span")

$percentage .forEach(entries => {
 observerPercentage.observe(entries)
} )
  
 
    


  
 
}