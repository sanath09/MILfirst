var slideIndex = 1;
showSlidesVerti(slideIndex);

function plusSlidesVerti(n) {
  showSlidesVerti(slideIndex += n);
}

function currentSlide(n) {
  showSlidesVerti(slideIndex = n);
}

function showSlidesVerti(n) {
  var i;
  var slides = document.getElementsByClassName("recentTrans");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}