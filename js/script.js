/* Carousel to slide between each of the images */
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

/* These are the buttons that allow the slide to change either way when a click is heard */
nextBtn.addEventListener('click',() => {
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.2s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click',() => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.2s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

/* This portion controls the cycle through back to the begining image or last image respectively */
carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }

});


/* Controls the "to top" button sending page back to the top */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}