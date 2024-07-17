let ingreso = false
let intentos = 0
let nombre = prompt("Ingrese su nombre")
let nota = 0

function login(){
  let contrasenia = prompt("Ingrese la contrasenia")
  return contrasenia === "123"
}

function examen(){
  nota = 0
  for (let i =0 ; i<5; i++){
    let pregunta = confirm("correcto? ")
    if(pregunta){
      nota += 2
    }
  }
  alert(nota)
  return nota
}

while(!ingreso){
  ingreso = login()
  intentos++
  if(intentos === 3){
    alert("te quedaste sin intentos")
    break
  }
}
if(ingreso){
  // ejecuto la página
  alert(`Bienvenido ${nombre}`)
  examen()
}

