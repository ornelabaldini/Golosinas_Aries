// ========================
// MODAL DE PRODUCTOS
// ========================
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalContent = modal.querySelector('.modal-content');

// Crear flechas y contador dinámicamente
const prevBtn = document.createElement('div');
prevBtn.textContent = '<';
prevBtn.classList.add('prev');

const nextBtn = document.createElement('div');
nextBtn.textContent = '>';
nextBtn.classList.add('next');

const contador = document.createElement('span'); 
contador.classList.add('contador');

modalContent.appendChild(prevBtn);
modalContent.appendChild(nextBtn);
modalContent.appendChild(contador);

// Imágenes extra por producto
const imagenesProducto = {
  "Alcancías con gelatinas": ["img/alcancias.jpg","img/tigre.jpg","img/osito.jpg","img/piguin.jpg","img/rosa.jpg"],
  "Ojos": ["img/ojos.jpg","img/riveeeer.jpg","img/boca.jpg","img/sds.jpg","img/ss.jpg"],
  "Chupetín Merlina": ["img/merlina.jpg","img/merliina.jpg"],
  "Transformers": ["img/tr.jpg","img/transformer.jpg","img/2.jpg","img/3.jpg","img/2ss.jpg","img/ddd.jpg"],
  "Gomitas Bull dog": ["img/bull_dog_frutillaa.jpg","img/bull_dog_sandia.jpg"],
  "Chupetín Brain": ["img/chupetinBrain.jpg","img/cajaBrain.jpg"],
  "Chupetín con polvo acido": ["img/chupetinConAcido.jpg","img/cajaChupetinAcido.jpg"]
};

let currentImages = [];
let currentIndex = 0;
let currentTitle = "";

// Abrir modal
function abrirModal(img) {
  currentTitle = img.nextElementSibling.textContent;
  currentImages = imagenesProducto[currentTitle] || [img.src];
  currentIndex = 0;
  modal.style.display = 'flex';
  actualizarModal();
}

// Actualizar modal
function actualizarModal() {
  modalImg.src = currentImages[currentIndex];
  modalTitle.textContent = currentTitle;

  if(currentImages.length > 1){
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
    contador.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    contador.textContent = '';
  }
}

// Navegación
prevBtn.onclick = () => {
  if(currentImages.length > 1){
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    actualizarModal();
  }
};
nextBtn.onclick = () => {
  if(currentImages.length > 1){
    currentIndex = (currentIndex + 1) % currentImages.length;
    actualizarModal();
  }
};

// Zoom para imagen única
modalImg.onclick = () => {
  if(currentImages.length === 1){
    modalImg.classList.toggle('zoomed');
  }
};

// Cerrar modal
modal.querySelector('.close').onclick = () => {
  modal.style.display = 'none';
  modalImg.classList.remove('zoomed');
};

window.onclick = e => {
  if(e.target === modal){
    modal.style.display = 'none';
    modalImg.classList.remove('zoomed');
  }
};

// ========================
// BUSCADOR DE PRODUCTOS
// ========================
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase();
  let matches = 0;

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";
    if (title.includes(filter) || desc.includes(filter)) {
      card.style.display = "block";
      matches++;
    } else {
      card.style.display = "none";
    }
  });

  // Mostrar u ocultar el mensaje de no resultados
  noResults.style.display = (matches === 0 && filter.length > 0) ? "block" : "none";
});
