// INCORPORAR OBJETOS
/* 
crea al menos un objeto (incorporando propiedades y su constructor) para controlar el funcionamiento de tu simulador. Incluye también, al menos, un método.
Instancia e invoca este objeto en algún momento donde el usuario realice alguna acción.
================
Algunos objetos a identificar pueden ser: Producto, Persona, Libro, Auto, Comida, Bebida, Tarea, etc. 
Ejemplo: Puedes crear un objeto que reciba un producto y las cantidades a comprar de este y que, mediante un método, calcule el total de unidades por el precio unitario, devolviendo el importe a pagar.
*/

// COMPLEMENTARIO
/* 
Genera un array de objetos con la estructura de objeto mencionada. Por otro lado, crea un objeto Producto(), que reciba mediante su constructor el array de objetos.
El objeto Producto() debe tener un método llamado totalDeCompra(), que recorra el array recibido mediante el constructor, multiplique la cantidad de cada producto por el precio unitario de este y acumule el subtotal en una variable. Esta variable será retornada por este método con el precio final que debe pagarse por ese total de productos y cantidades a comprar.
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

class Producto{
    constructor(producto, precioUnitario){
        this.producto = producto;
        this.precioUnitario = precioUnitario;
    }
}
class prodCarrito{
    constructor(producto, precioUnitario, cantidad){
        this.producto = producto;
        this.precioUnitario = precioUnitario;
        this.cantidad = cantidad;
    }
}

const productos = [
    {producto: "Macbook Air M2", precioUnitario: 159900},
    {producto: "Magic Mouse", precioUnitario: 39900},
    {producto: "iPad Air", precioUnitario: 89790}
]

const carrito = {
    contenido: JSON.parse(localStorage.getItem("carrito")) || [],
    totalDeCompra: function (){
        let total = 0
        for(let i = 0; i<this.contenido.length; i++){
            let precioProducto = this.contenido[i].precioUnitario * this.contenido[i].cantidad
            total += precioProducto
        }
        return total
    }
}

const agregarProductoCarrito = ()=>{
    let codigoProducto = parseInt(prompt("Ingrese el código del producto a comprar \r 0 - Macbook Air M2 \r 1 - Magic Mouse \r 2 - iPad Air"))
    // 0 <= CODIGO PRODUCTO <=2
    while(!((!isNaN(codigoProducto)) && codigoProducto>=0 &&codigoProducto<=2 )){
        codigoProducto = parseInt(prompt("Ingrese el código del producto a comprar \r 0 - Macbook Air M2 \r 1 - Magic Mouse \r 2 - iPad Air"))
    }
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"))
    while(!(!isNaN(cantidad) && !(codigoProducto<0) )){
        cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar. Ingrese un número mayor a 0"))
    }
    const productoSeleccionado = new prodCarrito(productos[codigoProducto].producto, productos[codigoProducto].precioUnitario, cantidad)
    carrito.contenido.push(productoSeleccionado)
    localStorage.setItem("carrito", JSON.stringify(carrito.contenido))
}

function comprar(){
    let loop = true
    while(loop){
        agregarProductoCarrito()
        loop = confirm("desea seguir comprando?")
    }
    alert(`Su factura es de ${carrito.totalDeCompra()}`)
    carrito.contenido = []
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
comprar()







// Extra
// Esta función puede ver si algo es un JSON utilizando promesas, mejoraría el código de arriba pero supera lo visto ahsta el momento.
// El !! convierte un dato a booleano
/* 
function isJSON(string) {
    try {
        return (JSON.parse(string) && !!string);
    } catch (e) {
        return false;
    }
}


*/