/*------------ landing page slider s miniaturami ---------------*/

let nextDom = document.getElementById('dalsi');
let prevDom = document.getElementById('predchozi');

let carouselDom = document.querySelector('.landingPage');
let SliderDom = carouselDom.querySelector('.landingPage .obsah');
let thumbnailBorderDom = document.querySelector('.landingPage .miniatury');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.landingPage .casovac');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 10000;

nextDom.onclick = function(){
    showSlider('dalsi');    
}

prevDom.onclick = function(){
    showSlider('predchozi');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    dalsi.click();
}, timeAutoNext)

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.landingPage .obsah .item');
    let thumbnailItemsDom = document.querySelectorAll('.landingPage .miniatury .item');
    
    if(type === 'dalsi'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('dalsi');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('predchozi');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('dalsi');
        carouselDom.classList.remove('predchozi');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        dalsi.click();
    }, timeAutoNext)
}

/*------------ landing page slider s miniaturami ---------------*/