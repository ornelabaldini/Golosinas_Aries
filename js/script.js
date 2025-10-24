// ========================
// MODAL DE PRODUCTOS
// ========================

// 🔹 Referencias seguras al modal (si existe)
const modal = document.getElementById('modal'); 
if (modal) {

  const modalImg = document.getElementById('modal-img');      // Imagen del modal
  const modalTitle = document.getElementById('modal-title');  // Título del modal
  const modalContent = modal.querySelector('.modal-content'); // Contenedor interno
  

  // Crear flechas y contador solo una vez
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

  // ========================
  // IMÁGENES POR PRODUCTO
  // ========================
  const imagenesProducto = {
    "Alcancias con gelatinas": ["img/alcancias1.jpg","img/alcancias2.jpg","img/alcancias3.jpg"],
    "Chupetines Merlina (x30u)": ["img/merlina1.jpg","img/merlina2.jpg", "img/merlina3.jpg", "img/merlina4.jpg"],
    "Chupetin con polvo acido Brain(30u)": ["img/chupetinBrain.jpg","img/cajaBrain.jpg"],
    "Chupetin con polvo acido skull (30u)": ["img/chupetinConAcido.jpg","img/cajaChupetinAcido.jpg"],
    "Autos de carrera con chicles(30u)": ["img/carrera.jpg","img/reversacarrera.jpg"],
    "Brochetas de ojos (x30 brochetas)": ["img/brochetas3.jpg","img/brochetas.jpg"],
    "Remera pimball + chicles(x30)": ["img/pimballremera.jpg","img/reversaremera.jpg"],
    "Celu + chicles(x30)": ["img/pimballip.jpg","img/reversaip.jpg"],
    "Chupetin Calabaza conpolvo ácido (30u)": ["img/chupetinCalabaza.jpg","img/chupetincalabaza1.jpg", "img/chupetincalabaza2.jpg"],
    "Chupetines con formas (x30) ": ["img/chupetinesconformas1.jpg", "img/chupetinesconformas2.jpg",],
    "🎃 Halloween chupetines (30u)": ["img/halloween1.jpg","img/halloween2.jpg","img/halloween3.jpg","img/halloween4.jpg",],
    "Gelatinas con formas (30u)": ["img/gelatinaDiferentesSabores4.jpg", "img/gelatinaDiferentesSabores3.jpg", "img/gelatinaDiferentesSabores2.jpg", "img/gelatinaDiferentesSabores5.jpg", "img/gelatinaDiferentesSabores1.jpg"],
    "Chupetines de Corona con LED (x30u)": ["img/chupetinesconled1.jpg", "img/corona2.jpg"],
    "Gomitas cara (30u)": ["img/gomitablandaCara3.jpg","img/gomitablandaCara2.jpg"],
    "Gomitas blandas Selección Argentina (30u)": ["img/seleccion.jpg", "img/seleccion1.jpg", "img/seleccion2.jpg",],
    "Cool Mint sabores frutales (x30u)": ["img/coolmint.jpg","img/coolmint2.jpg"],
    "Trompetas con chupetin y sonido (30u)": ["img/trompeta1.jpg", "img/trompetas.jpg"],
    "Sorpresa capibara + chicles (x30u)": ["img/sorpresacapibara1.jpg", "img/sorpresacapibara2.jpg"],
    "Sorpresa plantas vs Zombies y chicles (x30u)": ["img/sorpresaplant2.jpg", "img/sorpresaplant.jpg"],
    "Gomitas blandas Frutillas (30u)": ["img/frutilla1.jpg", "img/frutilla.jpg"],
    "Gomitas blandas Fantasmita (30u)": ["img/fantasmitas.jpg", "img/fantasmitas2.jpg"],
    "Monedas de chocolate (x250u)": ["img/monedas1.jpg", "img/monedas2.jpg"],
    "Gomitas 👁️👄👁️ (30u)": ["img/gomitasoh.jpg", "img/gomitasoh1.jpg"],
    "Gomitas blandas Kuromy (30u)": ["img/gomitasblandas7.jpg", "img/gomitasblandas71.jpg"],
    "Chupetines Capibara (30u)": ["img/chupetincapibara1.jpg", "img/chupetincapibara2.jpg"],
    "Chupetines con forma de conejo (x30)": ["img/conejos1.jpg", "img/conejos3.jpg"],
    "Chupetines con forma de unicornio (x30)":["img/unicornio1.jpg","img/unicornio2.jpg","img/unicornio3.jpg"]
  };


  // Variables de control
  let currentImages = [];
  let currentIndex = 0;
  let currentTitle = "";

  function abrirModal(card) {
  const img = card.querySelector('img');
  const title = card.querySelector('h3');
  const price = card.querySelector('p'); // <- tomamos el precio del producto

  currentTitle = title ? title.textContent : "Producto";
  currentImages = imagenesProducto[currentTitle] || [img.src];
  currentIndex = 0;

  // Mostrar modal
  modal.style.display = 'flex';
  actualizarModal();

  // Mostrar título y precio dentro del modal
  const modalTitle = document.getElementById('modal-title');
  const modalPrecio = document.getElementById('modal-precio');

  modalTitle.textContent = currentTitle;
  modalPrecio.textContent = price ? price.textContent : '';

  // Guardar info en los botones (para el envío por WhatsApp)
  document.getElementById('modal-agregar').dataset.producto = currentTitle;
  document.getElementById('modal-agregar').dataset.precio = price ? price.textContent : '';

  document.getElementById('modal-consulta').dataset.producto = currentTitle;
  document.getElementById('modal-consulta').dataset.precio = price ? price.textContent : '';
}


  // ========================
  // FUNCIÓN: Actualizar modal
  // ========================
  function actualizarModal() {
    modalImg.src = currentImages[currentIndex];
    modalTitle.textContent = currentTitle;

    if (currentImages.length > 1) {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
      contador.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    } else {
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
      modalImg.classList.toggle('zoomed');
    }
  };

  // ========================
  // CERRAR MODAL
  // ========================
  modal.querySelector('.close').onclick = () => {
    modal.style.display = 'none';
    modalImg.classList.remove('zoomed');
  };

  window.onclick = e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.classList.remove('zoomed');
    }
  };

  // ========================
  // ABRIR MODAL AL TOCAR CARD
  // ========================
  const cards = document.querySelectorAll('.card'); 
  cards.forEach(card => {
  const titulo = card.querySelector('h3').textContent;
  const modalPrecio = document.getElementById('modal-precio');
  const cantidadImgs = imagenesProducto[titulo]?.length || 1;

  if (cantidadImgs > 1) {
    const overlay = document.createElement('span');
    overlay.className = 'mas-fotos';
    overlay.textContent = `+${cantidadImgs - 1} fotos`;
    card.appendChild(overlay);
  }
});
  cards.forEach(card => {
    card.onclick = () => abrirModal(card);
  });
  
}


