document.getElementById('hamburger-icon').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
  
    if (navLinks) {
      // Si ya existe, solo alternamos la visibilidad
      navLinks.classList.toggle('show');
    } else {
      // Si no existe, lo creamos y lo agregamos
      const newNavLinks = document.createElement('div');
      newNavLinks.classList.add('nav-links', 'show'); // Se agrega la clase 'show' directamente
  
      newNavLinks.innerHTML = `
        <a href="index.html" class="a-selected">Delhi Dreams</a>
        <a href="menu.html">Carta</a>
        <a href="contactanos.html">Contáctanos</a>
        <a href="reservas.html" class="button">Reservar ahora</a>
      `;
  
      document.body.appendChild(newNavLinks);
    }
});
  
const form =  document.querySelector('.contact-form');

if(form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    this.reset();
    const toast = document.getElementById('toast');
    toast.classList.add('mostrar');
    setTimeout(() => {toast.classList.remove('mostrar');}, 2000);
    }
  );
};

const btnSubir = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
      btnSubir.style.display = "flex";
  } else {
      btnSubir.style.display = "none";
  }
});
btnSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

