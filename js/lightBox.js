const d = document ;

export default function lightBox() {
  
  d.addEventListener("click", e => {
     let $lightBox = d.querySelector(".light-box"),
        $imgZoom=d.querySelector(".zoom-img");

    if(e.target.matches('.img-content .circle') || e.target.matches('.img-content .circle >*')){

       let img = e.target.dataset.img || e.target.parentNode.dataset.img ;
  
           $imgZoom.setAttribute("src",img)
           
         $lightBox.classList.add('show');
          $imgZoom.classList.add('showImage');

          



    }else{

        $lightBox.classList.remove('show');
         $imgZoom.classList.remove('showImage'); 

    }
  })
}