//carousel.js

// carousel.js
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${i * 100}%)`; 
    });
}

// Initial slide display
showSlide(currentIndex);

// Example: Basic navigation (you can improve this with buttons)
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex);
}, 3000); // Change slide every 3 seconds

