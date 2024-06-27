// Consigna
/* 
🔶 Recupera el array que utilizado en el desafío de Storage. 
🔶 Recorrerlo e incorpóralo en el documento HTML, mostrando la información de cada uno de los productos en pantalla.
🔶 Utiliza una plantilla HTML para listar cada producto del array. La plantilla de HTML debe estar compuesta por un <div>, que contenga el resto de los elementos, un tag <h2> para mostrar el título del producto, y un tag <p> donde figura el importe del mismo.
🔶 Crea una función para recuperar el array desde Storage (o puedes generar previamente el mismo como un array de objetos). 
🔶 Luego, utiliza el método forEach() para iterar el array, y escribir dentro del tag <body>, una plantilla HTML con la información de cada producto. 
*/
// Tips
/* 
🔹 Recuerda declarar tu archivo .JS en el apartado <head> del documento HTML, y de agregar el atributo defer para que el archivo .JS se cargue luego de cargado el documento HTML.
🔹 Ten presente el uso de plantillas HTML y plantillas literales para armar el HTML.
🔹 Llama a la función JS que contiene todo este código, para que se cargue automáticamente cuando el documento HTML sea cargado.
*/

// === 🔺 Micro 5 🔺 ===
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

// === 🔺 Micro 7 🔺 ===



// === 🔺 Ejecutar app 🔺 ===
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




