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
    "Brochetas de ojos (x30 brochetas)": ["img/brochetas3.jpg", "img/brochetas2.jpg",],
    " Camiseta pimball + pastillitas (x30)": ["img/pimballremera.jpg","img/reversaremera.jpg","img/r1.jpg","img/r2.jpg"],
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
    "Gomitas blandas Batman (30u)": ["img/batman1.jpg","img/batman2.jpg"],
    "Monedas de chocolate (x250u)": ["img/monedas1.jpg","img/monedas2.jpg"],
    "Gomitas 👁️👄👁️ (30u)": ["img/gomitasoh.jpg","img/gomitasoh1.jpg"],
    "Gomitas blandas Kuromy (30u)": ["img/gomitasblandas7.jpg","img/gomitasblandas71.jpg"],
    "Chupetines Capibara (30u)": ["img/chupetincapibara1.jpg","img/chupetincapibara2.jpg"],
    "Chupetines con forma de conejo (x30)": ["img/conejos1.jpg","img/conejos3.jpg"],
    "Chupetines con forma de unicornio (x30)":["img/unicornio1.jpg","img/unicornio2.jpg","img/unicornio3.jpg"],
    "Mechas magicas (30u)":["img/mechasMario2.jpg", "img/mecha.jpg",],
    "Gomitas blandas Super Mario (30u)": ["img/supermario1.jpg","img/supermario2.jpg"],
    " Saca lenguas (30u)": ["img/sacalenguas1.jpg","img/sacalenguas2.jpg"],

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
// 🔍 ZOOM EN IMAGEN DEL MODAL
// ========================
const modalImg = document.getElementById("modal-img");
if (modalImg) {
  modalImg.onclick = () => {
    modalImg.classList.toggle("zoomed");
  };
}



  window.onclick = e => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.classList.remove("zoomed");
    }
  };



// ========================
// 🛒 CARRITO COMPLETO CON MODAL, CIERRE Y WHATSAPP
// ========================
document.addEventListener("DOMContentLoaded", () => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let carritoMostrado = false;

  const numero = "542236010443"; // tu número de WhatsApp
  const carritoBtn = document.getElementById("carrito-btn");
  const carritoDropdown = document.getElementById("carrito-dropdown");
  const carritoItemsContainer = document.getElementById("carrito-items");
  const carritoCount = document.getElementById("carrito-count");
  const vaciarBtn = document.getElementById("vaciar-carrito");
  const carritoTotal = document.getElementById("carrito-total");

  // Fondo oscuro
  const fondoModal = document.createElement("div");
  fondoModal.id = "fondo-carrito";
  Object.assign(fondoModal.style, {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "none",
    zIndex: "998"
  });
  document.body.appendChild(fondoModal);

  Object.assign(carritoDropdown.style, {
    zIndex: "999",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 0 15px rgba(0,0,0,0.4)",
    borderRadius: "12px",
    background: "#fff",
    display: "none",
    padding: "15px",
    width: "300px",
  });

  // Funciones de precio
  const parsePrecio = p => parseFloat(p.replace(/[^\d,]/g,"").replace(/\./g,"").replace(",","."))||0;
  const calcularTotal = () => carrito.reduce((a,i)=>a+parsePrecio(i.precio)*i.cantidad,0);

  function actualizarCarrito() {
    carritoItemsContainer.innerHTML = carrito.length === 0
      ? "<p class='carrito-vacio'>🛍️ Tu carrito está vacío</p>"
      : carrito.map(i=>`
        <div class='carrito-item'>
          <strong>${i.nombre}</strong> - ${i.precio}<br>
          <button class='cantidad-btn restar' data-nombre='${i.nombre}'>-</button>
          ${i.cantidad}
          <button class='cantidad-btn sumar' data-nombre='${i.nombre}'>+</button>
          <button class='carrito-eliminar' data-nombre='${i.nombre}'>✖</button>
        </div>
      `).join("");

    const total = calcularTotal();
    carritoTotal.innerHTML = `<strong>Total: $${total.toLocaleString("es-AR")}</strong>`;
    carritoCount.textContent = carrito.reduce((a,i)=>a+i.cantidad,0);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // Mostrar/ocultar carrito
  carritoBtn?.addEventListener("click",()=>{
    const visible = carritoDropdown.style.display==="block";
    carritoDropdown.style.display = visible?"none":"block";
    fondoModal.style.display = visible?"none":"block";
  });

  fondoModal.addEventListener("click",()=>{
    carritoDropdown.style.display="none";
    fondoModal.style.display="none";
  });

  // Botón cerrar
  document.getElementById("cerrar-carrito")?.addEventListener("click",()=>{
    carritoDropdown.style.display="none";
    fondoModal.style.display="none";
  });

  // Vaciar
  vaciarBtn?.addEventListener("click",()=>{carrito=[];actualizarCarrito();});

  // Botones agregar/restar/eliminar
  document.addEventListener("click",e=>{
    if(e.target.classList.contains("sumar")){
      const item=carrito.find(p=>p.nombre===e.target.dataset.nombre);
      if(item)item.cantidad++;
    }
    if(e.target.classList.contains("restar")){
      const item=carrito.find(p=>p.nombre===e.target.dataset.nombre);
      if(item){
        item.cantidad>1?item.cantidad--:carrito=carrito.filter(p=>p.nombre!==item.nombre);
      }
    }
    if(e.target.classList.contains("carrito-eliminar")){
      carrito=carrito.filter(p=>p.nombre!==e.target.dataset.nombre);
    }
    actualizarCarrito();
  });

  // Agregar al carrito o consulta
  document.querySelectorAll(".btn-carrito, .btn-consulta, #modal-agregar, #modal-consulta")
  .forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.stopPropagation();
      const card = btn.closest(".card");
      let nombre = card?.querySelector("h3")?.innerText || document.getElementById("modal-title")?.innerText;
      let precio = card?.querySelector("p")?.innerText || document.getElementById("modal-precio")?.innerText;
      const texto = btn.innerText.toLowerCase();

      if(texto.includes("agregar")){
        const ex = carrito.find(p=>p.nombre===nombre);
        ex?ex.cantidad++:carrito.push({nombre,precio,cantidad:1});
        actualizarCarrito();
        if(!carritoMostrado){carritoDropdown.style.display="block";fondoModal.style.display="block";carritoMostrado=true;}
      }else if(texto.includes("consulta")){
        const msg=`👋 Hola, quiero consultar sobre *${nombre}*.`;
        window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`,"_blank");
      }
    });
  });

  // Enviar pedido por WhatsApp
  document.getElementById("enviar-carrito")?.addEventListener("click",()=>{
    if(carrito.length===0){alert("Tu carrito está vacío 🛒");return;}
    let msg="🛍️ *Nuevo pedido desde el catálogo:*\n\n";
    let total=0;
    carrito.forEach((i, index)=>{
  const p=parsePrecio(i.precio);
  total += p * i.cantidad;
  msg += `${index + 1}. *${i.nombre}* — ${i.cantidad} x ${i.precio}\n`;
});

    msg+=`\n💰 *Total:* $${total.toLocaleString("es-AR")}\n\n📦 Quiero continuar con este pedido y calcular el envío a mi ciudad.`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`,"_blank");
  });

  actualizarCarrito();
});
