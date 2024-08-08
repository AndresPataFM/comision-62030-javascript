// Eventos
// Un evento es una acción que ejecuta código js a partir de una acción del usuario
// Responder a las acciones del usuario, mediante js

const botoncito = document.getElementById("botoncito")
const texto = document.getElementById("texto")

// console.log(botoncito)

// botoncito.onclick = function(){
//   console.log("el boton ha sido tocado")
//   document.body.classList.toggle("darkmode")
// }
// botoncito.onclick = function(){
//   alert("auch")
// }


// botoncito.addEventListener("click", ()=>{
//   alert("No me toques")
// })

// botoncito.addEventListener("click", function(){
//   botoncito.classList.toggle("rojo")
// })


// botoncito.addEventListener("click", ()=>{
//   alert("No me toques")  
//   botoncito.classList.toggle("rojo")
// })

// no funciona al no ser por referencia
// botoncito.addEventListener("click", alert("no me toques"))


const formulario = document.getElementById("formulario")
const keylogger = document.getElementById("keylogger")
const mensaje = document.getElementById("mensaje")


console.log(formulario)
console.log(keylogger)

// keylogger.addEventListener("change", (event)=>{
//   console.log(event.target.value)
//   if(event.target.value === ""){
//     mensaje.innerText = "no deje el campo vacio"
//   } else {
//     mensaje.innerText = " "
//   }
//   event.target.value = event.target.value.toUpperCase()
// })

// formulario.addEventListener("submit", (e)=>{
//   e.preventDefault()
//   console.log(e.target[0].value)
// })

keylogger.addEventListener("keydown", (e)=>{
  console.log(e.target.value)
})