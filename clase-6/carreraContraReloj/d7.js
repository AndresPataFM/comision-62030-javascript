/* 
https://drive.google.com/file/d/1DycsnvwEQmYBMrppl8f8AFNBppITyuqy/view

Se vienen los aumentos

🟧 En este desafío el gerente del local de hamburguesas
recibe una notificación que indica que debe aumentar el
precio de todos sus combos en un 11% y necesita tu
ayuda para lograrlo. 🟧

Para ello deberás:

🟠 Mapea dicho incremento almacenando el resultado de los nuevos combos en una constante llamada 'resultadoaumento'.
🟠 Luego deberás mostrar resultado en la consola Js, utilizando el método table del objeto console.
🟠 Ten presente que el incremento puede arrojar un precio con muchos decimales. ten la precaución de utilizar las funciones tofixed() y parsefloat() para mantener los decimales del precio, en dos dígitos o menos.
*/

// 11% de aumento es lo mismo que multiplicar por 1.11

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

const aumento = 1.11

const aumentoPrecio = (elemento)=>{
    elemento.precio = parseFloat(elemento.precio*aumento).toFixed(2)
    return elemento
}
const calcularAumento = ()=>{
    const inflacion =  hamburguesas.map(aumentoPrecio)
    console.table(inflacion)
    return inflacion
}

const resultadoaumento = calcularAumento(1.11)