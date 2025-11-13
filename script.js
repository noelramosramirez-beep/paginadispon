// ======= script.js =======

// Inserta automáticamente el menú en el elemento con id "menu-container"
document.addEventListener("DOMContentLoaded", function() {
  const menuHTML = `
    <header>
      <nav class="menu">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="fiestas.html">Fiestas y Eventos</a></li>
          <li><a href="atractivos.html">Atractivos</a></li>
          <li><a href="hoteles.html">Hoteles</a></li>
          <li><a href="restaurantes.html">Restaurantes</a></li>
        </ul>
      </nav>
    </header>
  `;

  // Coloca el menú dentro del contenedor correspondiente
  const container = document.getElementById("menu-container");
  if (container) {
    container.innerHTML = menuHTML;
  }

  // ===== Carrusel automático (para index.html) =====
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Cambia cada 3 segundos
  }

  // ===== Desplazamiento suave al contacto =====
  const contactoLink = document.querySelector('a[href="#contacto"]');
  if (contactoLink) {
    contactoLink.addEventListener("click", (e) => {
      e.preventDefault();
      const contactoSection = document.getElementById("contacto");
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
// --- Ventanas emergentes de atractivos ---
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".galeria-item");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-imagen");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalDesc = document.getElementById("modal-descripcion");
  const cerrar = document.querySelector(".cerrar");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = item.querySelector("img").src;
      modalTitulo.textContent = item.dataset.titulo;
      modalDesc.textContent = item.dataset.descripcion;
    });
  });

  if (cerrar) {
    cerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});