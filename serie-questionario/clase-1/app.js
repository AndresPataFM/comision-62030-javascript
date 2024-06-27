// Primera versión, se utilizaron variables, prompt y alert
// saludo
alert("Bienvenido a la trivia animal de hoy. ¡Veamos cuanto conocimiento animal tenés a tu disposición!")

// Respuestas
const primerPreguntaRespuesta = "A"
const segundaPreguntaRespuesta = "B"
const terceraPreguntaRespuesta = "C"
const cuartaPreguntaRespuesta = "B"

// /n se llama el newline character y se usa para hacer saltos de línea en un string

// preguntas
const primerPregunta = prompt("¿Qué animal tiene 1 pie? \n A | Caracol.\n B | Hornero\n C | Girafa \n D | Mollusco").toUpperCase()
const segundaPregunta = prompt("¿Que animal es más dañino al hombre? \n A | Tiburón.\n B | Mosquito\n C | Jaguarete \n D | Vaca").toUpperCase()
const terceraPregunta = prompt("¿Cuál animal es el que más se encuentra domesticado? \n A | Perro.\n B | Vaca\n C | Gallina \n D | Gato").toUpperCase()
const cuartaPregunta = prompt("¿Cuál es el animal más rapido? \n A | Cheeta.\n B | Halcón Peregrino\n C | Pez espada \n D | Gacela de Thomson").toUpperCase()

// evaluación
const evaluacion = `Habiendo realizado el test aca esta tu resultado: \n 1 - ${primerPreguntaRespuesta} vos ingresaste ${primerPregunta}.\n 1 - ${segundaPreguntaRespuesta} vos ingresaste ${segundaPregunta}.\n 1 - ${terceraPreguntaRespuesta} vos ingresaste ${terceraPregunta}.\n 1 - ${cuartaPreguntaRespuesta} vos ingresaste ${cuartaPregunta}.`

// Despedida
const despedida = "\n Espero que hayan disfrutado de estas preguntas de trivia, ojala los veamos de vuelta pronto"

alert(evaluacion+despedida)