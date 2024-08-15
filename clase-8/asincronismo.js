// 🟠 Timers
// Nota 1 segundo = 1000ms

// 🔹 setTimeout(funcion, tiempoMS)
// Ejecuta asincronicamente una funcion luego del tiempo dado
// Retorna su id numérico

// 🔹 setInterval(funcion, tiempoMS)
// Ejecuta asincronicamente una funcion de maenera ciclica luego de que pase el tiempo dado
// Retorna su id numérico

// 🔶 Crear
// setTimeout(funcion, tiempoMs)

// console.log('hola')
// const trabajar = (string)=>console.log(string)
// setTimeout(()=>{trabajar('trabajando')}, 10000)
// setTimeout(()=>trabajar('trabajando rapido'), 1000)
// console.log('chau')

// setInterval(funcion, tiempoMs)
// setInterval(()=>{console.log("tenes tiempo?")}, 1000)
// 🔶 Frenar

// clearTimeout(id)

// clearInterval(id)

// 🟠 Orden de ejecución
// Js tiene algo llamado el call stack, el la "pila de ejecución" y en ella se guardan lso códigos a ejecutar. Se puede imaginar como una pila de platos. Uno resuelve los platos a medida que van llegando, pero si se apilan platos, uno tiene que limpiar el de más arriba (el último proceso).
// Los pedidos sincrónicos van directamente al call stack y los asincrónicos van a algo llamado al Web Apis. Las cosas de web apis se van resolviendo asincrónicamente y una vez resueltas pasan al callback queue (fila de llamado). Si el call stack esta vació y terminaron los procesos sincrónicos, el primer proceso del callback queue entra al call stack.
// Se apilan platos cuando una función llama a otras o se hacen returns.

// Una buena página para verlo es esta: http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2VtcGllemEgc2luY3JvbmljbycpCmZ1bmN0aW9uIHNhbHVkYXIoc3RyaW5nKXsKICAgIGNvbnNvbGUubG9nKCKhSG9sYSAiICsgc3RyaW5nICsgIiEiKQp9CmZ1bmN0aW9uIG5vbWJyZSgpewogICAgcmV0dXJuICJBbmRy6XMiCn0KLy8gU2FsdWRvIHNpbmNy825pY28Kc2FsdWRhcihub21icmUoKSkKLy8gU2FsdWRvIGFzaW5jcvNuaWNvCnNldFRpbWVvdXQoZnVuY3Rpb24oKXtzYWx1ZGFyKCJKdWFuIil9LCAxMDAwMCkKc2V0VGltZW91dChmdW5jdGlvbigpe3NhbHVkYXIoIlBlZHJvIil9LCAxMDAwKQovLyBmb3IobGV0IGk9MDsgaTwzOyBpKyspewovLyAgICAgY29uc29sZS5sb2coaSkKLy8gfQpjb25zb2xlLmxvZygndGVybWluYSBzaW5jcvNuaWNvJyk%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// Nota: NO acepta emojis ni arrow functions de lo vieja que es

// 🟠 Try-Catch-Finally
// permite ejecutar código que pueda dar excepciones (errores) sin romper nuestro código. Es síncrono
// ◽ try : palabra reservada que indica que se va a tratar de ejecutar un bloque de código. Este si o si debe de ser seguido por un bloque de código a tratar de ejecutar y un bloque catch y/o un bloque finally.
// ◽ catch(excepcion) : si se realiza una excepción en el bloque try, se ejecuta el bloque de código que le sigue a catch. Recibe como parametro al excepción que se ejecuto en try.
// ◽ finally : seguido por un bloque de código que se ejecuta sí o si, independientemente si sucedio una excepción o no.

/* 

try {
    // codigoTry
} catch (excepcion) {
    // codigoCatch
} finally {
    // codigoFinally
}

*/
/* try{
    console.log("trabajando")
    // undefined.hola //error
    console.log("trabajando2")
} catch(err){
    console.error("Sucedio este error:",err)
} finally {
    console.log("terminamos")
} */
/* try{
    console.log("Inicio")
    undefined.asdasd
    console.log("Segundo")
    setTimeout(()=>{console.log('trabajando')}, 1000)
} catch(err){
    console.log("Utilizar datos locales")
    console.error("Sucedio este error:",err)
} finally {
    console.log("terminamos")
}   */

// 🟠 async-await
// genera una función asincrónica en la cual se pueden esperar asyncronicamente a datos dentro de su scrope.
// ◽async : para la función
/* 
async function nombre(){}
const nombre2 = async()=>{}
*/
// ◽await: es capaz de esperar el resultado de promesas y se utiliza solo cuando esta se resuelve


