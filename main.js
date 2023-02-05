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

/* * * * * * * * *
  Envio formulario
* * * * * * * * */

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

/* * * * * * * * *
  Envio formulario
  
* * * * * * * * * */

let button = document.getElementById('submit-email')
button.addEventListener('click', function(){
    enviar()
}
)

function validarCorreo() {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    let email = document.getElementById('email')

    if (email.value.match(validRegex)) {
  
  
      email.focus();
  
      return true;
  
    } else {
  
      alert("Correo invalido!");
  
      email.focus();
  
      return false;
  
    }
  
  }

function enviar(){
    let validado = validarCorreo()
    if (validado) {
        let nombre = document.getElementById('nombre')
        let mensaje = document.getElementById('mensaje')
        alert(`${nombre.value}, el mensaje se ha enviado con exito: "${mensaje.value}"`)
    }
}
