// 🟠 DOM 🟠
// El Document Object Model es el modelo de organización en nodos a base del objeto Document que tenemos en aplicaciones Web.

// 🔶 Encontrar Nodos 🔶
// 🔹 document.getElementById 🔹
// similar al find
const porId = document.getElementById("important")
// console.log(porId)
// console.dir(porId)

// 🔹 document.getElementsByClassName 🔹
const porClase = document.getElementsByClassName("estilado")
// console.log(porClase)

// 🔹 document.getElementsByTagName 🔹
const porTag = document.getElementsByTagName("h1")
// console.log(porTag)
// 🔹 document.querySelector 🔹
const porQuery1 = document.querySelector("h1")
const porQuery2 = document.querySelector(".estilado")
const porQuery3 = document.querySelector("#important")
// console.log("etiqueta",porQuery1)
// console.log("clase",porQuery2)
// console.log("id",porQuery3)
// 🔹 document.querySelectorAll 🔹
const porQueryAll1 = document.querySelectorAll("p")
const porQueryAll2 = document.querySelectorAll(".estilado")
const porQueryAll3 = document.querySelectorAll("#important")
// console.log("etiqueta",porQueryAll1)
// console.log("clase",porQueryAll2)
// console.log("id",porQueryAll3) //No lo usen, usen querySelector

// 🔶 Modificar Nodos 🔶
// console.dir(porId.className)
// string único

// 🔹 classList 🔹
// console.dir(porId.classList)

// 🔹 innerHTML => template literals 🔹

const pasos = ["ingredientes", "mezclar", "pre calentar horno", "hornear 30 min", "sacar y dejar enfriar durante la noche"]

const lista = document.getElementById("lista")
console.log(lista)
pasos.forEach(paso=>{
    lista.innerHTML += `<li>${paso}</li>`
})


const frutas = ['Ananá', 'Banana', 'Durazno', 'Kiwi', 'Manzana', 'Papaya', 'Pera']

const cargarDOM = ()=>{
    // modifico el texto
    const titulo = document.getElementById("titulo")
    titulo.innerText = "www.mandafruta.com"

    // modifico el innterHTML
    const listado = document.getElementById("listado")
    frutas.forEach(fruta=>{
        listado.innerHTML += `<li>${fruta}</li>`
    })
}
cargarDOM()