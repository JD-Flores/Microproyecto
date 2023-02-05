/* * * * * * * * * * *

Carrusel de imagenes

* * * * * * * * * * */

let slideIndex = 1;
mostrarImg(slideIndex);

function proxImg(n) {
  mostrarImg(slideIndex += n);
}

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
const skillsJson = {
    'HTML': "300px",
    'CSS' : "250px",
    'Javascript' : "200px",
    'Java' : "200px",
    'Python' : "200px",
}


let chart = document.getElementById("skills-chart")

function createChart(chart){ 
  let temp;
  let j=0;
  const claves = Object.keys(skillsJson);

  for (let i in skillsJson) {
    temp = document.createElement("p");
    temp.className = "skills-yaxis";
    temp.innerText = claves[j]
    chart.appendChild(temp)

    temp = document.createElement("span");
    temp.className = "skills-bar";
    temp.style.width = skillsJson[claves[j]]
    console.log(temp)
    chart.appendChild(temp)
    j++
  }
}
createChart(chart)