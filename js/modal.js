const modalBtnEl = document.querySelector(".button");
const backdropEl = document.querySelector(".background");
const closeBtnEl = document.querySelector(".modal-close-button");
const bodyEl = document.body;

modalBtnEl.addEventListener("click", toggleModal);
closeBtnEl.addEventListener("click", toggleModal);

function toggleModal() {
  backdropEl.classList.toggle("is-open");

  if (backdropEl.classList.contains("is-open")) {
    bodyEl.style.overflow = "hidden";
  } else {
    bodyEl.style.overflow = "visible";
  }
}
