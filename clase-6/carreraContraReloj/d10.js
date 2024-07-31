/* 
https://drive.google.com/file/d/1dphefZiuO1zTlrQlXnS5QmO_Ct9T_PEF/view

Customer experience

🟧 Desde el departamento de CX (Customer experience) comunican que es importante ordenar los combos por precio, para ayudar al usuario a realizar la compra de acuerdo a sus posibilidades. 🟧

Para poder organizarlos deberás:

🟠 Ordenar todos los combos por su precio de menor a mayor.
🟠 Una vez que lo hayas conseguido tendrás que mostrar dicho resultado utilizando el método table del objeto console.
*/

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

hamburguesas.sort((hamburguesa1, hamburguesa2)=>{
    // de menor a mayor
    // el return mueve al indice inferior al elemento2 si el return es mayor a 0
    // Quiero que el menor precio quede primero, por lo que hago 1-2
    return hamburguesa1.precio - hamburguesa2.precio
})

console.table(hamburguesas)