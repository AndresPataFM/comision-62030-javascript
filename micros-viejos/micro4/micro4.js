// Define un array vacío con el nombre de productos.
// Crear una función para cargar elementos (productos) en un array. 
// La función debe evaluar si el elemento existe previamente en el array, y allí cargarlo, o no (avisando al usuario que ya existe el elemento).

// Ampliado 

// Utiliza los cuadros de diálogo Prompt() y Confirm().
// Se debe aplicar el método indexOf() o includes() para ver si el elemento a agregar existe o no. 
// Si no existe, entonces se deberá utilizar el método .push() para añadirlo.
// Si el elemento existe, se deberá notificar al usuario que no se puede agregar porque ya existe.
// Puedes agregar otro tipos de validaciones para asegurarte de que la información a agregar sea consistente (ej: que el usuario no agregue espacios en blanco, contenido vacío, etcétera).
// Crea esto dentro de while(), y pregunta al usuario mediante el uso de confirm() si desea seguir agregando elementos al array. 
// Solo cuando pulse cancelar, allí se deberá cortar la ejecución del alta de productos en array.

const productos = []

const agregarProducto = (prod)=>{
    const estaArray = productos.includes(prod)
    if(estaArray){
        alert("el producto ya existe")
    } else {
        productos.push(prod)
        alert("Producto agregado")
    }
}

const validadorProducto = (prod)=>{
    const transformar = Number(prod)
    // si no es un numero da true
    const validacionNumero = isNaN(transformar)
    const validacionVacio = prod !== ""
    const validacionString = typeof prod === "string"
    return validacionNumero && validacionVacio && validacionString
}

const app = ()=>{
    alert("Bienvenido al sistema de gestion de la tienda")
    alert("Usted va a agregar productos")
    let loop = confirm("¿Desea agregar productos?")
    while(loop){
        const producto = prompt("Ingrese el nombre del producto a agregar")
        if(validadorProducto(producto)){
            agregarProducto(producto)
            const arrayString = productos.join("\r")
            alert(arrayString)
        } else {
            alert("Ingrese un dato correcto")
        }
        loop = confirm("¿Desea agregar otro producto?")
    }
}

app()

// ======= Mini desafio ========
// Detector de palindromos