// 🟠 promesas
// son funciones objeto asíncronas de js
// ◽ Promise(función(resolve, reject)): constructor de promesas
// ◽ resolve(elemento): retorna exitosamente el elemento.
// ◽ reject(elemento): retorna el error elemento.
// ◽ .then(respuesta): se puede cocatenar al llamado de la promesa
// ◽ .catch(error): recibe el error de la promesa, se cocatena a esta.

/* Estados
1: Sin resolver

2A: Se resuelve exitosamente

2B: Es rechazada (No se cumplio)

*/

/* 
crear promesa
if(promesa){

}
*/

// const prometo = new Promise((resolve, reject)=>{
//     return resolve("Promesa exitosa")
// })

// const promesita = new Promise((resolve, reject)=>{
//     let booleano = confirm("Promesa?")
//     if(booleano){
//         return resolve("Exito")
//     } else {
//         return reject("Fallo")
//     }
// })

// async function pedidoApi(){
//     const datos = await promesita
//     console.log(datos)
// }
// setTimeout(pedidoApi, 3000)
// const numero = Number(prompt("Ingrese un número"))
// const prometo = new Promise((resolve, reject)=>{
//     if(numero===2){
//         return resolve("Es 2")
//     } else {
//         reject("eso no es 2")
//     }
// })

// prometo.then(respuesta=>{
//     console.log(respuesta)
// }).catch((error)=>{
//     console.log("Error",error)
// })

// 🟠 fetch
// una promesa que obtiene datos de un link
// fetch(link)
// normalmente se le hace:
/* 
fetch(link)
.then((respuesta)=>{
    respuesta.json() //suele ser un json
})
*/
// fetch("./miniproyecto3/products.json").then(respuesta=>{
//     return respuesta.json()
// }).then(respuesta2=>{
//     console.log(respuesta2)
//     respuesta2.forEach(element => {
//         console.log(element)
//     });
// })

/* 
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((respuesta)=>{
    return respuesta.json()
}).then((rta)=>{
    console.log(rta)
}).catch((err)=>{
    console.log(err)
})
*/

// 🟠 cors
//  Una api es una aplicación web del lado del servidor y utiliza apiREST
// con mockapi: https://mockapi.io/

const producto = {
    name:"Antipulgas Gato", 
    prodId:"001", 
    type:"Medicinal", 
    price:450, 
    stock:32, 
    description:"Antipulgas felino Frontline Plus"
}

const mockapiURL = "https://6448556450c25337443d67bc.mockapi.io/api/products"
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        // redirect: "follow",
        // referrerPolicy: "no-referrer", 
        body: JSON.stringify(data), // El mismo tipo de data declarado en el header
    });
    return response.json(); // parsea json
} 

// post | Agrega datos
// postData(mockapiURL, producto, "POST").then((data) => {
//     console.log(data);
// });

// get
async function getData(url = "") {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "GET"
    });
    return response.json(); // parsea json
}
getData(mockapiURL).then((data) => {
    console.log(data);
});


// DDOS casero
// while(true){
//     getData(mockapiURL).then((data) => {
//         console.log(data);
//     });
// }

// PUT | modifica datos
const productosModificado = {name:"Pelota", id:"012", type:"Juguete", price:"210", stock:9, description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)"}
async function putData(url = "", data = {}, id) {
    // Default options are marked with *
    const response = await fetch(url+"/"+id, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // El mismo tipo de data declarado en el header
        id: id,
    });
    return response.json(); // parsea json
}
// putData(mockapiURL,productosModificado, 1).then((data) => {
//     console.log(data);
// });

// Delete | borrar
async function deleteData(url = "", id) {
    // Default options are marked with *
    const response = await fetch(url+"/"+id, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    });
    return response.json(); // parsea json
}
// El id Cambia
// deleteData(mockapiURL, 1).then((data) => {
//     console.log(data);
// }); 









// ==================
// const URL = 'https://jsonplaceholder.typicode.com/posts'

// const pedirPosts = async () => {
//     const resp = await fetch(URL)
//     const data = await resp.json()

//     data.forEach((post) => {
//         const lista = document.querySelector('#contenedor')
//         const li = document.createElement("li")
//         li.innerHTML = `
//             <h4>${post.title}</h4>
//                         <p>${post.body}</p>`
//         lista.append(li)
//     })
// }

// pedirPosts()