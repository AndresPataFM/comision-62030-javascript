// 🟠 Funciones de órden suerior 🟠
// Una función de orden superior es una función que puede recibir por parámetro una función o retornar una función


// 🟠 Métodos de búsqueda y transformación de arrays 🟠 
// Estos utilizan funciones de orden superior como parámetros para potenciar su funcionalidad

// 💥 significa que se modifica el array inicial
// 💖 significa que el array incial se mantiene igual

// ✅ significa que el/los parámetros son necesarios
// ⭕ significa que el/los parámetros pueden utilizarse o no
// ❌ no se usan los parámetros

// ❓  significa que la función parametro retorna booleanos
// ➗ significa que la función parametro retorna números
// 💌 significa que la función parametro retorna elementos

// ❔ significa retorna booleano
// 🔢 significa retorna número
// 📧 significa retorna elemento
// 📫 significa retorna array
// 🛑 significa no hay return


// 🔶  ✅forEach() 💖🛑 (rara vez destructivo)🔶
// "A cada"
// 🔹 Recorre el array y ejecuta una función por cada elemento.
// 🔹 NO TIENE RETURN
// 🔹 No modifica array original

/* 
const array = [0,1,2,3,3,4]
console.log(array)
const consologuear = (elemento) =>{
    console.log(elemento*5)
}
array.forEach(consologuear)
array.forEach((elemento) =>{
    console.log(elemento*5)
})
for(let i=0; i<array.length; i++){
    consologuear(array[i])
} 
*/
/* 
array.forEach((elemento)=>{
    console.log(elemento)
}) 
*/

// 🔶 ✅❓ find() 💖📧 🔶
// "Encontrar"
// 🔹 busca un elemento del array y retorna el primer elemento que cumple con cierta condición.
// 🔹 RETORNA ELEMENTO
// 🔹 La función parámetro debe retornar booleano

/* 
console.log(array.find((elemento)=>{
    let comparacion = elemento === 3
    return comparacion
}))
console.log("find", array.find((elemento)=>{
    return elemento === 3
})) 
    */

/* 
console.log(array.find((elemento)=>{
    let operaciónLógica = booleano
    return operaciónLógica
})) 
*/

// 🔶 ✅❓ filter() 💖📫 🔶
// "Filtrar"
// 🔹 recibe una función comparadora por parámetro y retorna un nuevo array con los elementos que cumplan con la condición.
// 🔹 RETORNA ARRAY
// 🔹 La función parámetro debe retornar booleano

/* 
console.log("filter", array.filter((elemento)=>{
    return elemento === 3
})) 
*/
/* 
console.log(array.filter((elementos)=>{
    let comparacion = booleano
    return comparacion
})) 
*/

// 🔶 ✅❓ some() 💖❔ 🔶
// "Alguno"
// 🔹 funciona igual que filter, con la diferencia que nos retorna un booleano (true or false) si encuentra o no el elemento
// 🔹 RETORNA BOOLEANO
// 🔹 La función parámetro debe retornar booleano

console.log("some", array.some((elemento)=>{
    return elemento === 3
}))

/* 
console.log(array.some((elementos)=>{
    let comparacion = booleano
    return comparacion
})) 
*/

// 🔶 ✅💌 map() 💖📫 🔶
// "Calcar/trazar"
// 🔹 permite crear un nuevo array con todos los elementos del array, pero transformados. 
// 🔹 RETORNA UN ARRAY
// 🔹 La función parámetro debe de retornar elementos (de no hacerlo retorna undefined)
// 🔹 De los más usados
// ⛔ Se mantiene relación con el array padre si los elementos mapeados son objetos

let nuevoArray = array.map((elemento)=>{
    return elemento* (-1)
})
let nuevoArray2 = array.map (x=>x)
console.log(nuevoArray)
/* 
console.log(array.map((elemento)=>{
    let elementoModificado = .....
    return elementoModificado
}))
*/

// 🔶 ✅➗(o string) reduce() 💖🔢(o string)) 🔶
// "Reducir"
// 🔹 permite obtener un único valor después de iterar sobre un array
// 🔹 parametros de la función parámetro:
//   ◽ valor a acumular
//   ◽ elemento del array
// ⛔ El orden de los parámetros importa
// 🔹 debe de retornar un número la función parámetro
// 🔹 con una , al final se pone el valor inicial del total
// 🔹 RETORNA UN NÚMERO
/* 
const valorReducido = array.reduce((total, elemento)=>{
    return total + operación
}, valorInicial)
*/

// const sumaTotal = array.reduce((total, elemento)=>{
//     return total + elemento
// },0)
// console.log(sumaTotal)

