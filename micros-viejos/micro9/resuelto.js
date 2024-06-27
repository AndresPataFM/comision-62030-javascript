// 🔶 Sobre el listado de productos recuperado y visualizado en HTML, incorpora un sistema de filtros para visualizar los productos listados. Deberás lograr que al ingresar sólo una parte del nombre de un producto, este se pueda visualizar.
// 🔶 Incorpora un <input type=search> en el documento HTML, arriba de donde listas los productos, y agrega esta funcionalidad de filtro. Ten presente que el usuario debe escribir y pulsar enter para aplicar el filtro.
// 🔶 Si hay productos coincidentes, deberán ser mostrados en la misma lista desordenada.
// 🔶 Al vaciar la caja de texto, se debe recuperar el listado de todos los productos.
// 🔶 Si no hay productos coincidentes con lo que el usuario escribió en el input type, utiliza Sweet Alert 2 para notificarle que no se encontraron productos coincidentes.

// Tips
// 🔹 No utilices input type text, aprovecha input type search y los eventos teclado e input.

// Micro 8
let listaProd = []

const lista = document.getElementById("lista")
const formularioBuscador = document.getElementById("formularioBuscador")
const buscador = document.getElementById("buscador")

const mostrarLista=(listaArray)=>{
    lista.innerHTML= ""
    listaArray.forEach(element => {
        const li = document.createElement("li")
        li.innerHTML=`${element.nombre} ($${element.precio})`
        lista.appendChild(li)
    });
}
const filtrarBusqueda=(consulta)=>{
    // utilizo combinacion de filter e includes
    // includes dice si un string contiene a otro y retorna un booleano
    let listaFiltrada = listaProd.filter(elemento=>{
        return elemento.nombre.toLowerCase().includes(consulta.toLowerCase())
    })
    return listaFiltrada
}

const buscadorFuncional = ()=>{
    formularioBuscador.addEventListener("submit",event=>{
        event.preventDefault()
        let valorBusqueda = buscador.value
        const resultadoBusqueda = filtrarBusqueda(valorBusqueda)
        if(resultadoBusqueda.length===0){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encuentra entre nuestros productos'
            })
        } 
        mostrarLista(resultadoBusqueda)
    })
}

setTimeout(()=>{
    fetch("./productos.json").then(rta=>{
        return rta.json()
    }).then(rta=>{
        mostrarLista(rta)
        // listaProd = rta.map(prod =>{
        //     // convertir a JSON y luevo retornarlo a JS rompe relacion de datos.
        //     return JSON.parse(JSON.stringify(prod))
        // })
        listaProd = rta
        // 2 maneras de hacer lo mismo, remover el disabled
        formularioBuscador[0].disabled=false
        formularioBuscador[1].removeAttribute('disabled')
        buscadorFuncional()
    })
},3000)