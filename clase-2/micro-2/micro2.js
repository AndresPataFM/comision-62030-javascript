// Actividad 01:
/* 
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index) {
  console.log(texto);
} 
*/
let cantidad = Number(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 1; index <= cantidad; index++) {
  console.log(texto);
} 

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?


// Actividad 02:
/* 
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
  if (index > 3) {

  }
  alert("lado");
} 
*/

let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));
for (let index = 0; index < lados; index++) {
  if (index > 3) {
    // alert("Tenés más lados que un triagulo")

    // alert("No puede ser un  triángulo")

    // alert("Esa cantidad de lados es ilegal")
    // break
  }
  alert("lado");
} 

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?
