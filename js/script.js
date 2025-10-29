// ========================
// MODAL DE PRODUCTOS
// ========================
const modal = document.getElementById('modal'); 
if (modal) {
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = modal.querySelector('.modal-content');

  const prevBtn = document.createElement('div');
  const nextBtn = document.createElement('div');
  const contador = document.createElement('span');

  prevBtn.textContent = '<';
  nextBtn.textContent = '>';
  prevBtn.classList.add('prev');
  nextBtn.classList.add('next');
  contador.classList.add('contador');

  modalContent.appendChild(prevBtn);
  modalContent.appendChild(nextBtn);
  modalContent.appendChild(contador);

  const imagenesProducto = {
    "Alcancias con gelatinas": ["img/alcancias1.jpg","img/alcancias2.jpg","img/alcancias3.jpg"],
    "Chupetines Merlina (x30u)": ["img/merlina1.jpg","img/merlina2.jpg","img/merlina3.jpg","img/merlina4.jpg"],
    "Chupetin con polvo acido Brain(30u)": ["img/chupetinBrain.jpg","img/cajaBrain.jpg"],
    "Chupetin con polvo acido skull (30u)": ["img/chupetinConAcido.jpg","img/cajaChupetinAcido.jpg"],
    "Autos de carrera con chicles(30u)": ["img/carrera.jpg","img/reversacarrera.jpg"],
    "Brochetas de ojos (x30 brochetas)": ["img/brochetas3.jpg","img/brochetas.jpg"],
    "Remera pimball + chicles(x30)": ["img/pimballremera.jpg","img/reversaremera.jpg"],
    "Celu + chicles(x30)": ["img/pimballip.jpg","img/reversaip.jpg"],
    "Chupetin Calabaza conpolvo ácido (30u)": ["img/chupetinCalabaza.jpg","img/chupetincalabaza1.jpg","img/chupetincalabaza2.jpg"],
    "Chupetines con formas (x30) ": ["img/chupetinesconformas1.jpg","img/chupetinesconformas2.jpg"],
    "🎃 Halloween chupetines (30u)": ["img/halloween1.jpg","img/halloween2.jpg","img/halloween3.jpg","img/halloween4.jpg"],
    "Gelatinas con formas (30u)": ["img/gelatinaDiferentesSabores4.jpg","img/gelatinaDiferentesSabores3.jpg","img/gelatinaDiferentesSabores2.jpg","img/gelatinaDiferentesSabores5.jpg","img/gelatinaDiferentesSabores1.jpg"],
    "Chupetines de Corona con LED (x30u)": ["img/chupetinesconled1.jpg","img/corona2.jpg"],
    "Gomitas cara (30u)": ["img/gomitablandaCara3.jpg","img/gomitablandaCara2.jpg"],
    "Gomitas blandas Selección Argentina (30u)": ["img/seleccion.jpg","img/seleccion1.jpg","img/seleccion2.jpg"],
    "Cool Mint sabores frutales (x30u)": ["img/coolmint.jpg","img/coolmint2.jpg"],
    "Trompetas con chupetin y sonido (30u)": ["img/trompeta1.jpg","img/trompetas.jpg"],
    "Sorpresa capibara + chicles (x30u)": ["img/sorpresacapibara1.jpg","img/sorpresacapibara2.jpg"],
    "Sorpresa plantas vs Zombies y chicles (x30u)": ["img/sorpresaplant2.jpg","img/sorpresaplant.jpg"],
    "Gomitas blandas Frutillas (30u)": ["img/frutilla1.jpg","img/frutilla.jpg"],
    "Gomitas blandas Fantasmita (30u)": ["img/fantasmitas.jpg","img/fantasmitas2.jpg"],
    "Monedas de chocolate (x250u)": ["img/monedas1.jpg","img/monedas2.jpg"],
    "Gomitas 👁️👄👁️ (30u)": ["img/gomitasoh.jpg","img/gomitasoh1.jpg"],
    "Gomitas blandas Kuromy (30u)": ["img/gomitasblandas7.jpg","img/gomitasblandas71.jpg"],
    "Chupetines Capibara (30u)": ["img/chupetincapibara1.jpg","img/chupetincapibara2.jpg"],
    "Chupetines con forma de conejo (x30)": ["img/conejos1.jpg","img/conejos3.jpg"],
    "Chupetines con forma de unicornio (x30)":["img/unicornio1.jpg","img/unicornio2.jpg","img/unicornio3.jpg"]
  };

  let currentImages = [];
  let currentIndex = 0;
  let currentTitle = "";

  function abrirModal(card) {
    const img = card.querySelector('img');
    const title = card.querySelector('h3');
    const price = card.querySelector('p');

    currentTitle = title ? title.textContent : "Producto";
    currentImages = imagenesProducto[currentTitle] || [img?.src || ''];
    currentIndex = 0;

    modal.style.display = 'flex';
    actualizarModal();

    modalTitle.textContent = currentTitle;
    document.getElementById('modal-precio').textContent = price ? price.textContent : '';

    const modalAgregarBtn = document.getElementById('modal-agregar');
    const modalConsultaBtn = document.getElementById('modal-consulta');
    if (modalAgregarBtn) {
      modalAgregarBtn.dataset.producto = currentTitle;
      modalAgregarBtn.dataset.precio = price ? price.textContent : '';
    }
    if (modalConsultaBtn) {
      modalConsultaBtn.dataset.producto = currentTitle;
      modalConsultaBtn.dataset.precio = price ? price.textContent : '';
    }
  }

  function actualizarModal() {
    modalImg.src = currentImages[currentIndex] || '';
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
    modalImg.classList.remove('zoomed');
  }

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

  modalImg.onclick = () => {
    if (currentImages.length > 1) {
      currentIndex = (currentIndex + 1) % currentImages.length;
      actualizarModal();
      return;
    }
    modalImg.classList.toggle('zoomed');
  };

  const closeBtn = modal.querySelector('.close');
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = 'none';
      modalImg.classList.remove('zoomed');
    };
  }

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.classList.remove('zoomed');
    }
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const titulo = card.querySelector('h3')?.textContent || '';
    const cantidadImgs = imagenesProducto[titulo]?.length || 1;
    if (cantidadImgs > 1) {
      const overlay = document.createElement('span');
      overlay.className = 'mas-fotos';
      overlay.textContent = `+${cantidadImgs - 1} fotos`;
      card.appendChild(overlay);
    }
    card.addEventListener('click', (ev) => {
      if (ev.target.closest('button')) return;
      abrirModal(card);
    });
  });
}

