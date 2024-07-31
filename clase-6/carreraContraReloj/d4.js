/* 
https://drive.google.com/file/d/1HxwQpRf4mw77d448uXGgUhARXu9RyGDQ/view

Sin alas no se puede volar

🟧 En este desafío deberás buscar el combo que contiene la palabra 'alitas' ya que es un pedido muy solicitado en otros comercios y el gerente quiere saber si en su local se encuentra disponible. 🟧

Para ello deberás:

🟠 Buscar en el array de hamburguesas el combo que contiene en el nombre la palabras "alitas".
🟠 Guarda el resultado en una constante llamada 'resultadoalitas'.
🟠 En el caso que encuentres el combo deberás infórmale al cliente mediante un cuadro de diálogo alert() el nombre del combo completo. Seguido a ello, tendrás que envíar a la consola Js mediante el método log el precio de dicho combo.
🟠 En el caso de no encontrar resultados deberás enviar una advertencia a la consola JS indicando que no existe un combo con dicha palabra en su nombre.
*/

// Hace referencia al d1
// hamburguesa = {nombre, precio, ingredientes, numeroDeCombo}
// El includes se puede utilizar para revisar strings si contienen 1 o más caracteres de un string (en el orden dado)

const local1 = [];
const local2 = [
    {nombre: 'Krusty Burger', precio: 150, ingredientes: ['Carne', 'Queso'], numeroDeCombo: 1},
    {nombre: 'Krusty Burger Doble', precio: 225, ingredientes: ['Carne', 'Queso', 'Panceta'], numeroDeCombo: 2},
    {nombre: 'Krusty Pollo', precio: 150, ingredientes: ['Pollo', 'Queso'], numeroDeCombo: 3},
    {nombre: 'Krusty Mega balde de Pollo', precio: 140, ingredientes: ['Pollo', 'Queso',
    'Aderezo'], numeroDeCombo: 4},
    {nombre: 'Super Krusty', precio: 150, ingredientes: ['Carne', 'Queso', 'huevo'], numeroDeCombo: 5},
    {nombre: 'Super Krusty Doble', precio: 180, ingredientes: ['Carne', 'Queso', 'huevo'], numeroDeCombo: 6},
    {nombre: 'Super Krusty Triple', precio: 205, ingredientes: ['Carne', 'Queso', 'huevo'], numeroDeCombo: 7},
    {nombre: 'Krusty Vegan', precio: 125, ingredientes: ['Espinaca', 'Soja'], numeroDeCombo: 8}
];
const local3 = [
    {nombre: 'krusty vegan', precio: 125, ingredientes: ['Espinaca', 'Soja'], numeroDeCombo: 8},{nombre: 'alitas MAX', precio: 250, ingredientes: ['Alitas', 'Cheddar'], numeroDeCombo: 9}
];

let resultadoalitas

const revisarString = (str, query)=>{
    // revisa si un string contiene el query (que tmb es un string)
    // retorna booleano
    // cuidado que es case sensitive
    return str.includes(query)
}

const buscarAlitas = (local)=>{
    const busqueda = local.find(hamburguesa=>{
        return revisarString(hamburguesa.nombre, "alitas")
    })
    if(busqueda === undefined){
        console.warn("No existe un combo con la palabra alitas en el nombre")
    } else {
        resultadoalitas = busqueda
        alert(`El nomrbe del combo es ${busqueda.nombre}`)
        console.log("Precio del combo:", busqueda.precio )
    }
}

// array vacio
buscarAlitas(local1)

// array sin el combo
buscarAlitas(local2)

// array con el combo
buscarAlitas(local3)