// ========================
// BUSCADOR DE PRODUCTOS
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const cards = document.querySelectorAll(".card");
  const noResults = document.getElementById("no-results");

  // Si no hay buscador o cards, no hace nada (evita errores en otras páginas)
  if (!searchInput || cards.length === 0) return;

  // Función general de filtrado
  function filtrarProductos() {
    const filter = searchInput.value.toLowerCase().trim();
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

    if (noResults) {
      if (matches === 0 && filter.length > 0) {
        noResults.textContent = "😔 No encontramos tu producto, escribinos 💬";
        noResults.style.display = "block";
      } else {
        noResults.style.display = "none";
      }
    }
  }

  // Escucha en móviles y PC
  searchInput.addEventListener("input", filtrarProductos);
  searchInput.addEventListener("keyup", filtrarProductos);
});



// ========================
// ENLACE A WHATSAPP (FUNCIONA EN CELULAR Y PC)
// ========================

const numero = "542236010443";

// Seleccionamos todos los botones tanto de las cards como del modal
const botones = document.querySelectorAll('.btn-carrito, .btn-consulta, #modal-agregar, #modal-consulta');

botones.forEach(boton => {
  boton.addEventListener('click', (event) => {
    event.stopPropagation();

    let nombre = '';
    let precioFormateado = '';

    // Si el botón está en una card
    const card = boton.closest('.card');
    if (card) {
      nombre = card.querySelector('h3')?.innerText || '';
      precioFormateado = card.querySelector('p')?.innerText.trim() || '';
    } else {
      // Si el botón está dentro del modal
      const modalTitle = document.getElementById('modal-title');
      const modalPrecio = document.getElementById('modal-precio');
      nombre = modalTitle?.innerText || '';
      precioFormateado = modalPrecio?.innerText.trim() || '';
    }

    let mensaje = '';
    const textoBoton = boton.innerText.toLowerCase();

    if (textoBoton.includes('agregar')) {
      mensaje = `Quiero agregar esto: *${nombre}* que cuesta: ${precioFormateado}.`;
    } else if (textoBoton.includes('consulta')) {
      mensaje = `Vengo del catálogo y quiero hacer una consulta sobre este producto: *${nombre}*.`;
    }

    if (mensaje) {
      // 🔹 Link universal de WhatsApp
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

      // 🔹 Detectar móvil o PC
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        // En móviles: abrir directamente en la app de WhatsApp
        window.location.href = url;
      } else {
        // En PC: abrir en una nueva pestaña con WhatsApp Web
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    } else {
      console.warn('⚠️ No se generó mensaje. Texto del botón:', boton.innerText);
    }
  });
});

