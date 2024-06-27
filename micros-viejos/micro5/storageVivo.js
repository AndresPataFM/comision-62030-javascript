function saludar(nombre){
    alert(`Hola ${nombre} que gusto tenerte de nuevo`)
}

function pedirNombre(){
    let nombre = prompt("Hola nuevo usuario, digame su nombre")
    localStorage.setItem("nombreUsuario", nombre)
}

let conseguirNombre = localStorage.getItem("nombreUsuario")

if(conseguirNombre){
    saludar(conseguirNombre)
} else {
    pedirNombre()
}