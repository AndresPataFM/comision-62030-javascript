// Actividad 01:


let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index++) {
    console.log(texto);
}

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

// =========================================================

// Actividad 02:
let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));
for (let index = 1; index <= lados; index++) {
    if (index > 3) {
        alert("Señor, usted no puede ser un triangulo")
    }
    alert("lado"+index);
}

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?

// =========================================================

// Actividad 01:
// Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.

let numero = parseInt(prompt("ingrese un número"))
let restoDivididoDos = numero%2 // 0  //1
if(restoDivididoDos===0){
    alert(`El número ingresado ${numero} es un número par`)
} else {
    alert(`El número ingresado ${numero} es un número impar`)
}


// =========================================================

// Actividad 02:
// Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

// 

let condicion = true
while(condicion){
    const nro = parseInt(prompt("Ingrese un número para saber si es par"))
    const resto = nro % 2
    // el 0 es un número
    if(isNaN(resto)){
        alert("dato inválido")
    } else if(resto === 0){
        alert(`El nro ${nro} es par`)
    } else {
        alert(`El nro ${nro} es impar`)
    }
    condicion = confirm("¿Desea saber si otro número es par?")
}
// do{
//     const nro = parseInt(prompt("Ingrese un número para saber si es par"))
//     const resto = nro % 2
//     // el 0 es un número
//     if(isNaN(resto)){
//         alert("dato inválido")
//     } else if(resto === 0){
//         alert(`El nro ${nro} es par`)
//     } else {
//         alert(`El nro ${nro} es impar`)
//     }
//     condicion = confirm("¿Desea saber si otro número es par?")
// }while(condicion)
// let numero = 1;
// let final = "salir";

do{
    numero = prompt("Ingrese un numero o ingrese salir para terminar").toLocaleLowerCase()
    if(numero % 2 == 0){
        console.log(i + " es Par");
    }else if(i!=final){
        console.log(i + " es Impar");
    }
}while(numero!=final)
console.log("El programa termino");
