const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const closeBtn = document.querySelector('.close');

function abrirModal(img) {
  modal.style.display = 'flex';   // flex para centrar
  modalImg.src = img.src;
  modalTitle.textContent = img.alt;
  modalImg.classList.remove('zoomed'); // siempre limpio el zoom al abrir
}

// Botón de cerrar
closeBtn.onclick = function() {
  modal.style.display = 'none';
  modalImg.classList.remove('zoomed'); // limpio zoom al cerrar
}

// Cerrar haciendo click afuera
window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalImg.classList.remove('zoomed'); // limpio zoom también acá
  }
}

// 🔹 Nuevo: zoom al hacer click en la imagen
modalImg.onclick = function() {
  modalImg.classList.toggle('zoomed');
}
function filtrarProductos() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let nombre = card.querySelector("h3").textContent.toLowerCase();
    let descripcion = card.querySelector("p").textContent.toLowerCase();
    if (nombre.includes(input) || descripcion.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
