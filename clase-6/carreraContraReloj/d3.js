/* 
https://drive.google.com/file/d/1-mexv1EZlku44bajNJnNK4_keyFvCTyM/view

Hamburguesas millonarias:

Para este nuevo emprendimiento es importante saber cuáles son las hamburguesas más caras del comercio.

Para ello deberás:

Generar un array de objetos con el nombre de 'hamburguesas' *Si ya lo hiciste en el ejercicio "Automatización de pedidos de hamburguesa" puedes reutilizar dicho array, sino más abajo encontrarás la información para poder construirlo.
Luego deberás filtrar en un array, aquellos combos donde su precio supere los 200 pesos, y listar el resultado utilizando el método table del objeto console.
En el caso que no haya un resultado favorable, muestra una advertencia en la consola Js que no se han encontrado productos coincidentes.
*/

// El console.table es bueno para datos superficiales, para objetps/arrays complejos, usen el log

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

const filtrarPrecioMayor =(precio)=>{
    // filtro para encontrar los elementos que tengan mayor precio
    const filtrado = hamburguesas.filter(hamburguesa=>{
        return hamburguesa.precio > precio
    })
    // verifico su length, si es 0 se que no encotnre ninguno
    if(filtrado.length===0){
        console.warn("No se han encontrado productos coincidentes")
    } else {
        console.table(filtrado)
    }
}

filtrarPrecioMayor(200)