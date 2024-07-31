/* 
https://drive.google.com/file/d/1v56hNqYiUmP9w_UDJx9L6YWmxc1YexN4/view

Pedidos Online

🟧  Fue un éxito el primer año de la hamburguesería, ahora se expanden y comienzan a tomar pedidos online. Estas actualizando su sistema y para corroborar que funcione realizas un pedido. 🟧

Para ello deberás:

🟠 Crear una constante denominada 'carrito'.
🟠 Busca en el array de objetos 'hamburguesas', los combos 3, 7, 8 y agrégalos en el array carrito.


*/

// Usamos find y push para solucionar todo

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

const carrito = []

const agregarCarrito = (combo)=>{
    let pedido = hamburguesas.find(hamburguesa=>{
        return hamburguesa.numeroDeCombo === combo
    })
    if(pedido){
        carrito.push(pedido)
    }
}

agregarCarrito(3)
agregarCarrito(7)
agregarCarrito(8)

console.log(carrito)