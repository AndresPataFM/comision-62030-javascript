// obj lit

const usuario = {
  nombre: "Andrés",
  mail: "asdasd@aasdda",
  id: 12312332,
  saludar: function (){
    return "Bienvenido"
  }
};

// console.log(usuario.nombre)
// console.log(usuario.mail)
// console.log(usuario.id)
// console.log(usuario.saludar())

const dias =  [
  "domingo", // 0
  "lunes", // 1
  "martes", // 2
  "miércoles",
  "jueves",
  "viernes",
  "sábado"
]
console.log(dias)

// console.log(dias[2])
// console.log(dias[6])
// console.log(dias[7])
// console.log(dias[-1])

// cavernicola

// for(let i=0; i<7; i++){
//   console.log(dias[i])
// }

// dias = [
//   "domingo", // 0
//   "lunes", // 1
//   "martes", // 2
//   "jueves",
//   "viernes",
//   "sábado"
// ]


// console.log(dias)

// dias[1] = "inicio"
// dias[8] = "segundo descanzo"
// console.log(dias)
// console.table(dias)

// for(let i=0; i<7; i++){
//   console.log(dias[i])
// }
// console.log(dias[7])

// console.log(dias.length)

// length se puede considerar, el último índice+1
// dias[7] = "asd"

// for(let i=0; i<dias.length; i++){
//   console.log(dias[i])
// }

// for(let dia of dias){
//   console.log(dia, "nuevo")
// }

// dias.unshift("adelante")
// dias.push("final")
/* const diaShift = dias.shift()
console.log(diaShift) */
// const diaPop = dias.pop()
// console.log(diaPop)
// const textoParaUsuario = dias.join(", ")
// console.log(dias)

// console.log(`los días de la semana son: ${textoParaUsuario}`)

// const numeros = [1,2,3,4,5,5,5,6]


// console.log(numeros.indexOf(5))
// console.log(numeros.lastIndexOf(5))

/* const encontrarIndiceLunes = dias.indexOf("lunes")
console.log(encontrarIndiceLunes)
if(encontrarIndiceLunes>0){
  dias[encontrarIndiceLunes] = "segundo domingo"
} */

/* function agregarDia(elementoAAgregar){
  if(dias.includes(elementoAAgregar)){
    console.log("Ese día ya existe en la lista")
  } else {
    dias.push(elementoAAgregar)
    console.log("se agrego un día exitosamente")
  }
}
agregarDia("martes") */

// dias.sort()
console.log(dias)

const num2 = [1, 24, 2, 233, 7, 54, 123]

num2.sort()
console.log(num2)


const nombres = ["Diana", "Andrés", "Martín", "Joel"]

// nombres.reverse()

// A=>Z
// nombres.sort()

// Z=>A
/* nombres.sort()
nombres.reverse() */

// nombres.sort().reverse()

console.log(nombres)


// NO SE HACE NUNCA
/* delete dias[3]

for(let i=0; i<dias.length; i++){
  console.log(dias[i])
} */