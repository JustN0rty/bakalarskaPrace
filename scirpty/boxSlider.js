/*----------------------- Slider boxů  -------------------------*/

if (window.matchMedia("(max-width: 1200px)").matches) {
    let slideIndex = 2;
    showSlide(slideIndex);

    let autoSlide;
        
    function changeSlide(n) {
        clearInterval(autoSlide);
        autoSlide = setInterval(function() {
            changeSlide(1);
        }, 5000);
        showSlide(slideIndex += n);
    }

    function showSlide(n) {
        let i;
        let slides = document.getElementsByClassName("box");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "flex";  
    }

    autoSlide = setInterval(function() {
        changeSlide(1);
    }, 5000);

    document.querySelector('.boxy').addEventListener('mouseenter', function() {
        clearInterval(autoSlide);
    });

    document.querySelector('.boxy').addEventListener('mouseleave', function() {
        autoSlide = setInterval(function() {
            changeSlide(1);
        }, 5000);
    });
}

/*----------------------- Slider boxů  -------------------------*/