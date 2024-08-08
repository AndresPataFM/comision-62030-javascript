const posicion = {
  x: 50,
  y: 50
}

const player = document.getElementById("player")

function moverJugador(){
  player.style.left = `${posicion.x}%` 
  player.style.top = `${posicion.y}%`
}


document.addEventListener("keydown", evento => {
  // Capturo la texla y dependiendo de la tecla ingresada hago algo distinto
  switch(evento.key){
    case "ArrowUp":
    case "w":
      posicion.y--
      moverJugador()
      break
    case "ArrowDown":
    case "s":
      posicion.y++
      moverJugador()
      break
    case "ArrowRight":
    case "d":
      posicion.x++
      moverJugador()
      break
    case "ArrowLeft":
    case "a":
      posicion.x--
      moverJugador()
      break
  }
})