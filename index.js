// Seleccionamos todos los elementos con la clase 'iconBox'
const iconBoxes = document.querySelectorAll('.iconBox');

iconBoxes.forEach(iconBox => {
  iconBox.addEventListener('click', () => {
    // Quitamos la clase 'active' de cualquier tarjeta que la tenga
    document.querySelectorAll('.tarjeta.active').forEach(activeTarjeta => {
      activeTarjeta.classList.remove('active');
    });
    
    // Añadimos la clase 'active' a la tarjeta que contiene el iconBox clicado
    const tarjeta = iconBox.closest('.tarjeta');
    tarjeta.classList.add('active');
  });
});


const toggleButton = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const menuItems = navbar.querySelectorAll("a"); // Selecciona las etiquetas dentro del menú (por ejemplo, enlaces)

// Función para cerrar el menú
function closeMenu() {
  navbar.classList.remove("active");
}

// Alterna la clase 'active' en el navbar al hacer clic en el toggle
toggleButton.addEventListener("click", (event) => {
  navbar.classList.toggle("active");
  event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
});

// Cierra el menú al hacer clic en cualquier etiqueta dentro del menú
menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

// Cierra el menú al hacer clic fuera del menú
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
    closeMenu();
  }
});

// Código para manejar el botón "showMore"
const showMoreButtons = document.querySelectorAll(".showMore");

showMoreButtons.forEach((button) => {
  const content = button.closest(".proyectBox").querySelector(".contentBox");

  button.addEventListener("click", () => {
    content.classList.toggle("active");
    button.classList.toggle("active");
  });
});


// Selecciona todos los elementos con la clase "bar80"
const barElements = document.querySelectorAll('.bar8');

// Configura el observador para cada elemento
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Agrega la clase para activar la animación
      entry.target.classList.add('crecer80');
      // Deja de observar después de activar la animación
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Ajusta el porcentaje de visibilidad
});

// Observa cada elemento con la clase "bar80"
barElements.forEach(bar => observer.observe(bar));




// Selecciona todos los elementos con la clase "bar80"
const bar2Elements = document.querySelectorAll('.bar2');

// Configura el observador para cada elemento
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Agrega la clase para activar la animación
      entry.target.classList.add('crecer20');
      // Deja de observar después de activar la animación
      observer2.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Ajusta el porcentaje de visibilidad
});

// Observa cada elemento con la clase "bar80"
bar2Elements.forEach(bar => observer2.observe(bar));




