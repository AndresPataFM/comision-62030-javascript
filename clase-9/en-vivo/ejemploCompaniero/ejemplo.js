const formularioPreguntas = document.getElementById("preguntas")
let preguntas = []

function mostrarPreguntas(){
  formularioPreguntas.innerHTML = ""
  preguntas.forEach(ele=>{
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const ul = document.createElement("ul")
    h3.innerText = ele.pregunta
    ele.opciones.forEach((e, index)=>{
      const li = document.createElement("li")
      li.innerText = e
      li.addEventListener("click", ()=>{
        Swal.fire({
          title: index === ele.respuesta ? "Correcto" : "Equivocado",
          text: `La respuesta correcta es ${ele.opciones[ele.respuesta]}`,
          icon: index === ele.respuesta ? "success" : "error"
        });
      })
      ul.appendChild(li)
    })
    div.appendChild(h3)
    div.appendChild(ul)
    formularioPreguntas.appendChild(div)
  })
}


async function conseguirDatos(){
  try {
    const url = "./info.json"
    const datosJSON = await fetch(url)
    const datos = await datosJSON.json()
    preguntas = datos
    mostrarPreguntas()
  } catch (error) {
    console.warn(error)
  }
}

conseguirDatos()