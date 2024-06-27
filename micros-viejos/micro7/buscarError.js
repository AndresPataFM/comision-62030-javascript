/* 
function cargarDOM() {
    const titulo = document.querySelector("titulo")
    const listado = document.querySelector(".listado")
    titulo.innerText = "www.mandafruta.com"
    frutas.forEach(fruta => {
        listado.innerHTML += '<li>{fruta}</li>`
    })
}
*/
function cargarDOM() {
    const titulo = document.querySelector("#titulo")
    const listado = document.querySelector("#listado")
    titulo.innerText = "www.mandafruta.com"
    frutas.forEach(fruta => {
        listado.innerHTML += `<li>${fruta}</li>`
    })
}
// 🔶 Preguntas guía
// 🔹 ¿En qué se asemeja al código del ejercicio anterior? ¿En qué se diferencia?
// 🔹 ¿Qué debería ocurrir? ¿Cuáles son las instrucciones que da este código?
// 🔹 ¿Por qué eso no sucede?
// 🔹 ¿Cómo harías para lograr que el código se ejecute con éxito?