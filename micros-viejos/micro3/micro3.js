/* 
Imaginemos un sistema de turnos médicos, queremos recorrer un ciclo FOR a partir de una función que recibe un parámetro numérico, el cual será quien defina cuántas veces iterará el ciclo para mostrar turnos disponibles para este mes:

¿Cómo podríamos lograrlo? 
*/

function turnosMensual(numero){
    for(let i = 1; i <= numero;i++){ // i++ es igual a i = i+1
        console.log("Turno: "+i)
    }
}


// ==================================================
// CREAR CALCULADORA
// Crea una función que reciba dos parámetros numéricos y un tercer parámetro correspondiente al operador aritmético. 
// La función debe retornar el resultado de la operación entre estos dos números.
// Crea una segunda función que utilice prompt() y le pida dos números al usuario. 
// Luego, crea un tercer prompt() que le pida al usuario el operador aritmético necesario para realizar la operación matemática.
// Esta misma función debe constatar que los 2 primeros valores ingresados sean números, y que el tercer valor ingresado sea un símbolo aritmético.
// Si todo está OK, deberá llamar a la primera función pasándole todos estos parámetros, y esperando que la función le retorne el resultado de la operación aritmética

function calculadora(primerNumero, segundoNumero, operador){
    // esta funcion retorna el resultado de un cálculo entre 2 números con el operador dado
    switch(operador){
        case "+":
            return primerNumero + segundoNumero;
        case "-": 
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        case "%":
            return primerNumero % segundoNumero;
        default:
            return "operador no reconocido"
    }
}
function validarNros(num1, num2){
    const num1Validado = isNaN(num1)
    const num2Validado = isNaN(num2)
    const noValido = num1Validado || num2Validado
    return noValido
}

function app(){
    // Pedir números
    let primerNumero = Number(prompt('Ingrese el primer número'))
    let segundoNumero = Number(prompt('Ingrese el segundo número'))
    // Pedir Operador
    const operador = prompt("Ingrese el operador")
    // valido números
    let nroInvalidos = validarNros(primerNumero, segundoNumero)
    while(nroInvalidos){
        // Fuerzo al usuario a ingresar números correctos
        alert('Uno de los números ingresados no es válido, intente de nuevo')
        primerNumero = Number(prompt('Ingrese el primer número'))
        segundoNumero = Number(prompt('Ingrese el segundo número'))
        nroInvalidos = validarNros(primerNumero, segundoNumero)
    }
    const resultado = calculadora(primerNumero, segundoNumero, operador)
    const respuesta = `La operación \r ${primerNumero} ${operador} ${segundoNumero} \r tiene como resultado: ${resultado}`
    alert(respuesta)
}

let loop = true
alert("Aca van a utilizar una calculadora, que use 2 números ingresados con el operador deseado")
while(loop){
    app()
    loop = confirm("¿Desea realizar otra operación?")
}

// ==================================================
// Find the bug
// Actividad 01:
/* Original
const IVA = 1.21;
let importe = prompt('Ingresa el importe sobre el cual quieres calcular el IVA:');

const precioConIVA = imp, iva => imp * iva;
precioConIVA(importe, IVA)
*/
const IVA = 1.21; 
let importe = parseFloat(prompt('Ingresa el importe sobre el cual quieres calcular el IVA:'));

const precioConIVA = (imp, iva) => imp * iva;
precioConIVA(importe, IVA)


// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

// Actividad 02:

/* Original
const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");
const calcularPoliza = m2 => { M2 * valorM2 * comision };
const valorPoliza = calcularPoliza(120);
console.log('El costo de la póliza es: $', valorPoliza);
*/
const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");
// const calcularPoliza = m2 => { 
//     return m2 * valorM2 * comision 
// };
const calcularPoliza = metrosAUtilizar => metrosAUtilizar * valorM2 * comision 
const valorPoliza = calcularPoliza(M2);
console.log('El costo de la póliza es: $', valorPoliza);

//  con M2 = 100 espero 3262.575

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?