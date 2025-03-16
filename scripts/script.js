const botonDesplegable = document.querySelector('nav li:nth-child(2)'); // Ajusta el selector según sea necesario
const menuDesplegable = document.querySelector('.dropdown');

// Evento para mostrar/ocultar el menú desplegable al hacer clic en el botón
botonDesplegable.addEventListener('click', function(event) {
  event.stopPropagation(); // Evita que el evento se propague al documento
  if (menuDesplegable.style.display === 'block') {
    menuDesplegable.style.display = 'none';
  } else {
    menuDesplegable.style.display = 'block';
  }
});

// Evento para ocultar el menú desplegable al hacer clic fuera del mismo
document.addEventListener('click', function(event) {
  if (!botonDesplegable.contains(event.target) && !menuDesplegable.contains(event.target)) {
    menuDesplegable.style.display = 'none';
  }
});

// Evento para mostrar/ocultar el menú desplegable según el tamaño de la ventana
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    menuDesplegable.style.display = 'block';
  } else {
    menuDesplegable.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('header .photo');
    const navUl = document.querySelector('header nav ul');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    logo.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        adjustTextColors();
    });

    function adjustTextColors() {
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span');
        textElements.forEach(element => {
            if (document.body.classList.contains('dark-mode')) {
                element.style.color = '#ffffff';
            } else {
                element.style.color = '#000000';
            }
        });
    }

    adjustTextColors();
});