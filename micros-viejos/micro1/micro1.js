/* 
🔶 Crea un script en JS que le solicite al usuario ingresar mínimo 1(un) dato y le devuelva al usuario una acción involucrando el dato ingresado.
🔶 Luego, con JavaScript, realiza operaciones matemáticas (sobre datos numéricos) o de concatenación sobre entradas alfanuméricas. Al finalizar, muestra el resultado de dicha o dichas operaciones, utilizando alert() o console.log(), de acuerdo a lo que creas más conveniente.
*/
/* 
🔹 Código fuente en archivo JavaScript, con formato .js, vinculando a este con el archivo HTML mediante el tag <script>.
🔹 Usamos prompt() para solicitar datos al usuario y console.log() o alert() para mostrar el resultado de las operaciones realizadas con esos datos.
🔹 Si vas a sumar valores numéricos de una entrada, ten en cuenta parsearlos antes, usando parseInt() o parseFloat().
*/

// Saludador
const nombre = prompt("Ingrese su nombre")

// alert("Hola "+ nombre + " bienvenido al sitio")
alert(`Hola ${nombre} bienvenido al sitio`)

// Sumar números

const primerNumero = Number(prompt("Ingrese el primer número a sumar"))
const segundoNumero = Number(prompt("Ingrese el segundo número a sumar"))

const suma = primerNumero+segundoNumero

alert(`Sumando ${primerNumero} con ${segundoNumero} da ${suma}\r ${primerNumero} + ${segundoNumero} = ${suma}`)













// Practica de suma

// alert("A continuación, ingrese los números a sumar")

// // pido numero 1
// const numero1 = prompt("Ingrese el primer número a sumar")
// const num1Procesado = Number(numero1)

// /* pido numero 2 */
// const numero2 = prompt("Ingrese el segundo número a sumar")
// const num2Procesado = Number(numero2)

// const suma = num1Procesado+num2Procesado
// const resultado = "Sumando " + numero1 + " con " + numero2 + " obtenemos: " + suma
// // alert(resultado)
// // el "\r" hace un salto de linea en el string.
// const stringTemplate = `Sumando ${numero1} con ${numero2} obtenemos: ${suma} \r ${numero1} + ${numero2} = ${suma}`
// alert(stringTemplate)
