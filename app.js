const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


// list logic to make infinite scrolling possible. 
carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length -5;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
  }
});

//Button Listeners
nextBtn.addEventListener('click',()=>{
  rightSlide();
});

prevBtn.addEventListener('click',()=>{
  leftSlide();
});

// Slides 1 image to right
function rightSlide(){
  if (counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Slides 1 image to left
function leftSlide(){
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// automatically slides 1 image
// setInterval(rightSlide, 5000);
