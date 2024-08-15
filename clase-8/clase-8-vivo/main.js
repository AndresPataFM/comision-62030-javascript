// setTimeout(()=>{
//   console.log("Pasaron 5 segundos")
// }, 5000)

/* console.log(1)

setTimeout(()=>{
  console.log(2)
}, 3000)

setTimeout(()=>{
  console.log(3)
}, 0)


console.log(4) */

/* let a = 0

const intervalo = setInterval(()=>{
  // console.log(a++)
  console.log(++a)
},1000)

console.log("intervalo", intervalo)

setTimeout(()=>{
  clearInterval(intervalo)
  console.log("Frena")
},10000) */

// clearTimeout(referenciaAlTiemeout)

/* try{
  console.log("Intenta esto")
  const hola = "hola"
  // hola = "chau"
  console.log("Funciono")
} catch (error){
  console.warn("Hubo un error: ", error)
} finally {
  console.log("termine")
} */

const promesa = new Promise((resolve, reject)=>{
  console.log("Me ejecute")
  const moneda = Math.floor(Math.random()*2) // 0 o 1
  if(moneda>0){
    resolve("Cara")
  } else {
    reject("Cruz")
  }
})

promesa.then(respuesta=>{
  console.log("Exito: ", respuesta)
}).catch(error=>{
  console.warn("Error: ",error)
})

// console.log("Tire una moneda, el resultado es " + promesa)

const listaPokemon = document.getElementById("pokemon")
let pokemones = []
function mostrarPokemones(){
  console.log("mostrando")
  console.log(pokemones)
  listaPokemon.innerHTML = ""
  pokemones.forEach(ele=>{
    const li = document.createElement("li")
    const nombre = document.createElement("h4")
    const urlPoke = document.createElement("p")
    nombre.innerText = ele.name
    urlPoke.innerText = ele.url
    li.appendChild(nombre)
    li.appendChild(urlPoke)
    listaPokemon.appendChild(li)
  })
}

const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
/* fetch(url).then(rta=>{
  console.log(rta)
  return rta.json()
}).then(respuesta=>{
  pokemones = respuesta.results
  mostrarPokemones()
  // console.log(pokemones)
}).catch(e=>{
  console.warn(e)
}) */

async function pedirPokemones(){
  try{
    const datosJSON = await fetch(url)
    const datosParseados = await datosJSON.json()
    pokemones = datosParseados.results
    mostrarPokemones()
  }catch(e){
    console.warn(e)
  }
}

pedirPokemones()


// setTimeout(function(){
//   console.lod("Pasaron 5 segundos")
// }, 5000)

// function tresSegundos(){
//   console.lod("Pasaron 3 segundos")
// }
// setTimeout(tresSegundos, 3000)


// setTimeout(()=>console.log(1), 1000)
// setTimeout(()=>console.log(2), 3000)
// setTimeout(()=>console.log(3), 5000)
// setTimeout(()=>console.log(4), 0)
// console.log(5)

// const countdown = setTimeout(()=>console.log("hola"), 5000)

// clearTimeout(countdown)
// console.log(countdown)
// let numero = 1
// const intervalo = setInterval(()=>{
//   console.log(numero++)
// }, 1000)

// setTimeout(()=>{
//   console.log("Alto")
//   clearInterval(intervalo)
// }, 10001)
// console.log("hola")

// try {
//   for(let i=0; i<5; i++){
//     console.log(i)
//   }
//   const numero = 5
//   // numero = "string"
//   console.log("Estoy aca en el medio")
// } catch (error) {
//   console.log("Error :", error)
// } finally {
//   console.log("finalize")
// }
// console.log("chau")


// const datos = ["🍕","🍔","🍟","🌭",]
// console.log("Bienvenido")

// try{
//   const ul = document.createElement("ul")
//   // simulamos que pedimos datos a una base de datos
//   datos.forEach((dato)=>{
//     const li = document.createElement("li")
//     li.innerText=dato
//     ul.appendChild(li)
//   })
//   document.body.appendChild(ul)
// } catch (err){
//   console.log("Error: ", err)
// }

// let datos = []

// const baseDatos = new Promise((resolve, reject)=>{
//   resolve(["🍕","🍔","🍟","🌭",])
// })

// try{
//   console.log("pedir datos")
//   const ul = document.createElement("ul")
//   baseDatos.then(datosRecibidos=>{
//     datos = datosRecibidos
//     console.log("recibi datos")
//     // simulamos que pedimos datos a una base de datos
//     datos.forEach((dato)=>{
//       const li = document.createElement("li")
//       li.innerText=dato
//       ul.appendChild(li)
//     })
//     document.body.appendChild(ul)
//     console.log("genere lista")
//   }).catch(err=>console.warn(err))
// } catch (err){
//   console.log("Error: ", err)
// }

// fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(respuesta=>{
//   return respuesta.json()
// }).then(respuestaJs=>{
//   console.log(respuestaJs)
// })

// async function pedirPokemon(){
//   try {
//     const datosJSON = await fetch("https://pokeapi.co/api/v2/pokemon")
//     const datos = await datosJSON.json()
//     console.log(datos.results)
//     const ul = document.createElement("ul")
//     datos.results.forEach(element => {
//       const li = document.createElement("li")
//       li.innerText = element.name
//       ul.appendChild(li)
//     });
//     document.body.appendChild(ul)
//   } catch (error) {
//     console.warn(error)
//   }
// }

// pedirPokemon()