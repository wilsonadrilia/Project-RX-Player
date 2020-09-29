
const navDrop = document.querySelector('.nav-drop');
const nav = document.querySelector('nav ul');

navDrop.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

var slideIndex = 0;
var slideIndexl = 0;
var slideIndexr = 0;
showSlides();
function showSlides() {
  var i;
  var slidesl = document.getElementsByClassName("mySlidesl");
  var slides = document.getElementsByClassName("mySlides");
  var slidesr = document.getElementsByClassName("mySlidesr");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slidesl.length; i++) {
    slidesl[i].style.display = "none";
  }
  for (i = 0; i < slidesr.length; i++) {
    slidesr[i].style.display = "none";
  }
  slideIndexl++;
  slideIndex++;
  slideIndexr++;
  if (slideIndexr > slidesr.length) {slideIndexr = 1}
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndexl > slidesl.length) {slideIndexl = 1}
  slides[slideIndex-1].style.display = "block";
  slidesl[slideIndexl-1].style.display = "block";
  slidesr[slideIndexr-1].style.display = "block";
  setTimeout(showSlides, 1600); // Change image every 2 seconds
}