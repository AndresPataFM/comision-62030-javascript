// Scope (Alcance)

// Bloque de código
// código declarado entre llaves {}

// El scope de las variable esta determinado por su tipo y donde fueron declarados.

// Cada bloque de código genera su propio scope

// Las funciones pueden transmitir datos de su scope

let global = "hola soy global"
{ // apodemoslo local 1
    let enScope = 1
    { // local 1a
        let enScope2 = 2
        var feo = 25
    }
}
{ // local 2
    let enScope3 = 3
    { // local 2a
        const enscope4 = 123132
    }
    { //local 2b
        // console.log(enscope4)
        var porque = "no me toquen"
    }
}
{ // local 3
    function soyFuncion(){ // local 3 soyFuncion
        var horrible = "no me usen"
        { // local 3 soyFuncion a
            var hediondo = "si me usan les bajan puntos"
            console.log("horrible", horrible)
        }
    }
    nunca = "Soy una implicita global y mi existencia es un crimen"
}
// soyFuncion()
// console.log("feo", feo)
// console.log("horrible", horrible)
// console.log("enScope", enScope)
// console.log("global", global)
// console.log("enScope2", enScope2)
// console.log("enScope3", enScope3)
// console.log("hediondo", hediondo)