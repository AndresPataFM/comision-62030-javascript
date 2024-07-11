/* let dni = ""
do{
  dni = prompt ("Ingrese su DNI")
} while (dni === "" || dni === null)
// ========
let nombre = ""
do{
  nombre = prompt ("Ingrese su nombre")
} while (nombre === "" || nombre === null)
// ========
let apellido = ""
do{
  apellido = prompt ("Ingrese su apellido")
} while (apellido === "" || apellido === null)
 */
/* function ingresarDNI(){
  let dni = ""
  do{
    dni = prompt ("Ingrese su DNI")
  } while (dni === "" || dni === null)
  alert(`Su DNI es: ${dni}`)
}
ingresarDNI() */
/* 
function ingresarDato(tipoDato){
  let dato = ""
  do{
    dato = prompt (`Ingrese su ${tipoDato}. Se le pedirá nuevamente que ingrese el dato sí lo deja vacío o apreta cancelar.`)
  } while (dato === "" || dato === null)
  alert(`Su ${tipoDato} es: ${dato}`)
}
ingresarDato("DNI")
ingresarDato("nombre")
ingresarDato("apellido") 
*/
/* function ingresarDato(tipoDato){
  let dato = ""
  do{
    dato = prompt (`Ingrese su ${tipoDato}. Se le pedirá nuevamente que ingrese el dato sí lo deja vacío o apreta cancelar.`)
  } while (dato === "" || dato === null)
  alert(`Su ${tipoDato} es: ${dato}`)
  return dato
}

const dni = ingresarDato("DNI")
const nombre = ingresarDato("nombre")
const apellido = ingresarDato("apellido")

alert(`Sus datos son los siguientes: \n DNI: ${dni} \n Nombre: ${nombre} \n Apellido: ${apellido}`) */

// console.log("hola")
// console.log("hola")
// console.log("hola")
// console.log("hola")
// console.log("hola")
// console.log("hola")
// console.log("hola")
// console.log("hola")
// console.log("hola")
// console.log("hola")
// console.log("hola")
// for(let i=0; i<10; i++){
//   console.log("hola")
// }
/* 
let numeroUsuario = prompt("Adivine que número elegí, ingrese un número del 1 al 10.");
let numeroParseado = Number(numeroUsuario);
let numeroProgramador = 4;
if(numeroParseado === numeroProgramador){
  alert("Número correcto")
} else if(numeroParseado < 1 || numeroParseado>10 || isNaN(numeroParseado)){
  alert("Ingrese un número válido")
} else {
  alert("Número incorrecto")
}
*/

// function adivinarNumero(){
//   let numeroUsuario = prompt("Adivine que número elegí, ingrese un número del 1 al 10.");
//   let numeroParseado = Number(numeroUsuario);
//   let numeroProgramador = 4;
//   if(numeroParseado === numeroProgramador){
//     alert("Número correcto")
//   } else if(numeroParseado < 1 || numeroParseado>10 || isNaN(numeroParseado)){
//     alert("Ingrese un número válido")
//   } else {
//     alert("Número incorrecto")
//   }
// }

// adivinarNumero()

function restar (primerNumero, segundoNumero){
  console.log(primerNumero)
  console.log(segundoNumero)
  const resta = primerNumero - segundoNumero
  return resta
}

// console.log(restar(5, 3))
// console.log(restar(5, "hola", true))


function mostrar(numero, palabra){
  console.log("Su número es", numero)
  console.log("Su palabra es", palabra)
}
// mostrar(7, "hola")
// mostrar("hola", 7)

// funciona x hoisting
// console.log(dividir(8,2)) // Funciona pero es mala práctica
function dividir(primerNumero=1, segundoNumero=1){
  console.log(primerNumero)
  console.log(segundoNumero)
  return primerNumero / segundoNumero
  // Esto de aca no funca porque el return frena la ejecución de la función
  console.log(primerNumero / segundoNumero) 
  return 
}

// console.log(dividir())
// console.log(dividir(7))
// console.log(dividir(8,2))
// console.log(dividir(,2))

//  Función anonima
const dividirAnonimo = function(primerNumero=1, segundoNumero=1){
  console.log(primerNumero)
  console.log(segundoNumero)
  return primerNumero / segundoNumero
}

// console.log(division(4,2))
// console.log(typeof division)

// division = 10/5

// console.log(division) 
// console.log(typeof division)

const dividirFlecha = (primerNumero=1, segundoNumero=1)=>{
  console.log(primerNumero)
  console.log(segundoNumero)
  return primerNumero / segundoNumero
}
const dividirFlecha2 = (primerNumero=1, segundoNumero=1)=>{
  return primerNumero / segundoNumero
}

// return implicito
const dividirFlecha3 = (primerNumero=1, segundoNumero=1)=>primerNumero / segundoNumero

// console.log(dividirFlecha3(6/3))

function saludar (nombre){
  return `Hola ${nombre}`
}
console.log(saludar("asd"))


const saludarOptimizado = nombre => `Hola ${nombre}`

const saludo = saludarOptimizado("asd")

console.log(saludo)