const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const closeBtn = document.querySelector('.close');

function abrirModal(img) {
  modal.style.display = 'flex';   // flex para centrar
  modalImg.src = img.src;
  modalTitle.textContent = img.alt;
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}
