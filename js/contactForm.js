    const d = document;

     export default function contactForm() {
      const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form *[required]");

      $inputs.forEach(input => {
        const $span = d.createElement('span');

        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
      })

      d.addEventListener('keyup', (e) => {
        console.log(e)
        if (e.target.matches(".contact-form [required]")) {
          let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;


          if (pattern && $input.value !== "") {
            let regex = new RegExp(pattern);
            
            return !regex.exec($input.value) ? d.getElementById($input.name).nextElementSibling.classList.add("is-active") :
              d.getElementById($input.name).nextElementSibling.classList.remove("is-active");
          }
          if (!pattern) {
            return $input.value === "" ? d.getElementById($input.name).nextElementSibling.classList.add("is-active") :
              d.getElementById($input.name).nextElementSibling.classList.remove("is-active");
          }
        }
      });


    }