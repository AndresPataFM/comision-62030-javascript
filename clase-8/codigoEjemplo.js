// const objetoEjemplo = {
//   nombre: "nombre",
//   precio: 456,
//   id: "asjdh123ksn8"
// }

// console.log("hola")
// try{
//   const objeto = null
//   console.log("Obteniendo Datos")
//   console.log(objeto.nombre)
//   console.log("test")
// }catch(error){
//   console.warn("Error captado: ",error)
// } finally {
//   // Este es optativo
//   console.log("Termina la operación")
// }

// console.log("chau")

// setTimeout(()=> {console.log("Proceso asincrónico")}, 3000)
// function proceso(){
//   console.log("Proceso asincrónico")
// }

// console.log("Inicio")

// setTimeout(proceso, 3000)

// console.log("Fin")

// Inicio Fin Proceso asincrónico

// console.log(1)
// setTimeout(()=>{console.log(2)},2000)
// setTimeout(()=>{console.log(3)},0)
// console.log(4)
// let i = 1
// let j = 1
// const intervalo = setInterval(()=>{console.log("i" ,i++)}, 1000)
// const intervalo2 = setInterval(()=>{console.log("j",++j)}, 1000)

// console.log("Este es mi intervalo", intervalo)

// console.log("id timeout",setTimeout(()=>{
//   clearInterval(intervalo)
//   console.log("Quieto")
// }, 5000))

// conseguir


// const prometo = new Promise((resolve, reject)=>{
//   return resolve("Promesa exitosa")
// }).then((dato)=>{
//   console.log("Dato recibido", dato)
// })


// const promesita = new Promise((resolve, reject)=>{
//   let booleano = confirm("Promesa?")
//   if(booleano){
//     return resolve("Exito")
//   } else {
//     return reject("Fallo")
//   }
// }).then((dato)=>{
//   console.log("Dato recibido", dato)
// }).catch(error=>{console.warn(error)})
// console.log(promesita)

// const datos = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(datos=>{
//   console.log(datos)
//   return datos.json()
// }).then(respuesta=>{
//   const lista = document.getElementById("lista")
//   respuesta.forEach(element => {
//     console.log(element)
//     const li = document.createElement("li")
//     li.innerText = `${element.userId} - ${element.title} : ${element.body}`
//     lista.appendChild(li)
//   });
// })

// const poke = fetch("https://pokeapi.co/api/v2/pokemon")
// .then(rta=>{
//   return rta.json()
// }).then(rta=>{
//   console.log(rta)
//   const lista = document.getElementById("lista")
//   rta.results.forEach(element => {
//     console.log(element)
//     const li = document.createElement("li")
//     li.innerText = `${element.name}`
//     lista.appendChild(li)
//   })
// })


// console.log(datos)

async function conseguirDatos(){
  const lista = document.getElementById("lista")
  try {
    // pedir datos
    const datosJSON = await fetch("https://pokeapi.co/api/v2/pokeasdmon")
    // parsearlos
    const datosParseados = await datosJSON.json() 
    // usar los datos parseados
    console.log(datosParseados)
    datosParseados.results.forEach(element => {
      console.log(element)
      const li = document.createElement("li")
      li.innerText = `${element.name}`
      lista.appendChild(li)
    })
  } catch (error) {
    console.warn("Error: ", error)
    lista.innerHTML="ERROR AL CONSEGUIR LOS DATOS"
  }
}
conseguirDatos()