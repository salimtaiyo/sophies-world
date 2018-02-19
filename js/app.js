var sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Resetting
//while loop
function reset() {
  var i =0; 
  while( i < sliderImages.length){
    sliderImages[i].style.display = 'none';
    i++;
  }
}

// intializing the slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// the previous slider
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// the next slider 
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();