// 🟠 CONTROL DE FLUJOS 🟠
// Darle a la maquina la habilidad de tomar decisiones

// 🔶 IF STATEMENT 🔶 
/*
La forma más sencilla de tomar decisiones

if(condición){
    ~código a ejecutar
}

si el condición es verdadero, se ejecuta el código interno, de lo contrario, no
*/
// 🔸 Ejemplos 🔸
// Un banco muestra alerta a quienes tengan saldo negativo

// let saldo = parseFloat(prompt("Ingrese su saldo en número"))

// if(saldo < 0){
//     alert("Tenes saldo negativo")
// }

// 🔶 IF ELSE STATEMENT 🔶 
/*
Permite tomar una acción cuando el condición es falso

if(condición){
    ~código 1
} else {
    ~código 2
}

si el condición es verdadero, se ejecuta el código 1, de lo contrario, se ejecuta el código 2
*/
// 🔸 Ejemplos 🔸
// El portero te deja entrar al boliche o no dependiendo de tu edad.

/* 
let edad = parseInt(prompt("Cuantos años tiene"))
if(edad >= 18){
    alert("pase")
} else {
    alert("usted es menor de edad, detengase")
} 
*/

// if(edad > 17){
//     alert("pase")
// } else {
//     alert("usted es menor de edad, detengase")
// }

// 🔶 ELSE IF STATEMENT 🔶
/*
Esto nos permite aclopar un if detras de un else 

if (condición1){
    ~código 1
} else if(condición2){
    ~código 2
}

si el condición 1 es verdadero, se ejecuta el código 1 y frena la ejecución del if. De lo contrario, si el condición 2 es verdadero y el condición 1 es falso, se ejecuta el código 2. Sino no se ejecuta nada.

A este le podemos acoplar un else al final

if (condición1){
    ~código 1
} else if(condición2){
    ~código 2
} else {
    ~código 3
}

El else final solo va a ejecutarse si ambos condicións son falsos

EN ESTE CASO, NUNCA SE EJECUTA EL CÓDIGO 3
if(condición1){
    ~código 1
} else { 
    ~código 2
} else if(condición2){
    ~código 3
}


*/
// 🔸 Ejemplos 🔸
// Le queres ofrecer algo para tomar a un amigo

// let pedido = prompt("¿Qué queres de tomar?").toLowerCase()

// if(pedido==="coca"){
//     alert("Aca tenés coca")
// } else if(pedido==="jugo"){
//     alert("toma jugo")
// } else {
//     alert("arreglate con agua")
// }

// 🔶 SWITCH 🔶
/* 
Un Switch es una manera avanzada de hacer un else if con un else al final en la que se compara un mismo valor contra varios valores distintos utilizando === con funcionalidades agregadas.

    Se utilizan las palabras reservadas:
    switch: declara que hacemos un switch
    case x: declaramos el caso en el que el valor vale x
    break: frenamos la ejecución del switch
    default: sería el caso equivalente al else final de un else if

switch(elemento){
    // if(elemento === condición1){
    //     // código 1
    // }
    case condición1:
        //estrictamente igual al condición 1
        // código 1
        break ➡️ opcional
    case condición2:
        // código 2
        break ➡️ opcional
    ...
    case condiciónFinal:
        // código Final
        break ➡️ opcional
    default:
        // equivalente a un else
        // código que se ejecuta si el resto es falso o si el caso anterior no tiene break
}
En el caso que un condición sea verdadero, se ejecuta el código de este hasta frenarse con un break, en el caso en el que ningún condición sea falso, 

*/
// 🔸 Ejemplos 🔸
// En un apartamento hay 6 inquilinos, 2 viven en el mismo cuarto, crea un algoritmo con switch para que nuestra máquina pueda con el nombre dado, decirle a que cuarto/piso ir

/* 
let nombre = prompt("diga su nombre").toLowerCase()

switch (nombre){
    case "andres":
        alert("1A")
        break
    case "diana":
        alert("1B")
        break
    case "jaime":
    case "juan":
        alert("2A")
        break
    case "laura":
        alert("2B")
        break
    case "matilda":
        alert("3")
        break
    default:
        alert("Usted no vive aqui")
} 
*/


// NOTA:UNO PUEDE ANIDAR TODOS LOS VISTOS ACA