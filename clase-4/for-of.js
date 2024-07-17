// 🟠 for of 🟠 
// Es una manera declarativa de realizar un for. Se suele utilizar un forEach en vez de esto.

// 🔶 En arrays 🔶 
const array = [1,2,3]

// for (let i = 0; i<array.length; i++){
//     console.log(array[i])
// }

for(let elemento of array ){
    console.log(elemento)
}

const saludo = "hola"

for(const letra of saludo){
    console.log(letra)
}


// 1
// 2
// 3

// No se puede hacer en objetos que no sean strings o arrays
