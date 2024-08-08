/* 
const frutas = ['Ananá', 'Banana', 'Durazno', 'Kiwi', 'Manzana', 'Papaya', 'Pera']

function cargarDOM(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "www.mandafruta.com"
    const lista = document.querySelector("#listado")
    frutas.forEach(fruta =>{
        const li = document.createElement("li")
        li.innerText = fruta
        lista.appendChild(li)
    })
}

cargarDOM()
*/

// const frutas = [
//     {nombre:'Ananá', icono: "🍍", precio: 500, id:1}, 
//     {nombre:'Banana', icono: "🍌", precio: 500, id:2}, 
//     {nombre:'Durazno', icono: "🍑", precio: 500, id:3}, 
//     {nombre:'Kiwi', icono: "🥝", precio: 500, id:4}, 
//     {nombre:'Manzana', icono: "🍎", precio: 500, id:5}, 
//     {nombre:'Papaya', icono: "🍐", precio: 500, id:6} 
// ]

// const carrito = []


// function cargarDOM(){
//     const titulo = document.getElementById("titulo")
//     titulo.innerText = "www.mandafruta.com"
//     const lista = document.querySelector("#listado")
//     frutas.forEach(fruta =>{
//         const li = document.createElement("li")
//         li.innerHTML = `
//         <h3>${fruta.nombre}</h3>
//         <span>${fruta.icono}</span>
//         <span>${fruta.precio}</span>
//         `
//         li.id = fruta.id
//         const button = document.createElement("button")
//         button.innerText = "comprar"

//         button.addEventListener("click", ()=>{
//             carrito.push(fruta)
//             console.table(carrito)
//         })
//         button.addEventListener("click", ()=>{
//             alert("click")
//         })

//         // console.dir(button)
//         // button.onclick = ()=>{
//         //     carrito.push(fruta)
//         //     console.table(carrito)
//         // }
//         // button.onclick = ()=>{
//         //     alert("click")
//         // }

//         li.appendChild(button)
//         lista.appendChild(li)
//     })
// }
const frutas = ['Ananá', 'Banana', 'Durazno', 'Kiwi', 'Manzana', 'Papaya', 'Pera', "Frutilla"]


function cargarDOM() {
    const titulo = document.querySelector("#titulo")
    const listado = document.querySelector("#listado")
    titulo.innerText = "www.mandafruta.com"
    listado.innerHTML = ""
    frutas.forEach(fruta => {
        listado.innerHTML += `<li>${fruta}</li>`
    })
}
cargarDOM()