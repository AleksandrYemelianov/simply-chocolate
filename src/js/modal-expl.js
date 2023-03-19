(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-expl]"),
    closeModalBtn: document.querySelector("[data-modal-close-expl]"),
    modal: document.querySelector("[data-modal-expl]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();