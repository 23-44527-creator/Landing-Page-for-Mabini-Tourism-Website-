// Toggle mobile menu
const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Smooth scroll (extra polish)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple image carousel (auto-slide)
let currentSlide = 0;
const slides = document.querySelectorAll('.image-card');
setInterval(() => {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
  currentSlide = (currentSlide + 1) % slides.length;
}, 4000);
