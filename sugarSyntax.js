// Sugar syntax (sitnaxis dulce)

// maneras más palatables/dulces para escribir código


//  Clase 1

let i = 0

// Operadores aritméticos

// ++
i++
// es igual que
i = i+1

// --
i--
i = i-1

// +=
i += 5
i = i + 5

// -=
i -= 7
i = i - 7

// *=
i *= 7
i = i * 7

// Clase 2

// Operadores lógicos

// &&
// const a = valor1 && valor2
// si valor1 es turthy, retorna al valor2, sino retorna al valor1

// ||
// const b = valor1  valor2
// si valor1 es turthy, lo retorna, sino retorna al valor2

// Clase 3

// arrow functions

function hola(){
    console.log("hola")
}
const hola2 = ()=>{console.log("hola")}

// Valores por defecto
function verParametro (parametro = "No se ingresó un parámetro" ){
    console.log("El parámetro es: ", parametro)
}

class Usuario {
    constructor(nombre, premium = false){
        this.nombre = nombre
        this.premium = premium
    }
}

// ternario
// otra manera de escribir if/else con return,
// let validar = confirm()
// if(validar){
//     return "es verdadero"
// } else {
//     return "es falso"
// }
// const respuesta = validar ? "es verdadero" : "es falso"

// Spread operator
// ...
// esparce el contenido

const array1 = [1,2,3]
const array2 = [...array1, 4,5,6] // [1,2,3,4,5,6]

const objeto1 = {saludo: "hola"}
const objeto2 = {...objeto2, despedida: "chau"} // {saludo: "hola", despedida: "chau"}

// For in, un for para objetos
for (const prop in objeto2){
    console.log(prop)
}


// rest parameters
// unifica los parámetros en un array
function mostrar(...dato){
    console.log(dato)
}

// si está al final se puede utilizar con más de un parámetro
function mostrarAlgo(algo, ...dato){
    console.log(algo)
    console.log(dato)
}

// Clase 5

// Destructuring

const producto = {
    name:"Antipulgas Gato", 
    id:"001",
    type:"Medicinal", 
    price:450, 
    stock:32, 
    description:"Antipulgas felino Frontline Plus"
}
// sin alais
const {name, id, type} = producto
// con alias, osea, reasignando nombres a las propiedades
const {name: nombreProd, id: idProd, type: typeProd} = producto

console.log("nombreProd", nombreProd)

// en parametro
function mostrarProducto({name, id, type, price, stock, description}){
    console.log(name)
    console.log(id)
    console.log(type)
    console.log(price)
    console.log(stock)
    console.log(description)
}

mostrarProducto(producto)

// Optional chaining (encadenamiento condicional)
// Revisa si existe la propiedad antes de ejecutarlo,se puede con métodos pero es ligeramente más complejo
const objeto3 = {
    a: "ejemplo",
    b: ()=>{console.log("me ejecuté")}
}

// Esto genera error
// objeto3.c

// Esto no ya que no ejecuta el .c al no existir
objeto3?.c
console.log(objeto3?.c) // undefined, porque no existe
console.log(objeto3?.a) // "ejemplo"

// Esto no funciona al estar incompleto
// objeto3?.c()

// es así la sintaxis
objeto3?.c?.()
objeto3?.b?.()