// Objetos

const michi = {
  nombre: "michifus",
  especie: "gato",
  edadMeses: 3,
  duenio: false,
  maullar: function (){
    console.log("miau")
  }
}

console.log(michi.nombre)

// Este segundo método de invocar prop/metodos no lo usen
console.log(michi["nombre"])

// michi.maullar()
michi["maullar"]()

// modifiquemos prop existentes
michi.nombre = "Thor"
console.log(michi)

michi["duenio"] = true
console.log(michi)

michi.patas = 4

console.log(michi)

// MUY mala práctica
michi["nombre dueño"] = "Andrés"

console.log(michi)

// Objecto
  // declarar
  // acceder
  // modificar

const michiNuevo = {
  nombre: "michifus",
  especie: "gato",
  edadMeses: 3,
  duenio: true,
  maullar: function (){
    console.log("miau")
  },
  presentar: function(){
    console.log(`Hola soy ${this.nombre}, soy un ${this.especie}, tengo ${this.edadMeses} meses ${ this.duenio ? "tengo dueño" : "no tengo dueño"}. `)
  }
}

michiNuevo.presentar()

// Funciones Constructoras
// Plantilla creadora de objetos
// PascalCase
function Mascota(nombre, especie, edad, duenio){
  this.nombre = nombre
  this.especie = especie
  this.edad = edad
  this.duenio = duenio
  this.presentar = function(){
    console.log(`Hola soy ${this.nombre}, soy un ${this.especie}, tengo ${this.edad} meses ${ this.duenio ? "tengo dueño" : "no tengo dueño"}. `)
  }
}

const perrito = new Mascota("Ami", "Perro", 12, true)

console.log(perrito)

perrito.presentar()

// Clases

class Gato {
  constructor(nombre, edadMeses, genero){
    this.nombre = nombre
    this.edadMeses = edadMeses
    this.edadAnios = parseInt(edadMeses/12)
    this.genero = genero
  }
  maullar(){
    console.log("miau")
  }
  presentar(){
    console.log(`Hola soy ${this.nombre}, soy un ${this.genero}, tengo ${this.edadMeses} meses.`)
  }
  acariciar(numero){
    console.log(`Acariciaste al gato ${numero} veces`)
  }
}

const pucara = new Gato("Pucara", 132,"macho")

console.log(pucara)

pucara.presentar()
pucara.acariciar(5)
// Storage