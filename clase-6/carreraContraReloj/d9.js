/* 
https://drive.google.com/file/d/1jf5fWvhCNxUOpjGouta-ewNT09kPjQ7B/view

Mes de descuentos

🟧 Es el mes de la alimentación saludable y por ello la hamburguesería decidió aplicar un descuento del 15% sobre la hamburguesa 'krusty vegan'. Se olvidaron de avisarte y ya hay un cliente en el mostrador realizando su pedido y quiere dos combos. 🟧

Para poder entregar el pedido deberás:

🟠 Crear una constante llamada 'combo' donde filtrar el combo solicitado por el cliente.
🟠 Luego, crear una constante llamada 'mostrador' y en ella, mapea la información del combo solicitado por el cliente.
🟠 En esta constante deberás añadir una nueva propiedad llamada 'unidades' en donde se debe registrar el total de unidades pedidas por el cliente.
🟠 Finalmente deberás mostrar en la consola js la leyenda 'total $ ' concatenando en ésta el resultado del valor del unitario del combo, multiplicado por el total de unidades que compra el cliente.
🟠 Sobre este resultado, aplica el descuento del 15% de la promoción
*/

// copiamos parte del código del d8

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

const combo = []

const agregarCombo = (nroCombo)=>{
    let pedido = hamburguesas.find(hamburguesa=>{
        return hamburguesa.numeroDeCombo === nroCombo
    })
    if(pedido){
        combo.push(pedido)
    }
}

const agregarMultiplesCombos = (...combos)=>{
    // la magia del rest parameters, recibe todos los parámetros como un array
    combos.forEach(agregarCombo)
    console.table(combo)
}

agregarMultiplesCombos(1,2,7)

// no puedo declararlo antes de agregar combos
const mostrador = combo.map(pedido=>{
    pedido.unidades = parseInt(prompt(`Cuantas unidades de ${pedido.nombre} desea?`))
    pedido.precioPorCantidad = parseFloat(pedido.precio*pedido.unidades).toFixed(2)
    pedido.mensajeFactura = `${pedido.nombre} - $ ${pedido.precio} c/u - ${pedido.unidades} | Subtotal: $ ${pedido.precioPorCantidad}`
    return pedido
})

console.log("mostrador", mostrador)

const compra = ()=>{
    mostrador.forEach(elemento=>console.log(elemento.mensajeFactura))
    const total = mostrador.reduce((total, elemento)=>{
        return total + Number(elemento.precioPorCantidad)
    }, 0)
    console.log(`Por un total de: ${total}`)
}

compra()