// 🔶 ⭕➗ sort() 💥🛑 🔶
// Ordenar
// Funciona como un bubble sort
// 🔹 permite reordenar un Array segun un criterio que definamos. Podes no utilizar un parametro pero no es recomendado.
//   ◽ Sin parámetros los ordena según los carácteres UTF-16
// 🔹se ponen 2 parametros en la funciómn parámetro, estos son los elementos a comparar
// 🔹 si el return es negativo, pone a primero el elemento 1
// 🔹 si el return es positivo, pone primero el elemento 2
// 🔹 si el return es 0 mantiene el orden
// 🔹 Orden:
//   ◽ (element1-element2) es de menor a mayor 
//   ◽ (element2-element1) es de mayor a menor
//  MODIFICA EL ARRAY ORIGINAL

/* 
array.sort((element1, element2)=>{
    return element2 - element1
})
console.log(array)
*/

// Ejemplos

class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    // hola = function(){
    //     console.log(`Hola, soy ${this.nombre}`)
    // }
}

const productos = []

const agregarProducto = (id, nombre, precio, stock)=>{
    // crea objetos producto y los agrega al array productos 

    // usamos los datos generados para crear un producto
    let nuevoProducto = new Producto(id, nombre, precio, stock)

    // agregar el producto al array
    productos.push(nuevoProducto)
}
agregarProducto("1", "ALFAJOR", 75, 7)
agregarProducto("2", "coca", 350, 15)
agregarProducto("3", "chicle", 200, 45)
agregarProducto("4", "palitos de la selva", 10, 500)
// console.log(productos)


// console.log("forEach")
// productos.forEach((elemento)=>{
//     console.log(elemento.nombre)
// }) 



// console.log("find", productos.find((elemento)=>{
//     return elemento.nombre === "ALFAJOR"
// }))

// console.log("find", productos.find((elemento)=>{
//     return elemento.id === "3"
// })) 



// console.log("filter", productos.filter((elementos)=>{
//     let comparacion = elementos.precio >=100 && elementos.precio <=600
//     return comparacion
// })) 



// console.log("some", productos.some((element)=>{
//     const existe = element.nombre === "coca"
//     const tieneStock = element.stock>0
//     const comparacion = existe && tieneStock
//     return comparacion
// }))

// const arrayPrueba = ["cero", "uno", "dos", "tres"]
// console.log(arrayPrueba.some((element)=>{
//     return element === "dos"
// }))
// console.log(arrayPrueba.find((element)=>{
//     return element === "dos"
// }))



// productos.sort((element1, element2)=>{
//     return element2.precio - element1.precio
// })
// console.log(productos)

// sortear strings
// uno puede comparar strings con booleanos
// productos.sort((elemento1, elemento2)=>{
//     if(elemento1.nombre>elemento2.nombre){
//         return 1
//     }
//     if(elemento1.nombre<elemento2.nombre){
//         return -1
//     }
//     return 0
// })
// console.log([23, 1, 13, 553, 70])

// const arrayNumeros = [23, 1, 13, 553, 70]


// arrayNumeros.sort((element1, element2)=>{
//     return element2 - element1
// })
// // arrayNumeros.sort()
// console.log(arrayNumeros)



// const carrito = []
// let totalCarrito = 0

// const calcularTotalCarrito = ()=>{
//     totalCarrito = carrito.reduce((total, elemento)=>{
//         return total + (elemento.producto.precio*elemento.cantidad)
//     }, 0)
// }

// const agregarCarrito=(producto, cantidad)=>{
//     carrito.push({producto, cantidad})
// }

// agregarCarrito(productos[0], 7)
// agregarCarrito(productos[2], 10)
// agregarCarrito(productos[3], 2)
// console.log("carrito", carrito)
// calcularTotalCarrito()
// console.log(totalCarrito)


// 🟠 Recursividad 🟠
// Funciones que se retornan a si mismas para poder obtener un resultado
// Funciona muy bien cuando un problema se puede dividir en sub problemas matemáticos
// ⛔ Eviten loops infinitos

const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    };
    return fibonacci(n-1) + fibonacci(n-2);
}
[1,1,2,3,5,8,13]

// Factorial

const factorial = (nro) =>{
    if(nro <= 1){
        return 1;
    }
    return nro * factorial(nro-1);
}
// !5 = 5*4*3*2*1

// Para ahorrar tiempo de procesamiento podemos hacer una función de orden superior que revise/procese los datos ingresados.

const verificacionEnteros = (nro, funcion)=>{
    let nroEnt = parseInt(nro)
    if(isNaN(nro)){
        console.warn("No se ha ingresado un nro")
        return;
    } else if(nro !== nroEnt){
        console.warn(`${nro} fue transformado a ${nroEnt}`)
    }
}