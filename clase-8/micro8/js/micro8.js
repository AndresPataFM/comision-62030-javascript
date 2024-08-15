/* 
🔸 Incorpora el siguiente archivo JSON al proyecto del desafío “productos.json”. 
🔸 Utiliza fetch para leer el archivo y guardar la información de este en un array llamado productos.
🔸 Utiliza una función asincrónica para leer los datos del archivo y guardarlos en el array.
🔸 Con todos estos datos, crea una lista HTML desordenada en el documento HTML, y agrega de forma dinámica el nombre del producto y su precio, encerrando este último dato dentro de paréntesis y anteponiendo al precio el símbolo $. 
🔸 Utiliza para recorrer los productos el método forEach() del array productos.
*/

const lista = document.querySelector("#listaProd")
const mostrarError = document.getElementById("error")

const ubicacionJSON = "./productos.json"
// const ubicacionJSON = "/clase-8/micro8/productos.json"

const mostrarInfo = async ()=>{
    try{
        console.log("inicio la petición")
        lista.innerHTML = ""
        const datosJSON = await fetch(ubicacionJSON)
        const datosParseados = await datosJSON.json()
        datosParseados.forEach(producto=>{
            const li = document.createElement("li")
            li.innerText = `${producto.nombre} - $ ${producto.precio}. Hay ${producto.stock} unidades`
            li.id = producto.id
            lista.appendChild(li)
        })
    }catch(e){
        mostrarError.innerText = `Error 404`
    }finally{
        console.log("Termino la petición")
    }
}

mostrarInfo()
