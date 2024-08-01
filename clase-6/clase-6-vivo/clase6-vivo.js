function crearDado(caras){
  return function(){
    return 1+ Math.floor( Math.random()*caras)
  }
}

const dado20caras = crearDado(20)

/* 
function(){
  return 1+ Math.floor( Math.random()*20)
*/

const dado6caras = crearDado(6)

// 6! = 720
// 6*5*4*3*2*1 = 720

function numFactorial(numero){
  let total = numero;
  for(let i = numero-1; i>0; i--){
    total *= i
  }
  return total
}

/* console.log(numFactorial(6))
console.log(numFactorial(7)) */

const factorial = (nro) =>{
  if(nro <= 1){
    return 1;
  }
  return nro * factorial(nro-1);
}

/* console.log(factorial(6))
console.log(factorial(7)) */

// parametro

const arrayNombres = ["Andrés", "Diana", "Juan", "Matilda"]

function trabajarArray(array, funcionTrabajo){
  for(let i=0; i<array.length; i++){
    funcionTrabajo(array[i])
  }
}

// sin ()
trabajarArray(arrayNombres, console.log)

function saludar(nombre){
  console.log("Hola "+nombre)
}

trabajarArray(arrayNombres, saludar)

trabajarArray(arrayNombres, function(elemento){console.log(elemento.length, elemento)})
trabajarArray(arrayNombres, (elemento)=>{console.log(elemento.length, elemento)})

// array.metodo(funcionPorReferencia)

trabajarArray(arrayNombres, console.log)

arrayNombres.forEach((elemento)=>{console.log(elemento)})
arrayNombres.forEach((elemento)=>{console.log("Hola "+elemento)})

let nombres = ""

arrayNombres.forEach(function(elemento){
  nombres += elemento+ ", "
})

console.log(nombres)

const productos = [
  {nombre:"pera", precio:100, stock:45},
  {nombre:"manzana", precio:90, stock:4},
  {nombre:"manzana", precio:150, stock:75},
  {nombre:"frutilla", precio:150, stock:25},
  {nombre:"banana", precio:120, stock:0},
  {nombre:"lechuga", precio:70, stock:35},
]

const menor100 = productos.some((elemento)=>{
  return elemento.precio <= 60
})

const reponer = productos.some((producto)=>producto.stock<=0)

console.log(reponer)

const busqueda = productos.find((producto)=>{
  return producto.nombre === ""
})

function encontrarProducto(nombre){
  const prodEncontrado = productos.find((producto)=>{
    return producto.nombre === nombre.toLowerCase()
  })
  if(prodEncontrado){
    console.log("Aca esta el producto:", prodEncontrado)
  } else {
    console.log(`Lo lamento, no poseemos ${nombre}`)
  }
}

encontrarProducto("manzana")
// encontrarProducto("palta")
// encontrarProducto("FruTilla")

function hacerListaProductos(listaProductos){
  let lista = ""
  listaProductos.forEach(prod=>{lista += prod.nombre + "; " })
  return lista
}

function encontrarVariosProductos(precio){
  const productosEncontrados = productos.filter((elemento)=>{
    return elemento.precio <= precio
  })
  console.log(`Los productos menores o iguales a $${precio} son: `, hacerListaProductos(productosEncontrados))
}

encontrarVariosProductos(120)

const ajusteProdInflacion = productos.map(producto =>{
  // romper referencia
  const nuevoProducto = JSON.parse(JSON.stringify(producto))
  nuevoProducto.precio *= 1.25
  return nuevoProducto
})
console.log(productos)
console.log(ajusteProdInflacion)

const numeritos = [1,2,3,4]

const nuevosNumeritos = numeritos.map(elemento=>elemento*2)

console.log(numeritos)
console.log(nuevosNumeritos)

const arrayPrueba = productos.map(e=>e)

const carrito = []

class elementoCarrito{
  constructor(nombre, precio, cantidad){
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
  }
}

function agregarCarrito(prod, cantidad){
  const eleCarrito = new elementoCarrito(prod.nombre, prod.precio, cantidad)
  carrito.push(eleCarrito)
}

agregarCarrito(productos[0],2)
agregarCarrito(productos[1],3)
agregarCarrito(productos[3],1)
agregarCarrito(productos[4],7)

console.log(carrito)

const total = carrito.reduce((total, eleCarrito)=>{
  return total + eleCarrito.precio * eleCarrito.cantidad
}, 0)
console.log(total)

const listaCarrito = carrito.reduce(function(lista, productoCarrito){
  return lista + `${productoCarrito.nombre} - cantidad: ${productoCarrito.cantidad} p/u: $${productoCarrito.precio}||subtotal: $${productoCarrito.cantidad*productoCarrito.precio}; `
}, "Productos en carrito: ")

console.log(listaCarrito)


console.log(productos)

// ordenar por precio
productos.sort((primerProducto, segundoProducto)=>{
  return primerProducto.precio - segundoProducto.precio
})

console.log(productos)

/* 
array.sort((ele1, ele2)=>{
  let criterio = comparacion de ambos elementos propia 
  if(criterio){
  // cambiar orden
    return 1
  } else {
  // mantener orden
    return -1
  }
})
*/

// ==================

// verde

const hamburguesas = []

class hamburguesa {
  constructor(nombre, precio, ingredientes, nroCombo){
    this.nombre=nombre
    this.precio=precio
    this.ingredientes=ingredientes
    this.nroCombo=nroCombo
  }
}

function agregarHamburguesa(nombre, precio, ingredientes, nroCombo){
  precio = precio.toFixed(2)
  hamburguesas.push(new hamburguesa(nombre, precio, ingredientes, nroCombo))
}

// azul
agregarHamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
agregarHamburguesa("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
agregarHamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
agregarHamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso','Aderezo'], 4)
agregarHamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
agregarHamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
agregarHamburguesa("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
agregarHamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)

console.log(hamburguesas)

hamburguesas.sort((primeraHamburguesa, segundaHamburguesa)=>{
  return primeraHamburguesa.precio - segundaHamburguesa.precio
})


console.table(hamburguesas)

// amarillo

const resultadoaumento = hamburguesas.map((elemento)=>{
  const nuevoEle = JSON.parse(JSON.stringify(elemento))
  nuevoEle.precio = parseFloat(nuevoEle.precio)* 1.11
  nuevoEle.precio = nuevoEle.precio.toFixed(2)
  return nuevoEle
})

console.table(resultadoaumento)
