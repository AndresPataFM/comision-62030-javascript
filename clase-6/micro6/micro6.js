/* 
Ejercicio 1: Usando el método `find`, encuentra si hay algún número par en el arreglo.
const numeros = [3, 9, 5, 2, 8, 7];
const tieneNumeroPar = numeros.find((num) => num % 2 === 0);
¿Esto es Verdadero o Falso?
*/
const numeros = [3, 9, 5, 12, 8, 7];
// const tieneNumeroPar = numeros.find((num) => num % 2 === 0);

// console.log(tieneNumeroPar)

// verdadero pero así esta mejor
const tieneNumeroPar = numeros.some((num) => num % 2 === 0);
console.log(tieneNumeroPar)


/* 
Ejercicio 2: Usa el método `filter` para obtener todos los nombres que tienen más de 5 letras.
const nombres = ['Ana', 'Juan', 'María', 'Luisa', 'Pedro', 'Pablo'];
const nombresLargos = nombres.filter((name) => name.length > 5);
*/

const nombres = ['Ana', 'Juan', 'María', 'Luisa', 'Pedro', 'Pablo', "Andres"];
const nombresLargos = nombres.filter((name) => name.length > 5);
console.log(nombresLargos)


/* 
Ejercicio 3: Utiliza el método `map` para convertir un arreglo de temperaturas en grados Fahrenheit a grados Celsius.
const fahrenheitTemps = [32, 68, 86, 104, 212];
const celsiusTemps = fahrenheitTemps.map((fahrenheit) => ((fahrenheit - 32) * 5) / 9);

¿Las temperaturas convertidas a grados Celsius son diferentes de las originales en grados Fahrenheit?

*/
const fahrenheitTemps = [32, 68, 86, 104, 212];
const celsiusTemps = fahrenheitTemps.map((fahrenheit) => ((fahrenheit - 32) * 5) / 9);

console.log(fahrenheitTemps)
console.log(celsiusTemps)

// correcto