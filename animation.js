//Subtle Animations

//Animation transition RIGHT
let timer = 0;
window.addEventListener('load', (event) => {
  let intersectionObserver = new IntersectionObserver(entries => { 
   entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() { entry.target.classList.add('animationDisplay'); }, timer)
        intersectionObserver.unobserve(entry.target) 
      }
    });
  });

  document.querySelectorAll('.animateRight').forEach(obj =>{
    intersectionObserver.observe(obj);
  });
});


//Animation transition LEFT
window.addEventListener('load', (event) => {
  let intersectionObserver = new IntersectionObserver(entries => { 
   entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() { entry.target.classList.add('animationDisplay'); }, timer)
        intersectionObserver.unobserve(entry.target)
      }
    });
  });

  document.querySelectorAll('.animateLeft').forEach(obj =>{
    intersectionObserver.observe(obj);
  });
});

//Animation transition BOTTOM
window.addEventListener('load', (event) => {
  let intersectionObserver = new IntersectionObserver(entries => { 
   entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() { entry.target.classList.add('animationDisplay'); }, timer)
        intersectionObserver.unobserve(entry.target)
      }
    });
  });

  document.querySelectorAll('.animateBottom').forEach(obj =>{
    intersectionObserver.observe(obj);
  });
});