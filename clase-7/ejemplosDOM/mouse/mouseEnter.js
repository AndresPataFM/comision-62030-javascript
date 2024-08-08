const mouseEnter = document.getElementById("caja-eventos")

mouseEnter.addEventListener("mouseenter", ()=>{
  mouseEnter.classList.add("adentro")
  mouseEnter.classList.toggle("resaltar-texto")
})