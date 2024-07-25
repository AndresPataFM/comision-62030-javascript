const numero = 123

const numeroJSON = JSON.stringify(numero)

console.log(numeroJSON)

const JSONaNumero = JSON.parse(numeroJSON)

console.log(JSONaNumero)


const string = "123"

const stringJSON = JSON.stringify(string)

const JSONstring = JSON.parse(stringJSON)

console.log(JSONstring)

/* const auto = {
    color: "rojo",
    anio: 2017,
    marca: "ferrari",
    bocina: function(){console.log("sonido de bocina")}
}

console.log(auto)

const autoJSON = JSON.stringify(auto)

console.log(autoJSON)

const JSONauto = JSON.parse(autoJSON)

console.log(JSONauto)

// Guardo en el storage

localStorage.setItem("autoGuardado", autoJSON)
 */
// const autoStorage = localStorage.getItem("autoGuardado")

// console.log(autoStorage)

// const autoProcesado = JSON.parse(autoStorage)

// console.log(autoProcesado)

// sessionStorage.setItem("test", "hola")

class Gato {
    constructor(nombre, edadMeses, genero){
        this.nombre = nombre
        this.edadMeses = edadMeses
        this.edadAnios = parseInt(edadMeses/12)
        this.genero = genero
    }
    maullar(){
        console.log("miau")
    }
    presentar(){
        console.log(`Hola soy ${this.nombre}, soy un ${this.genero}, tengo ${this.edadMeses} meses.`)
    }
    acariciar(numero){
        console.log(`Acariciaste al gato ${numero} veces`)
    }
}

function agregarGatos(nombre, edad, genero){
    const gato = new Gato( nombre, edad, genero)
    gatos.push(gato)
    localStorage.setItem("gatos", JSON.stringify(gatos))
}

function recuperarDatos(){
    // busco en el storage los datos
    const gatosObtenidos = JSON.parse(localStorage.getItem("gatos"))
    console.log(" Gatos obtenidos", gatosObtenidos)
    // Si no los encuentro retorno un array vacio
    if(gatosObtenidos === null){
        return []
    } else {
        //Si los encuentro, los paso por la clase asi le agrego los metodos
        const nuevosGatos = []
        for(let i=0; i<gatosObtenidos.length; i++){
            nuevosGatos.push(new Gato(gatosObtenidos[i].nombre, gatosObtenidos[i].edadMeses, gatosObtenidos[i].genero))
        }
        return nuevosGatos
    }
}

const gatos = recuperarDatos()

console.log(gatos)

/* const ami = new Gato( "Ami", 17, "hembra")

console.log(ami)

// Para guardar
// 1 Convertir a json
// 2 setItem (nombreEnStorage, dato)

localStorage.setItem("Ami", JSON.stringify(ami))

// Recuperar de storage
// buscar en els torage
// convertir de JSON a JS
const gatoStorage = JSON.parse(localStorage.getItem("Ami"))

console.log(gatoStorage)

const gatoRecuperado = new Gato(gatoStorage.nombre, gatoStorage.edadMeses, gatoStorage.genero)

console.log(gatoRecuperado) */

/* agregarGatos("Pelusa", 23, "hembra")
agregarGatos("Mochito", 12, "macho")
agregarGatos("garfield", 55, "macho")
agregarGatos("ami", 72, "hembra") */
