/* const encontrame = document.getElementById("encontrame")

console.log(encontrame)

// lista viva de elementos html, no modifiquen los elementos al recorrerlo

/* const rojo = document.getElementsByClassName("rojo")
const azul = document.getElementsByClassName("azul")

console.log(rojo)
console.log(azul) */

/* 
const ul = document.getElementsByClassName("ul")

console.log(ul)

const li = document.getElementsByClassName("li")
console.log(li) 
*/

/* const ul = document.getElementsByTagName("ul")

console.log(ul)

const li = document.getElementsByTagName("li")
console.log(li) 

const query = document.querySelector(".rojo.fondo")
const query2 = document.querySelectorAll(".rojo")
const query3 = document.querySelector("#encontrame")
const query4 = document.querySelector("li")

console.log(query)
console.log(query2)
console.log(query3)
console.log(query4) */

/* 
innerText
innerHTML
id
classList
*/
/*
console.log(encontrame.id)
console.log(encontrame.innerText)
console.log(encontrame.innerHTML)
console.log(encontrame.classList)
console.log(encontrame.className)

encontrame.innerText = "Te encontre"
encontrame.className = "rojo"

encontrame.innerHTML = `
<ol>
  <li>dormir</li>
  <li>estudiar</li>
  <li>comer</li>
  <li>descanzar</li>
</ol>` 

*/

const header = document.createElement("header")

// header.innerText = " Bienvenido a mi pagina"

header.innerHTML = `
<h1>clase DOM</h1>
<nav>
  <ol>
    <li>home</li>
    <li>consultas</li>
    <li>contacto</li>
  </ol>
</nav>
`

// document.body.appendChild(header)
// console.log(header)

const frutas = ["Ananá", "Banana", "Durazno"," Kiwi", "Manzana", "Papaya"," Pera"]

const valorTitulo = "www.mandafruta.com"

function cargarDOM(){
  const titulo = document.getElementById("titulo")
  titulo.innerText = valorTitulo
  // const lista = document.getElementsByTagName("ul")[0]
  const lista = document.querySelector("#listado")
  // console.log(lista)
  lista.innerHTML = ""
  frutas.forEach(elemento =>{
    const li = document.createElement("li")
    li.innerText = elemento
    lista.appendChild(li)
  })
}

cargarDOM()

