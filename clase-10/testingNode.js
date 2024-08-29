// console.log("hola")
// console.table([1,2,3,4,5])

// No hay document ni herramientas relacionadas
// alert()
// document.createElement("div")


const fs = require("fs")

// crear
// fs.writeFileSync("ejemplo.txt", "Hola, me crearon con node.")

// leer
// console.log(fs.readFileSync("ejemplo.txt"))

// agregar al final | apend
fs.appendFileSync("ejemplo.txt", " A mi me agregaron con node.")
