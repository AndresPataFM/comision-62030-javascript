const contador = {
  valor: 0,
  html: document.getElementById("contador")
}
const btnClick = document.getElementById("btnClick")

function aumentarContador(){
  contador.valor ++
  contador.html.innerText = contador.valor
}

btnClick.addEventListener("click", aumentarContador)

// Con función anónima
/* 
btnClick.addEventListener("click", ()=>{
  contador.valor ++
  contador.html.innerText = contador.valor
}) 
*/
