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