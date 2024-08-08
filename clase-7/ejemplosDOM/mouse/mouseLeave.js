const mouseLeave = document.getElementById("caja-eventos")

mouseLeave.addEventListener("mouseleave", ()=>{
  mouseEnter.classList.remove("adentro")
  mouseEnter.classList.toggle("resaltar-texto")
})