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
class Producto {
    constructor(codigo, nombre, stock, precioUnitario){
        this.codigo = codigo;
        this.nombre = nombre;
        this.stock = stock;
        this.precioUnitario = precioUnitario;
    }
}

const productos = []

const verificarCodigo = ()=>{
    let codigo = prompt("Ingrese el código del producto")
    while(codigo==="" || codigo === null){
        codigo = prompt("Ingrese el código del producto. No tiene que ser vacio y debe ingresar un dato.")
    }
    if(productos.some((producto)=>{
        return producto.codigo === codigo
    })){
        alert("El código tiene que ser único.")
        return verificarCodigo()
    }
    return codigo
}

const verificarNombre = ()=>{
    let nombre = prompt("Ingrese el nombre del producto")
    while(nombre==="" || nombre === null){
        nombre = prompt("Ingrese el nombre del producto. No tiene que ser vacio y debe ingresar un dato.")
    }
    return nombre
}

const verificarStock = ()=>{
    let stockBase = prompt("Ingrese el stock del producto")
    while(stockBase==="" || stockBase === null){
        stockBase = prompt("Ingrese el stock del producto. No tiene que ser vacio y debe ingresar un dato.")
    }
    let stock = parseInt(stockBase)
    if(stock<0 || isNaN(stock)){
        alert("El stock tiene que ser un número mayor o igual a 0")
        return verificarStock()
    }

    return stock
}

const verificarPrecio = ()=>{
    let precioBase = prompt("Ingrese el precio del producto")
    while(precioBase==="" || precioBase === null){
        precioBase = prompt("Ingrese el precio del producto. No tiene que ser vacio y debe ingresar un dato.")
    }
    let precio = Number(precioBase)
    if(precio<0 || isNaN(precio)){
        alert("El precio tiene que ser un número mayor o igual a 0")
        return verificarPrecio()
    }

    return precio
}

const agregarProductos = ()=>{
    alert("Usted va a agregar un nuevo producto al sistema")
    let codigo = verificarCodigo() // verificar que este sea único
    let nombre = verificarNombre() // verificar que no sea un string vacio ni número
    let stock = verificarStock() // Que sea un número mayor o igual a 0, que sean enteros
    let precio = verificarPrecio() // que sea mayor a cero, posiblemente a 2 decimales

    const nuevoProducto = new Producto(codigo, nombre, stock, precio)
    productos.push(nuevoProducto)
    console.table(productos)
}

function app(){
    let loop = true
    while(loop){
        agregarProductos()
        loop = confirm("¿Desea agregar otro producto?")
    }
}

app()


