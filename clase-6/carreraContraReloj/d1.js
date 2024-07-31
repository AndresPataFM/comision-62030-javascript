/* 
https://drive.google.com/file/d/1VMKmoKPpLYa8Z00PAjfYN9bDUgW4x-Ay/view

🟧 Automatización de pedidos de hamburguesa 🟧

🟠 Trabajas en una empresa que va a revolucionar el mercado con su manera de preparar hamburguesas.
🟠 Debes automatizar los pedidos que incluyan el nombre, el precio, los ingredientes y el número de combo de la hamburguesa elegida por el usuario.
🟠 Almacena las instancias de la clase en un array de objetos llamado ❗'hamburguesas'❗, utilizando el método push().
🟠 Ten presente que: 

🔶 El precio debe ser un valor numérico y puede contener decimales (2). 
🔶 El número de combo también es numérico y debe ser un número entero. 
🔶 Por último, los ingredientes de cada hamburguesa deben estar contenidos en un array de elementos.

🔹 Crear en JS una clase con el nombre hamburguesa
🔹 En su constructor define "nombre", "precio", "ingredientes" y "número de combo"
🔹 Luego de definir la clase JS, deberás instanciar al menos 7 hamburguesas con las respectivas características solicitadas por el constructor, para hacerlo toma como base la siguiente información (lista al final)

Lista:

("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
'Aderezo'], 4)
("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)
*/

const hamburguesas = []

const redondear2 = function(num){
    //redondea a 2 cifras
    // Se utiliza epsilon para asegurarse de un buen redondeo
    // El 100 es como round redondea al entero, le agrego 2 cifras para redondear
    // Más preciso que hacer el toFixed(2) y luego parsearlo a un flotante con parsefloat()
    return Math.round((num + Number.EPSILON) * 100) / 100
}

class Hamburguesa{
    constructor(nombre, precio, ingredientes, numeroDeCombo){
        this.nombre = nombre
        this.precio = redondear2(precio)
        this.ingredientes = ingredientes
        this.numeroDeCombo = numeroDeCombo
    }
}

const agregarHamburguesas = (nombre, precio, ingredientes, numeroDeCombo)=>{
    // creo hamburguesa
    const hamburguesa = new Hamburguesa(nombre, precio, ingredientes, numeroDeCombo)
    // agrego al array
    hamburguesas.push(hamburguesa)
}

agregarHamburguesas("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
agregarHamburguesas("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
agregarHamburguesas("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
agregarHamburguesas("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
'Aderezo'], 4)
agregarHamburguesas("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
agregarHamburguesas("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
agregarHamburguesas("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
agregarHamburguesas("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)
console.log(hamburguesas)