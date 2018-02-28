
//Set up feature image carousel. 
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('main');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1;}
  x[slideIndex-1].style.display = 'block';
  // setTimeout(carousel, 5000); // Change image every 5 seconds
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('main');
  if (n > x.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex-1].style.display = 'block';
}

// Set carousel to start working automatically.
let carouselTicket = setInterval(carousel, 3000);

var imageHover = document.getElementById('imageHover');

// When mouse hovers over image stop the interval.
imageHover.addEventListener('mouseenter', function( event ) {
  clearInterval(carouselTicket);
});

// When mouse leaves image restart the interval. 
imageHover.addEventListener('mouseleave', function( event ) {
  carouselTicket = setInterval(carousel, 3000);
});

