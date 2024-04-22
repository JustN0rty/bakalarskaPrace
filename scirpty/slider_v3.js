/*------------------ Slider obrazů s textem --------------------*/

const landingPageSlider = document.querySelector('.landingPageSlider .polozkySlideru');
const landingPageItems = document.querySelectorAll('.landingPageSlider .polozkySlideru .polozkaSlideru');
const landingPageDots = document.querySelectorAll('.landingPageSlider .posuvneTeckySlideru li');

let activeIndex = 0;
let autoLandingPageSlideInterval;

landingPageDots.forEach((dot, index) => dot.addEventListener('click', () => changeLandingPageSlide(index)));

startAutoLandingPageSlide();

function changeLandingPageSlide(index) {
    activeIndex = (index + landingPageItems.length) % landingPageItems.length;
    clearInterval(autoLandingPageSlideInterval);
    moveLandingPageSlider();
    startAutoLandingPageSlide();
}

function moveLandingPageSlider() {
    landingPageSlider.style.left = -landingPageItems[activeIndex].offsetLeft + 'px';
    updateLandingPageDots();
}

function updateLandingPageDots() {
    landingPageDots.forEach(dot => dot.classList.remove('active'));
    landingPageDots[activeIndex].classList.add('active');
}

function startAutoLandingPageSlide() {
    autoLandingPageSlideInterval = setInterval(() => changeLandingPageSlide(activeIndex + 1), 5000);
}

/*------------------ Slider obrazů s textem --------------------*/
