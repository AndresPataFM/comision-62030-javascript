// 🔶 Definir Variables 🔶
/* 
🔸 Estructura 🔸
palabraReservada nombreSinEspacio = valor;

let //se puede reasignar valor
const //no se puede reasignar valor

var ⛔ No la usen

*/

// reasignar valores (modificar)
// nombre = valor-nuevo

let numerito = 5;
numerito = 3;

let variable1 = "var1";
variable1 = false;

const numerote = 555555;

// Nomenclatura
let camelCase;
let snake_case;
let PascalCase; // Reservada para casos especiales

// let kebab-case; // No es funcional en Javascript


const num1 = 2;
const num2 = 5*2;

var mala = false; //no la usen


const suma = num1 + num2;

console.log("suma:", suma)
// console.log("floats", 1.2-1)
// alert("Bienvenido a mi página")

// const confirmando = confirm("¿Si o no?")
// console.log("confirmando: ",confirmando)

const pidiendo = prompt("Decime tu nombre")
console.log(pidiendo)

// Concatenar strings:
const concatenar = "hola" + "chau" // "holachau"
const estoNo = "hola" - "chau" // Nan

// Conversion innata de tipo de datos en JS
// Normalmente, al operar con strings, es asi si se suma:
const stringONumero1 = "5" + 3 // '53'
const stringONumero2 = "5" + "24" // '524'
// pero si se trata de restar, dividir o multiplicar:
const stringONumero3 = "5" - 3 // 2
const stringONumero4 = "25"/"5" // 5
const stringONumero5 = "7"*"4" // 28


// 🔶 Template Strings | Template literals 🔶
// Con las backtick ` y ${} se pueden insertar lógica de Js a strings
// pueden insertarse variables
let manzanaInicial = 7

const templateString = `Si Juan tiene 7 manzanas y le regala 3 a Pedro le quedan ${manzanaInicial-3} manzanas`

