// El mas automatizable y el que recomiendo, pongan bien el name de los inputs apra que funcione
const submits = []

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e)=>{
    // evita el reset
    e.preventDefault()
    // usamos la clase de Js FormData para crear un objeto que contiene toda la info al momento del submit
    const informacion = new FormData(e.target)
    // usamos el metodo diseñado para la clase de arriba de Object para manejarlo más facil
    const submit = Object.fromEntries(informacion)
    submits.push(submit)
    console.table(submits)
})