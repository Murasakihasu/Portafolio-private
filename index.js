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

  toggleButton.addEventListener("click", () => {
    // Alterna la clase 'active' en el navbar al hacer clic en el toggle
    navbar.classList.toggle("active");
  });


// Selecciona todos los elementos con la clase 'showMore'
const showMoreButtons = document.querySelectorAll(".showMore");

showMoreButtons.forEach((button) => {
  // Para cada botón, selecciona su respectivo contentBox
  const content = button.closest(".proyectBox").querySelector(".contentBox");

  // Agrega el evento click a cada botón individualmente
  button.addEventListener("click", () => {
    // Alterna la clase 'active' en content y en el botón
    content.classList.toggle("active");
    button.classList.toggle("active");
  });
});



document.querySelectorAll(".sliderBox").forEach((sliderBox) => {
  const slides = sliderBox.querySelectorAll(".card");
  const stars = sliderBox.querySelectorAll(".stars .star");
  let currentIndex = 0;

  function updateSlider() {
      // Desplaza las tarjetas dentro del slider correspondiente
      slides.forEach((slide, index) => {
          slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      });

      // Actualiza la visibilidad de las estrellas
      stars.forEach((star, index) => {
          if (index <= currentIndex) {
              star.classList.add("visible");
          } else {
              star.classList.remove("visible");
          }
      });
  }

  function goToNextSlide() {
      if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateSlider();
      }
  }

  function goToPreviousSlide() {
      if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
      }
  }

  // Configura los eventos de deslizamiento para dispositivos móviles y de escritorio
  let startX = 0;
  let isDragging = false;

  function startDrag(e) {
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      isDragging = true;
  }

  function endDrag(e) {
      if (!isDragging) return;
      const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const diffX = startX - endX;

      if (diffX > 50) goToNextSlide();
      else if (diffX < -50) goToPreviousSlide();

      isDragging = false;
  }

  // Eventos específicos para cada sliderBox
  const slider = sliderBox.querySelector(".slider");
  slider.addEventListener("touchstart", startDrag);
  slider.addEventListener("touchend", endDrag);
  slider.addEventListener("mousedown", startDrag);
  slider.addEventListener("mouseup", endDrag);
  slider.addEventListener("mouseleave", () => (isDragging = false));

  // Inicializa el primer estado del slider
  updateSlider();
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




