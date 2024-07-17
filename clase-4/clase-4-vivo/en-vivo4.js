//  Ejemplo objeto literal

const identidad = {
  id: 23716,
  nombre:  "Andrés",
  turno: "noche",
  cursos: {},
  ingresarTrabajo: function(){
    console.log("Andrés ingreso al trabajo")
  }
}

console.log(identidad.nombre)
console.log(identidad["nombre"])

identidad.ingresarTrabajo()

const producto = {
  nombre:"manzana",
  precio: 1000
}

console.log(producto.nombre)

const producto2 = {nombre: "pera", precio: 1200}

// arrays

const nombresClase = ["David", "Leandro", "Andrés","Santiago"]


// console.log(nombresClase)
// console.table(nombresClase)

// console.log(nombresClase.length)
// console.log(nombresClase[0])
// console.log(nombresClase[1])
// console.log(nombresClase[2])
// console.log(nombresClase[3])
// console.log(nombresClase[4])
// console.log(nombresClase[-1]) // nunca existe

// for(let i = 0; i< nombresClase.length; i++){
//   console.log(nombresClase[i])
// }

const tienda = [producto, producto2, {nombre:"a", precio: 1000}, {nombre:"a", precio: 1000}, {nombre:"b", precio: 1000}, {nombre:"c", precio: 10200}, {nombre:"d", precio: 100}, {nombre:"e", precio: 1100}, {nombre:"f", precio: 300}]

function mostrarProductos(){
  let textoTienda = "Bienvenidos a mi verdulería, mis productos son:"
  for(let i = 0; i< tienda.length; i++){
    textoTienda += `\n ${i} - ${tienda[i].nombre} - precio: $${tienda[i].precio}`
  }
  console.log(textoTienda)
}

// mostrarProductos()

// console.log(nombresClase)
// nombresClase.unshift("Carlos")
// nombresClase.push("Nahuel")
// console.log(nombresClase.shift())
// console.log(nombresClase.pop())
// console.log(nombresClase)

// let tienda2 = [producto, producto2]
// console.table(tienda2)
// tienda2[2] = {nombre: "uvas", precio: 1500} // asi es muy feo
// console.table(tienda2)
// // delete tienda2[1] // no me usen
// console.log(tienda2)

// function mostrarProductos2(){
//   let textoTienda = "Bienvenidos a mi verdulería, mis productos son:"
//   for(let i = 0; i< tienda2.length; i++){
//     // textoTienda += `\n ${i} - ${tienda2[i].nombre} - precio: $${tienda2[i].precio}`
//     console.log(tienda2[i])
//   }
//   console.log(textoTienda)
// }
// mostrarProductos2()

console.log(nombresClase.join())
console.log(nombresClase.join("-asd-"))
console.log(nombresClase.join(" - "))
// alert(tienda)

const numeritos = [2, 4,4,5, 42, 7, 3]
console.log(numeritos.indexOf(4))
console.log(numeritos.lastIndexOf(4))

console.log(nombresClase)
// if(nombresClase.indexOf("Andrés")>=0){
//   console.log(`Andrés estuvo presente`)
// } else {
//   console.log(`Andrés no estuvo presente`)
// }

// function estaPresente(nombre){
//   if(nombresClase.indexOf(nombre)>=0){
//     console.log(`${nombre} estuvo presente`)
//   } else {
//     console.log(`${nombre} no estuvo presente`)
//   }
// }
function estaPresente(nombre){
  if(nombresClase.includes(nombre)){
    console.log(`${nombre} estuvo presente`)
  } else {
    console.log(`${nombre} no estuvo presente`)
  }
}
// estaPresente("Andrés")
// estaPresente("David")
// estaPresente("Julieta")

// numeritos.sort()
// console.log(numeritos)
// console.log("5">"42")

// const numeros = [3, 42, 44, 432, 7, 1]

// numeros.sort()

// console.log(numeros)

console.log(nombresClase)
// a -> z
function ordenarAlfabeticamente(){
  console.log("inicial", nombresClase)
  nombresClase.sort()
  console.log("final", nombresClase)
}
function ordenarZA(){
  console.log("inicial", nombresClase)
  // nombresClase.sort()
  // nombresClase.reverse()
  nombresClase.sort().reverse()
  console.log("final", nombresClase)
}

ordenarAlfabeticamente()
ordenarZA()
// nombresClase.reverse()
console.log(nombresClase)

// Tarea, intenten hacer una funcion apra arrays que imite el funcionamiento de reverse