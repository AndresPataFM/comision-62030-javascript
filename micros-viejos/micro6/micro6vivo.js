/* Consigna
✅ Crear un constructor de productos con una estructura básica (Ej: código, descripción, stock, precio unitario).
✅ Luego, crea una función a través de la cual puedas solicitar datos al usuario para dar de alta un nuevo producto, en base a las propiedades definidas en el constructor anterior.
✅ Con toda la información recopilada, instancia la Clase JS para crear un nuevo producto con la información que recopilaste, y agrega este nuevo producto, a un array de productos.
✅ Utiliza console.table(productos), para obtener un Preview del array, por cada nuevo producto que agregas.
*/
/* Tips
💡 Recopila la información del producto, utilizando el cuadro de diálogo Prompt().
💡 Ten presente que el precio del producto, debe guardarse como un número, y puede contener decimales: (utiliza las funciones acordes para controlar que se guarde correctamente esta información.
💡 Ten presente también que, el código del producto, de ser numérico, se debe guardar como un número entero. Utiliza la función acorde para que así sea
*/

class Producto{
    constructor(codigo, desc, stock, precio){
        this.codigo = codigo
        this.descripcion = desc
        this.stock = stock
        this.precio = precio
    }
}

const productos = []
let loop = true

function agregarProductos(){
    // que no se repita y sea un nro entero positivo igual o mayor a 0
    let codigo = parseInt(prompt("codigo"))
    // que no sea un string vacio
    let descripcion = prompt("descripcion")
    // que sea un nro entero mayor o igual a 0
    let stock = parseInt(prompt("stock"))
    // que sea un nro entero mayor o igual a 0
    let precio = parseFloat(prompt("precio")).toFixed(2)

    productos.push(new Producto(codigo, descripcion, stock, precio))
    console.log(productos)
}

alert("usted va a agregar productos")
while(loop){
    agregarProductos()
    loop = confirm("¿Desea agregar otro producto?")
}



