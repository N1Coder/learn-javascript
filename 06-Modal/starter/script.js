"use strict";

const modal = document.querySelector(".modal");
const overlayModal = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsModal = document.querySelectorAll(".show-modal");
const closeModal = () => {
  modal.classList.add("hidden");
  overlayModal.classList.add("hidden");
};
const showModal = e => {
  modal.classList.remove("hidden");
  overlayModal.classList.remove("hidden");
  console.log(showModal.textContent);
};

// add function to esc keypress event
const keypressEvent = e => {
  // console.log(e.key === "Escape" ? true : false);

  const modalVisible = !modal.classList.contains("hidden");
  const overlayVisible = !modal.classList.contains("hidden");

  if (e.key === "Escape" && modalVisible && overlayVisible) {
    return closeModal();
  }
};

// untuk memberikan style pada node element queryselector all maka kita harus melakukan loop terlebih dahulu
// looping through all 3 buttons for showing modal
for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener("click", showModal);
}

// add event to close button in modal
btnCloseModal.addEventListener("click", closeModal);

// add event to close modal when user click the overlay
overlayModal.addEventListener("click", closeModal);

// add event to close modal when user click esc key
document.addEventListener("keydown", keypressEvent);
