'use strict';

const switcher = document.querySelector('.btn');
const icon = switcher.querySelector('img');
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


switcher.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    icon.src = document.body.classList.contains('light-theme')
        ? './resources/dark_mode.png'
        : './resources/light_mode.png';

    console.log(icon.src);
});

if (carousel && prevBtn && nextBtn) {
  const slides = carousel.querySelectorAll('.slide');
  let currentSlide = 0;

  const showSlide = (index) => {
    currentSlide = Math.max(0, Math.min(index, slides.length - 1));
    carousel.scrollLeft = slides[currentSlide].offsetLeft;
  };

  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
}