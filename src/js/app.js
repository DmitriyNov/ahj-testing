import { membership } from "./membership";
import { validator } from "./validator";

const input = document.querySelector(".wiget-input");
const submit = document.querySelector(".widget-submit");
const icons = document.querySelectorAll(".widget-icon");

input.addEventListener("input", () => {
  const value = input.value;
  let paymentSystem = membership(value);
  icons.forEach((element) => {
    if (element.classList.contains(paymentSystem)) {
      element.classList.add("checked");
    } else {
      element.classList.remove("checked");
    }
  });
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const value = input.value;
  if (validator(value)) {
    submit.textContent = "Valide";
    submit.classList.add("valide");
  } else {
    submit.textContent = "Invalide";
    submit.classList.add("invalide");
  }
});