// ========================
// BUSCADOR DE PRODUCTOS
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const cards = document.querySelectorAll(".card");
  const noResults = document.getElementById("no-results");

  if (!searchInput || cards.length === 0) return;

  function filtrarProductos() {
    const filter = searchInput.value.toLowerCase().trim();
    let matches = 0;

    cards.forEach(card => {
      const title = card.querySelector("h3")?.textContent.toLowerCase() || '';
      const desc = card.querySelector("p")?.textContent.toLowerCase() || "";

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

  searchInput.addEventListener("input", filtrarProductos);
  searchInput.addEventListener("keyup", filtrarProductos);
});

// ========================
// CARRITO (con persistencia)
// ========================
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const carritoBtn = document.getElementById("carrito-btn");         
const carritoDropdown = document.getElementById("carrito-dropdown"); 
const carritoItemsContainer = document.getElementById("carrito-items");
const carritoCount = document.getElementById("carrito-count");
const vaciarBtn = document.getElementById("vaciar-carrito");
const cerrarcarrito = document.getElementById("cerrar-carrito");

function actualizarCarrito() {
  if (!carritoItemsContainer) return;
  carritoItemsContainer.innerHTML = "";
  if (carrito.length === 0) {
    carritoItemsContainer.innerHTML = "<p>Tu carrito está vacío 🛍️</p>";
  } else {
    carrito.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("carrito-item");
      div.innerHTML = `
        <div class="carrito-item-info">
          <span class="carrito-nombre">${item.nombre}</span>
          <span class="carrito-precio">${item.precio}</span>
          <span class="carrito-cantidad">x${item.cantidad}</span>
        </div>
        <button class="carrito-eliminar" data-nombre="${item.nombre}">❌</button>
      `;
      carritoItemsContainer.appendChild(div);
    });
  }
  if (carritoCount) carritoCount.textContent = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.addEventListener("click", e => {
  if (e.target.matches(".carrito-eliminar")) {
    const nombre = e.target.dataset.nombre;
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
  }
});

if (vaciarBtn) {
  vaciarBtn.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
  });
}

if (cerrarcarrito) {
  cerrarcarrito.addEventListener("click", () => {
    if (carritoDropdown) carritoDropdown.style.display = "none";
  });
}

if (carritoBtn) {
  carritoBtn.addEventListener("click", () => {
    if (carritoDropdown) {
      carritoDropdown.style.display = carritoDropdown.style.display === "block" ? "none" : "block";
    }
  });
}

// ========================
// ENLACE A WHATSAPP (AGREGAR Y CONSULTA)
// ========================
const numero = "542236010443";
const botones = document.querySelectorAll('.btn-carrito, .btn-consulta, #modal-agregar, #modal-consulta');

botones.forEach(boton => {
  boton.addEventListener('click', (event) => {
    event.stopPropagation();

    let nombre = '';
    let precioFormateado = '';

    const card = boton.closest('.card');
    if (card) {
      nombre = card.querySelector('h3')?.innerText || '';
      precioFormateado = card.querySelector('p')?.innerText.trim() || '';
    } else {
      const modalTitle = document.getElementById('modal-title');
      const modalPrecio = document.getElementById('modal-precio');
      nombre = modalTitle?.innerText || '';
      precioFormateado = modalPrecio?.innerText.trim() || '';
    }

    let mensaje = '';
    const textoBoton = boton.innerText.toLowerCase();

    if (textoBoton.includes('agregar')) {
      carrito.push({ nombre, precio: precioFormateado, cantidad: 1 });
      actualizarCarrito();
      mensaje = `Quiero agregar esto: *${nombre}* que cuesta: ${precioFormateado}.`;
    } else if (textoBoton.includes('consulta')) {
      mensaje = `Vengo del catálogo y quiero hacer una consulta sobre este producto: *${nombre}*.`;
    }

    if (mensaje) {
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = url;
      } else {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  });
});

// Inicializar carrito al cargar
actualizarCarrito();
