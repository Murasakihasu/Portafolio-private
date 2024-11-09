const iconBoxes = document.querySelectorAll('.iconBox');

iconBoxes.forEach(iconBox => {
  iconBox.addEventListener('click', () => {
    document.querySelectorAll('.tarjeta.active').forEach(activeTarjeta => {
      activeTarjeta.classList.remove('active');
    });
    const tarjeta = iconBox.closest('.tarjeta');
    tarjeta.classList.add('active');
  });
});


const toggleButton = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const menuItems = navbar.querySelectorAll("a");

function closeMenu() {
  navbar.classList.remove("active");
}

toggleButton.addEventListener("click", (event) => {
  navbar.classList.toggle("active");
  event.stopPropagation();
});

menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
    closeMenu();
  }
});


const showMoreButtons = document.querySelectorAll(".showMore");

showMoreButtons.forEach((button) => {
  const content = button.closest(".proyectBox").querySelector(".contentBox");

  button.addEventListener("click", () => {
    content.classList.toggle("active");
    button.classList.toggle("active");
  });
});


const barElements = document.querySelectorAll('.bar8');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('crecer80');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 
});

barElements.forEach(bar => observer.observe(bar));


const bar2Elements = document.querySelectorAll('.bar2');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('crecer20');
      observer2.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 
});

bar2Elements.forEach(bar => observer2.observe(bar));




