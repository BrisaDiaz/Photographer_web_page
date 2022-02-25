const d = document;

export default function contactForm() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(
      ".contact-form__input , .contact-form__textarea"
    );

  $inputs.forEach((input) => {
    const $span = d.createElement("span");

    $span.textContent = input.title;
    $span.classList.add("contact-form__error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", handleKeyDown);
  d.addEventListener("submit", handleSubmit);
}
function handleSubmit(e) {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(
      ".contact-form__input , .contact-form__textarea"
    );
  e.preventDefault();
  if (e.target === $form) {
    $inputs.forEach((input) => {
      let pattern = input.pattern || input.dataset.pattern;
      validateInput(input, pattern);
    });
  }
}

function checkIsFormInput(e) {
  return e.target.matches(".contact-form__input , .contact-form__textarea")
    ? true
    : false;
}
function handleKeyDown(e) {
  if (!checkIsFormInput(e)) return;
  const $input = e.target,
    pattern = $input.pattern || $input.dataset.pattern;

  validateInput($input, pattern);
}
function validateInput($input, pattern) {
  if (pattern && $input.value !== "") {
    let regex = new RegExp(pattern);

    return !regex.exec($input.value) ? addError($input) : removeError($input);
  }
  if (!pattern) {
    return $input.value === "" ? addError($input) : removeError($input);
  }
}
function addError(input) {
  d.getElementById(input.name).nextElementSibling.classList.add(
    "contact-form__error--visible"
  );

  input.classList.add("contact-form__input--invalid");
}

function removeError(input) {
  d.getElementById(input.name).nextElementSibling.classList.remove(
    "contact-form__error--visible"
  );

  input.classList.remove("contact-form__input--invalid");
}
