const d = document;
 export default function acordionList() {

  d.addEventListener("click", e =>{
  if(e.target.matches(".content-box .label ") ){
       let $contentBox = e.target.parentNode;
    $contentBox.classList.toggle("active")
  }
  if(e.target.matches(".content-box .label >*") ){
    let $label = e.target.parentNode
    let $contentBox = $label.parentNode
    $contentBox.classList.toggle("active")
  }

  
});

}
