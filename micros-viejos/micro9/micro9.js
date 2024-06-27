// 🔶 Sobre el listado de productos recuperado y visualizado en HTML, incorpora un sistema de filtros para visualizar los productos listados. Deberás lograr que al ingresar sólo una parte del nombre de un producto, este se pueda visualizar.
// 🔶 Incorpora un <input type=search> en el documento HTML, arriba de donde listas los productos, y agrega esta funcionalidad de filtro. Ten presente que el usuario debe escribir y pulsar enter para aplicar el filtro.
// 🔶 Si hay productos coincidentes, deberán ser mostrados en la misma lista desordenada.
// 🔶 Al vaciar la caja de texto, se debe recuperar el listado de todos los productos.
// 🔶 Si no hay productos coincidentes con lo que el usuario escribió en el input type, utiliza Sweet Alert 2 para notificarle que no se encontraron productos coincidentes.

// Tips
// 🔹 No utilices input type text, aprovecha input type search y los eventos teclado e input.

const productos = [
    {nombre:"manzana"},
    {nombre:"pera"},
    {nombre:"lechuga"},
    {nombre:"tomate"},
    {nombre:"papa"},
    {nombre:"anana"},
    {nombre:"palta"}
]

const formBuscador = document.getElementById("buscador")
const inputBuscador = document.getElementById("busqueda")
const submitBuscador = document.getElementById("formSubmit")
const listaFrutas = document.getElementById("listaFrutas")

const buscarInput = (criterioBusqueda)=>{
    const resultado = productos.filter((fruta)=>{
        return fruta.nombre.includes(criterioBusqueda)
    })
    return resultado
}

formBuscador.addEventListener("submit", (e)=>{
    e.preventDefault()
})

inputBuscador.addEventListener("input", ()=>{
    const resultadoBusqueda = buscarInput(inputBuscador.value)
    listaFrutas.innerHTML = ""
    if(resultadoBusqueda.length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No encontramos ninguna fruta que coincida en nuestra base de datos!',
        })
    } else {
        resultadoBusqueda.forEach(fruta=>{
            const li = document.createElement("li")
            li.innerText=`${fruta.nombre}`
            listaFrutas.appendChild(li)
        })
    }
})