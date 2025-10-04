
// ========================
// MODAL DE PRODUCTOS
// ========================

// Referencias a elementos del modal
const modal = document.getElementById('modal');           // Contenedor principal del modal
const modalImg = document.getElementById('modal-img');    // Imagen dentro del modal
const modalTitle = document.getElementById('modal-title');// Título dentro del modal
const modalContent = modal.querySelector('.modal-content');// Contenido interno del modal

// Crear flechas y contador dinámicamente
const prevBtn = document.createElement('div');   // Flecha anterior
prevBtn.textContent = '<';
prevBtn.classList.add('prev');

const nextBtn = document.createElement('div');   // Flecha siguiente
nextBtn.textContent = '>';
nextBtn.classList.add('next');

const contador = document.createElement('span'); // Contador de imágenes (ej: 1 / 5)
contador.classList.add('contador');

// Agregar flechas y contador dentro del modal
modalContent.appendChild(prevBtn);
modalContent.appendChild(nextBtn);
modalContent.appendChild(contador);

// ========================
// IMÁGENES POR PRODUCTO
// ========================
const imagenesProducto = {
  "Alcancías con gelatinas": ["img/alcancias.jpg","img/tigre.jpg","img/osito.jpg","img/piguin.jpg","img/rosa.jpg"],
  "Ojos": ["img/ojos.jpg","img/riveeeer.jpg","img/boca.jpg","img/sds.jpg","img/ss.jpg"],
  "Chupetín Merlina": ["img/merlina.jpg","img/merliina.jpg"],
  "Transformers": ["img/tr.jpg","img/transformer.jpg","img/2.jpg","img/3.jpg","img/2ss.jpg","img/ddd.jpg"],
  "Gomitas Bull dog": ["img/bull_dog_frutillaa.jpg","img/bull_dog_sandia.jpg"],
  "Chupetín Brain": ["img/chupetinBrain.jpg","img/cajaBrain.jpg"],
  "Chupetín con polvo acido": ["img/chupetinConAcido.jpg","img/cajaChupetinAcido.jpg"]
};

// Variables para controlar el modal
let currentImages = [];  // Lista de imágenes actuales
let currentIndex = 0;    // Posición actual dentro del array
let currentTitle = "";   // Nombre del producto actual

// ========================
// FUNCIÓN: Abrir el modal
// ========================
function abrirModal(img) {
  currentTitle = img.nextElementSibling.textContent;         // Toma el texto del título del producto
  currentImages = imagenesProducto[currentTitle] || [img.src];// Busca las imágenes según el título
  currentIndex = 0;                                          // Empieza en la primera imagen
  modal.style.display = 'flex';                              // Muestra el modal
  actualizarModal();                                         // Actualiza contenido
}

// ========================
// FUNCIÓN: Actualizar modal
// ========================
function actualizarModal() {
  modalImg.src = currentImages[currentIndex];   // Muestra la imagen actual
  modalTitle.textContent = currentTitle;        // Muestra el título del producto

  // Si hay más de una imagen, muestra flechas y contador
  if (currentImages.length > 1) {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
    contador.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  } else {
    // Si solo hay una imagen, oculta flechas y contador
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    contador.textContent = '';
  }
}

// ========================
// NAVEGACIÓN ENTRE IMÁGENES
// ========================
prevBtn.onclick = () => {
  if (currentImages.length > 1) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    actualizarModal();
  }
};
nextBtn.onclick = () => {
  if (currentImages.length > 1) {
    currentIndex = (currentIndex + 1) % currentImages.length;
    actualizarModal();
  }
};

// ========================
// ZOOM PARA IMAGEN ÚNICA
// ========================
modalImg.onclick = () => {
  if (currentImages.length === 1) {
    modalImg.classList.toggle('zoomed'); // Amplía o reduce la imagen
  }
};

// ========================
// CERRAR MODAL
// ========================
modal.querySelector('.close').onclick = () => {
  modal.style.display = 'none';
  modalImg.classList.remove('zoomed');
};

// Cerrar al hacer clic fuera del contenido
window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalImg.classList.remove('zoomed');
  }
};

// ========================
// BUSCADOR DE PRODUCTOS
// ========================
const searchInput = document.getElementById("search");     // Campo de búsqueda
const cards = document.querySelectorAll(".card");          // Todas las tarjetas de productos
const noResults = document.getElementById("no-results");   // Mensaje de "sin resultados"

// Evento al escribir en el buscador
searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase().trim();   // Texto buscado en minúsculas
  let matches = 0;                                         // Contador de coincidencias

  // Recorre todas las tarjetas de productos
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";

    // Muestra las que coincidan con el texto buscado
    if (title.includes(filter) || desc.includes(filter)) {
      card.style.display = "block";
      matches++;
    } else {
      card.style.display = "none";
    }
  });

  // Mostrar u ocultar el mensaje de "no resultados"
  if (matches === 0 && filter.length > 0) {
    noResults.textContent = "😔 No encontramos tu producto, escribinos 💬";
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
});
