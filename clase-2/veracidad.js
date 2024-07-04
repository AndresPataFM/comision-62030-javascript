// 🟧 Veracidad 🟧

/* Para todo esto es muy útil saber que es la precedencia de operadores de javascript: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence */

// 🔹Booleanos / Booleans
// Tipo de dato que indica veracidad
true //verdadero
false //falso

// 🟠 Truthy/Falsey 🟠
// Cuando a JS uno le "forza" evaluar la veracidad de algo, a ciertos valores

// 🔶 Truthy 🔶
/*
    numeros distintos a 0
    strings no vacios
    objetos menos document.all (los arrays son objetos)
    Infinity
*/

// 🔶 Falsey 🔶
/* 
    null
    undefined
    NaN
    0
    -0
    0n <--- Esto es un BigInt 0
    "" <--- String vacio
    document.all <--- objeto documento del DOM
*/

// 🟠 Coerciones de tipo 🟠
// A Js, en un descenso a la locura, se le ocurrio que ciertos valores eran lo suficientemente parecidos. Hay más pero por ahora nos interesan estos:
/*
    0   ⇌ false ⇌ "false"
    1   ⇌ true  ⇌ "true"
    "0" ⇌   0   ⇌ false
    0   ⇌  ""   ⇌ false
*/

// 🟠 Operadores de comparación y lógicos 🟠
// 🔶 Lógica 🔶
/* 
🔹 AND && (Y lógico)
Compara la veracidad de 2 valores y si ambos son verdaderos, retorna verdadero. Intenta retornar el valor falso.

a && b

true && true ➡️ true
true && false ➡️ false
false && true ➡️ false
false && false ➡️ false

🔹 OR || (O lógico)
Compara la veracidad de 2 valores y si uno de los dos es verdaderos, retorna verdadero. Intenta retornar el valor verdadero.

a || b

true || true ➡️ true
true || false ➡️ true
false || true ➡️ true
false || false ➡️ false

🔹 NOT ! No lógico
Invierte la veracidad del argumento. Siempre retorna un booleano.

!a

!true ➡️ false
!false ➡️ true

🔹 Prioridades 
Primero por el tipo de operador (en orden descendiente)
! (15)
&& (5)
|| (4)
Luego se resuelve de izq a der a misma prioridad


*/
// 🔶 Comparación 🔶
// Estos valores retornan un booleano
/*
🔹 mayor y menor > <
Para diferenciarlos, leanlo de izquierda a derecha, la "boca" del cocodrilo come al más grande

a < b ➡️ a es menor que b
a > b ➡️ a es mayor que b

De respetarse, retorna ture, sino false

2 < 3 ➡️ true
2 < 2 ➡️ false
2 < 1 ➡️ false

2 > 3 ➡️ false
2 > 2 ➡️ false
2 > 1 ➡️ true


❓Cosas raras:
◽Si se comparan dos tipos de datos distintos, Js va a hacer conversiones de tipo hasta podr compararlos
◽Si se comparan 2 strings revisa su orden en unicode UTF-16 de cada caracter hasta encontrar uno que sea mayor que el otro, al encontrarlo declara cual es mayor
◽En arrays se ve un comportamiento igual al string, revisa en orden los valores hasta encontrar el mayor y ahí para
◽Se rompe con objetos que no son arrays, siempre da falso

🔹 mayor igual y menor igual
Similar con el anterior, el = va siempre despues del <>, acuerdense que es como se lee, sino van a tratar de asignar un valor

a <= b ➡️ a es menor o igual que b
a >= b ➡️ a es mayor o igual que b

2 <= 3 ➡️ true
2 <= 2 ➡️ true
2 <= 1 ➡️ false

2 >= 3 ➡️ false
2 >= 2 ➡️ true
2 >= 1 ➡️ true

❓Cosas raras:
◽Las 3 primeras son iguales que la anterior
◽En objetos que no son arrays, =< y >= es true

🔹 Estrictamente igual ===
El estrictamente igual compara 2 valores y si el valor y el tipo de dato es el mismo, retorna verdadero

a === b ➡️ a estrictamente igual que b

1 === 1 ➡️ true
1 === "1" ➡️ false, si bien el valor es el mismo, el tipo de dato no lo es.
1 === 1.0 ➡️ true, es la unica excepción a la regla el que x y x.0000000 son iguales, ya que Js corta los 0 extra a los números, dejandolo como X
1 === "hola" ➡️ false
1 === "uno" ➡️ false

🔹 Estrictamente distinto !==
Igual al anterior pero invierte su veracidad, cuando ants era true, ahora es false y viceversa

a !== b ➡️ a es estrictamente distinto de b

1 !== 1 ➡️ false
1 !== "1" ➡️ true
1 !== 1.0 ➡️ false
1 !== "hola" ➡️ true
1 !== "uno" ➡️ true

Eviten comparar objetos, se van a volver locos

🔹 Similar ==
El similar, compara los valores de 2, pero Js intenta hacer cambios de tipo para ver si encuentra una igualdad

a == b ➡️ a es similar a b

1 == 1 ➡️ true
1 == "1" ➡️ true
1 == true ➡️ true
1 == 1.0 ➡️ true
1 == "hola" ➡️ false
1 == "uno" ➡️ false
1 == "one" ➡️ false
1 == "true" ➡️ false

Uno se suele marear por lo que puse una tabla en imagenes

🔹 Distinto !=
Agarra los resultados de similar y los invierte.

a != b ➡️ a es distinto de b

1 != 1 ➡️ false
1 != "1" ➡️ false
1 != 1.0 ➡️ false
1 != "hola" ➡️ true
1 != "uno" ➡️ true
1 != "true" ➡️ true
*/

// -------------------------------
/* Gracias a 
https://images.ctfassets.net/pzhspng2mvip/4Yjbirf0erVGNX9UgqgTaM/a31e6676df6fd6416a074e98e195534d/vE9vrNwmf.png 
https://algassert.com/visualization/2014/03/27/Better-JS-Equality-Table.html
https://i.imgur.com/rWoBHj4.png
por las imagenes
*/
// función que evalua veraidad
function veracidad(elemento){
    elemento? 
    console.log("true/truthy")
    :
    console.log("false/falsey")
}
// Doble not
// convierte a algo en booleano
// !! dato

// Boolean(x)
// convierte a x en booleano