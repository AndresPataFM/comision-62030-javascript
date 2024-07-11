// 🟠 Ciclos 🟠
// Permite iterar/repetir un proceso bajo condiciones predefinidas
// Es importantisimo que dicho argumento se vuelva falso eventualmente en el ciclo que repeticiones infinitas rompen a la máquina.

// 🔶 FOR 🔶
/* 
En el for:
    -declaramos/seleccionamos una variable a evaluar
    -le ponemos una condición/argumento
    -decimos como se modifica la variable sobre la que iteramos
    -Declaramos un código a ejecutar por iteracion

    for(variable; condición; modificación){
        ~código a ejecutar
    }
*/
// 🔸 Ejemplos 🔸

// for(let i=0; i<5; i=i+1){
//     console.log("Este es i:", i)
// }

// Un for que permite calcular el número X (ingresado pro prompt) de la secuencia de fibonacci

// let contar = parseInt(prompt("Hasta que número deseas contar"))

// for(let i=0; i<contar; i=i+1 ){
//     console.log(i)
// }
// i = i+1
// i++


// 🔶 WHILE 🔶
/* 
El while es un bucle que repite el código siempre y cuando su argumento sea verdadero

while(argumento){
    ~código a ejecutar
    En algún momento aca, el argumento se tiene que volver falso
}

Suele ser más propenso al error ya que el código a ejecutar en si debe volver el argumento falso ya que no fuerza a uno a poner la condición

Ciclo infinito, explota todo (el alert hace que tengamos chance de cerrar antes de que implote del todo)
while(true){
    alert("hola")
}

*/
// 🔸 Ejemplos 🔸

// let saludo = true
// while(saludo){
//     alert("¡HOLA!😀")
//     saludo = confirm("¿Otro saludo?")
// }

// Una caja de donaciones

// 🔶 DO WHILE 🔶
/* 
El do while es un bucle que repite el código siempre y cuando su argumento sea verdadero, su diferencia con el while es que primero ejecuta el código y luego lo verifica

do{
    ~código a ejecutar
}while(argumento)

Se suele utilizar cuando se quiere ejecutar el código al menos 1 vez aunque este sea falso. esto es común cuando uno quiere que el usuario ingrese un dato y uno lo mantiene en el ciclo al menos que sea validado.

*/
// 🔸 Ejemplos 🔸

// Nunca saludo pero siemrpe despido al menos una vez.


// let saludo = false
// let despedida = false
// while(saludo){
//     alert("¡HOLA!😀")
//     saludo = confirm("¿Otro saludo?")
// }
// do{
//     alert("¡Chau!😥")
//     despedida = confirm("¿Otra despedida?")
// } while(despedida) 


// Log in con X cantidad de intentos

/* 
let texto = ""
do{
    texto = prompt("Ingrese sus datos. No puede estar vacío")
}while(texto === "" || texto === null)

*/


// 🟠 continue 🟠
// es una palabra reservada de uso exclusivo en ciclos que hace que se salte a la proxima iteración

/* 
for(let i=0; i<5; i=i+1){
    console.log("Este es i inicial:", i)
    if(i===3){
        continue
    }
    console.log("Este es i final:", i)
} 
*/

// 🟠 break 🟠
// es una palabra reservada para ciclos y switch que ahce que se termine el proceso actual (el switch o el ciclo). No es lo mismo que frenar por haber cambiado la condición a falso.

/* 
for(let i=0; i<5; i=i+1){
    console.log("Este es i inicial:", i)
    if(i===3){
        break
    }
    console.log("Este es i final:", i)
} 
*/