const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

// Crear flechas y contador dinámicamente
const prevBtn = document.createElement('div');
prevBtn.textContent = '<';
prevBtn.classList.add('prev');

const nextBtn = document.createElement('div');
nextBtn.textContent = '>';
nextBtn.classList.add('next');

const contador = document.createElement('span'); 
contador.classList.add('contador');

const modalContent = modal.querySelector('.modal-content');
modalContent.appendChild(prevBtn);
modalContent.appendChild(nextBtn);
modalContent.appendChild(contador);

// Definir imágenes extra por producto
const imagenesProducto = {
  "Alcancías con gelatinas": [
    "img/alcancias.jpg",
    "img/tigre.jpg",
    "img/osito.jpg",
    "img/piguin.jpg",
    "img/rosa.jpg"
  ],
  "Ojos(variedad de diseños)": [
    "img/ojos.jpg",
    "img/riveeeer.jpg",
    "img/boca.jpg",
    "img/sds.jpg",
    "img/ss.jpg"
  ],
  "Eyeball caramelo duro Merlina": [
    "img/merlina.jpg",
    "img/merliina.jpg"
  ],
  "Transformers": [
    "img/tr.jpg",
    "img/transformer.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/2ss.jpg",
    "img/ddd.jpg"
  ],
  "Gomitas Bull dog": [
    "img/bull_dog_frutillaa.jpg",
    "img/bull_dog_sandia.jpg"
  ],
  
  // Agregar más productos con varias imágenes cuando estén disponibles
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

// Actualizar modal (imagen, título y contador)
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

// Zoom solo si hay una imagen
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

// Filtro de productos 
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

  // Mostrar mensaje si no hay productos visibles
  let anyVisible = Array.from(cards).some(card => card.style.display === "block");
  document.getElementById("no-results").style.display = anyVisible ? "none" : "block";

}
document.getElementById("search").addEventListener("input", filtrarProductos);
// Título animado con emojis
let h1 = "Golosinas Aries ♈🔥 - Inicio";
let chars = Array.from(title); // Esto maneja correctamente los emojis
let i = 0;

function rotateTitle() {
  document.title = chars.slice(i).join("") + " " + chars.slice(0, i).join("");
  i = (i + 1) % chars.length;
}

const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function () {
  let filter = searchInput.value.toLowerCase();
  let matches = 0;

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(filter)) {
      card.style.display = "block";
      matches++;
    } else {
      card.style.display = "none";
    }
  });

  // Mostrar/ocultar mensaje de "no resultados"
  if (matches === 0 && filter.length > 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
});


setInterval(rotateTitle, 300);
rotateTitle(); // Inicializar al cargar
