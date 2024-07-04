const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");
const loginBtn = document.querySelector(".login-btn");

export function abrirModal() {
  return modal.classList.add("ativo");
}

export function fecharModal() {
  return modal.classList.remove("ativo");
}

closeBtn.addEventListener("click", fecharModal);
loginBtn.addEventListener("click", abrirModal);
