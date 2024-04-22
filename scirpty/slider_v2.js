/*------------------ Slider obrazů s textem --------------------*/

const slider = document.querySelector('.sliderCHKO .polozky');
const items = document.querySelectorAll('.sliderCHKO .polozky .polozkaCHKO');
const next = document.getElementById('dalsiCHKO');
const prev = document.getElementById('predchoziCHKO');
const dots = document.querySelectorAll('.sliderCHKO .posuvneTecky li');

let active = 0;
let autoSlideInterval;

next.addEventListener('click', () => changeSlide(active + 1));
prev.addEventListener('click', () => changeSlide(active - 1));
dots.forEach((dot, index) => dot.addEventListener('click', () => changeSlide(index)));

slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();

function changeSlide(index) {
    active = (index + items.length) % items.length;
    moveSlider();
}

function moveSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[active].classList.add('active');
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => changeSlide(active + 1), 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

/*------------------ Slider obrazů s textem --------------------*/