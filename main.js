let slideIndex = 1;
mostrarImg(slideIndex);

// Next/previous controls
function proxImg(n) {
  mostrarImg(slideIndex += n);
}

// Thumbnail image controls
function imgActual(n) {
  mostrarImg(slideIndex = n);
}

function mostrarImg(n) {
  let i;
  let slides = document.getElementsByClassName("misFotos");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}