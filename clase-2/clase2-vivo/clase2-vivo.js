// Para ver si un valor es NaN se utiliza isNaN().

// Bloque de código

// Estoy afuera
{
  // estoy dentro del bloque de código
  // Yo tmb
}
// Estoy afuera

/* let saldo = parseFloat(prompt("Ingrese su saldo en número"))
// El prompt siempre devuelve string

// Por el parse, o llega un número o llega NaN
if(saldo < 0){
  alert("Tenes saldo negativo")
  alert("deposita más plata")
}
alert("terminó") */

// let edad = parseInt(prompt("Cuantos años tiene"))

// if(edad >= 18){
//   alert("pase")
// } else if(isNaN(edad)){
//   alert("Por favor ingrese un tipo de dato válido")
// } else if(edad<0){
//   alert("Las edades son números positivos")
// } else {
//   alert("usted es menor de edad, detengase")
// } 

// if(edad>5){
//   console.log("edad>5")
// }  else if (edad>2){
//   console.log("edad>2")
// } else {
//   console.log("Algo salio mal")
// }


// En un apartamento hay 6 inquilinos, 2 viven en el mismo cuarto, crea un algoritmo con switch para que nuestra máquina pueda con el nombre dado, decirle a que cuarto/piso ir

/* let nombre = prompt("diga su nombre").toLowerCase()

switch (nombre){
  case "andres":
    alert("1A")
    break
  case "diana":
    alert("1B")
    break
  case "jaime":
  case "juan":
    alert("2A")
    break
  case "laura":
    alert("2B")
    break
  case "matilda":
    alert("3")
    break
  default:
    alert("Usted no vive aqui")
}  */

// for(variable; condición; modificación){
//     ~código a ejecutar
// }

/* for(let i=0; i<5; i=i+1){
  console.log("Este es i:", i)
} */

/* for(let i=0; i<5; i+=1){
  console.log("Este es i:", i)
} */

// for(let i=0; i<5; i++){
//   console.log("Este es i:", i)
// }

// ESTO ESTA MAL, GENERA UN LOOP/CICLO INFINITO
// for(let i=0; i<5; i--){
//   console.log("Este es i:", i)
// }
// for(let i=0; i<5; i-=1){
//   console.log("Este es i:", i)
// }

// while(true){
//   alert("hola")
// }

// let i = 0

// while(i<5){
//   console.log(i)
//   i++
// }

// let saludo = true
// // console.log(saludo = true)
// while(saludo){
//   alert("¡HOLA!😀")
//   saludo = confirm("¿Otro saludo?")
// }

let saludo = false
let despedida = false
while(saludo){
  alert("¡HOLA!😀")
  saludo = confirm("¿Otro saludo?")
}

// El do me asegura 1 ejecución
// do{
//   alert("¡Chau!😥")
//   despedida = confirm("¿Otra despedida?")
// } while(despedida)
  
// // 

// Tienda de alcohol

let noValidado = true

do{
  validado = !confirm("¿Sos mayor de edad?")
} while(validado)

alert( "Tienda de alcohol")
// contenido de la página