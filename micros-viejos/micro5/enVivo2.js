// COMPLEMENTARIO
/* 
Genera un array de objetos con la estructura de objeto mencionada. Por otro lado, crea un objeto Producto(), que reciba mediante su constructor el array de objetos.
====
El objeto Producto() debe tener un método llamado totalDeCompra(), que recorra el array recibido mediante el constructor, multiplique la cantidad de cada producto por el precio unitario de este y acumule el subtotal en una variable. Esta variable será retornada por este método con el precio final que debe pagarse por ese total de productos y cantidades a comprar.
===
Crear un objeto cliente que tenga un metodo que recorra todo su array interno llamado carrito y devuelva el precio total

El array de productos debe tener al menos cuatro productos, y debe variar las cantidades de cada uno de estos, como también el precio unitario.
El valor retornado por el método, debe tener hasta 2 decimales (Ej: 1345.49)
================
Crea un objeto que reciba a través de su constructor, un array de objetos que contenga {producto, precioUnitario, cantidad}.
Te dejamos a continuación un ejemplo del array de objetos. Puedes usarlo como modelo, pero debes cambiar el nombre de los productos, las cantidades y el precio unitario.

const carrito = [
    {producto: "Macbook Air M2", precioUnitario: 159900, cantidad: 2},
    {producto: "Magic Mouse", precioUnitario: 39900, cantidad: 1},
    {producto: "iPad Air", precioUnitario: 89790, cantidad: 1}
]

*/
// constructor de productos
class Producto{
    constructor(producto, precioUnitario, cantidad){
        this.producto = producto
        this.precioUnitario = precioUnitario
        this.cantidad = cantidad
    }
    totalDeCompra = function(){
        return this.precioUnitario * this.cantidad
    }
}

// cliente con canasta
const cliente = {
    carrito: [],
    precioFinal: function(){
        let total = 0
        for(producto of this.carrito){
            total+= producto.totalDeCompra()
        }
        return total.toFixed(2)
    }
}

// funcion que agrega productos al carrito

const agregarCarrito = (producto, precioUnitario, cantidad)=>{
    let itemCarrito = new Producto(producto, precioUnitario, cantidad)
    cliente.carrito.push(itemCarrito)
    console.log(cliente.carrito)
}

function applicacion(){
    let loop = true
    alert("Diga que productos quiere agregar a su carrito")
    while(loop){
        let producto = prompt("Diga que producto quiere agregar")
        let precioUnitario = parseFloat(prompt("Ingrese el precio del producto"))
        let cantidad = parseInt(prompt("Ingrese la cantidad a comprar"))
        agregarCarrito(producto, precioUnitario, cantidad)
        loop = confirm("¿Desea agregar otro producto?")
    }
    alert(`Es un total de ${cliente.precioFinal()}`)
    cliente.carrito=[]
}

applicacion()