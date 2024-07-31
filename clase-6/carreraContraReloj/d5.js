/* 
https://drive.google.com/file/d/173-4B3qU10EayCwx9WxlAlxYKN-O5Vcg/view

Doble burger o nada:

🟧 En este desafío deberás filtrar todos aquellos combos de
hamburguesas que sean dobles. 🟧

Para ello deberás:
🟠 Filtrar en un nuevo array de objetos 'hamburguesas' todos aquellos productos que incluyan la palabra 'doble' en su nombre.
🟠 Luego deberás almacenar en una constante el resultado del filtro, y deberás llamarla 'dobleresultado'.
🟠 En el caso que obtengas resultados deberás mostrar los mismos utilizando el método table del objeto console.
🟠 En el caso de no encontrar resultados deberás enviar una advertencia a la consola JS de que no se encontraron elementos coincidentes.
*/

// como debemos de modificar un array que es una constante, lo mejor es utilizar una combinación de forEach y push (opcion b sería declarar el array con los valores, como en d7)
// es tan similar al d4 que voy a reutilizar código (para algo lo creamos)

const hamburguesas = [
    {nombre: 'Krusty Burger', precio: 150, ingredientes: ['Carne', 'Queso'], numeroDeCombo: 1},
    {nombre: 'Krusty Burger Doble', precio: 225, ingredientes: ['Carne', 'Queso', 'Panceta'], numeroDeCombo: 2},
    {nombre: 'Krusty Pollo', precio: 150, ingredientes: ['Pollo', 'Queso'], numeroDeCombo: 3},
    {nombre: 'Krusty Mega balde de Pollo', precio: 140, ingredientes: ['Pollo', 'Queso',
    'Aderezo'], numeroDeCombo: 4},
    {nombre: 'Super Krusty', precio: 150, ingredientes: ['Carne', 'Queso', 'huevo'], numeroDeCombo: 5},
    {nombre: 'Super Krusty Doble', precio: 180, ingredientes: ['Carne', 'Queso', 'huevo'], numeroDeCombo: 6},
    {nombre: 'Super Krusty Triple', precio: 205, ingredientes: ['Carne', 'Queso', 'huevo'], numeroDeCombo: 7},
    {nombre: 'Krusty Vegan', precio: 125, ingredientes: ['Espinaca', 'Soja'], numeroDeCombo: 8}
]

const dobleresultado = []

const revisarString = (str, query)=>{
    // uso lowercase para evaluar independientemente de capitalización
    const lowerStr = str.toLowerCase()
    const lowerQuery = str.toLowerCase()
    return lowerStr.includes(lowerQuery)
}

const buscarDoble = ()=>{
    // en vez de local, no uso parámetro y busco directametne en hamburguesa
    // cambio find por filter
    const busqueda = hamburguesas.filter(hamburguesa=>{
        return revisarString(hamburguesa.nombre, "doble")
    })
    if(busqueda === undefined){
        console.warn("No existe un combo con la palabra alitas en el nombre")
    } else {
        busqueda.forEach(hamburguesa => {
            dobleresultado.push(hamburguesa)
        });
        console.table(busqueda)
    }
}

buscarDoble()