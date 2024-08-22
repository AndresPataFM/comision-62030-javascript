function conseguirDatos(){
  const datos = new Promise(function(resolve, reject){
    // Arbitrariamente le doy chance de fallar para mostrar ambos casos
    // resolve([1,2,3,4])
    if(Math.random()>=0.5){
      resolve([1,2,3,4])
    } else {
      reject("mala suerte")
    }
  })
  // Se ve como promesa incompleta (pending)
  // console.log(datos)
  return datos
}


// Como no es asincrónico se ve como promesa incompleta (pending)
// console.log(conseguirDatos())
/* const datosTrabajo = conseguirDatos()
datosTrabajo.forEach(element => {
  console.log(element)
}); */


// cadena de .then
conseguirDatos().then(function(respuesta){
  // Como verificamos asincrónicamente LUEGO de que se resolvio la promesa, vemos el Fulfilled o el Rejected
  console.log(respuesta)
}).catch(e => Swal.fire({
        title: "Error!",
        color: "#d47a20",
        text: `${e}`,
        icon: "error"
}))

// async function

// async function usarDatos(){
//   try{
//     const datos = conseguirDatos()
//     console.log(datos)
//   }catch(e){
//     Swal.fire({
//       title: "Error!",
//       color: "#d47a20",
//       text: `${e}`,
//       icon: "error"
//   })
//   }
// }

// usarDatos()