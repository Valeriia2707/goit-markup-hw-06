const burgerEl = document.querySelector(".mobile-nav-button");
const closeBtnEl = document.querySelector(".modal-close-button");
const mobMenuEl = document.querySelector(".mobile-modal");
const bodyEl = document.body;

burgerEl.addEventListener("click", toggleModal);
closeBtnEl.addEventListener("click", toggleModal);

function toggleModal() {
  mobMenuEl.classList.toggle("is-open");

  if (mobMenuEl.classList.contains("is-open")) {
    bodyEl.style.overflow = "hidden";
  } else {
    bodyEl.style.overflow = "visible";
  }
}
