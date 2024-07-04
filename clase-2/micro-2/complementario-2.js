// Desafíos complementarios
// Actividad 01:
/* 
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar. 
*/

/* let number = parseInt(prompt("Ingrese un número"))
let processedNumber = number%2 // Puede ser 1 o 0 o NaN
if(isNaN(processedNumber)){
  alert("Se ingreso algo que no es un número")
} else if (processedNumber===0){
  alert("Es par")
} else {
  alert("es impar")
} */


// Actividad 02:
/* 
Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir". 
*/

let ciclo = true
let cuantosPares = 0
let cuantosImpares = 0

while(ciclo){
  let number = parseInt(prompt("Ingrese un número"))
  let processedNumber = number%2 // Puede ser 1 o 0 o NaN
  if(isNaN(processedNumber)){
    alert("Se ingreso algo que no es un número")
  } else if (processedNumber===0){
    alert("Es par")
    cuantosPares++
  } else {
    alert("es impar")
    cuantosImpares++
  }
  ciclo = confirm("¿Desea evaluar otro número?")
}

alert(`hay un total de ${cuantosPares} números pares y ${cuantosImpares} números impares`)
// let repe = parseInt(prompt("Cuantos números deseas evaluar?"))

// for(let i=0; i<repe ; i++){
//   let number = parseInt(prompt("Ingrese un número"))
//   let 
//   let processedNumber = number%2 // Puede ser 1 o 0 o NaN
//   if(isNaN(processedNumber)){
//     alert("Se ingreso algo que no es un número")
//   } else if (processedNumber===0){
//     alert("Es par")
//   } else {
//     alert("es impar")
//   }
// }