// El context menu es el menu que se desplega con right click 

const texto = document.querySelector("p")

texto.addEventListener("contextmenu", evento=>{
  evento.preventDefault() // previene que se abra al iniciar el evento
  alert("Este es contenido protegido")
  return false //es false asi no se abre al finalizar el evento
})