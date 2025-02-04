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
        <a href="index.html" class="a-selected">Home</a>
        <a href="menu.html">Carta</a>
        <a href="contactanos.html">Contáctanos</a>
        <a href="reservas.html" class="button">Reservar ahora</a>
      `;
  
      document.body.appendChild(newNavLinks);
    }
});
  
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  this.reset();
  const toast = document.getElementById('toast');
  toast.classList.add('mostrar');
  setTimeout(() => {toast.classList.remove('mostrar');}, 2000);
  }
);
  