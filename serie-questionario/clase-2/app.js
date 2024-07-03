// Introducción de ciclos y control de flujo
// saludo
alert("Bienvenido a la trivia animal de hoy. ¡Veamos cuanto conocimiento animal tenés a tu disposición!")

// Respuestas
const primerPreguntaRespuesta = "A"
const segundaPreguntaRespuesta = "B"
const terceraPreguntaRespuesta = "C"
const cuartaPreguntaRespuesta = "B"
// Texto preguntas
const primerPreguntaTexto = "¿Qué animal tiene 1 pie? \n A | Caracol.\n B | Hornero\n C | Girafa \n D | Mollusco"
const segundaPreguntaTexto = "¿Que animal es más dañino al hombre? \n A | Tiburón.\n B | Mosquito\n C | Jaguarete \n D | Vaca"
const terceraPreguntaTexto = "¿Cuál animal es el que más se encuentra domesticado? \n A | Perro.\n B | Vaca\n C | Gallina \n D | Gato"
const cuartaPreguntaTexto = "¿Cuál es el animal más rapido? \n A | Cheeta.\n B | Halcón Peregrino\n C | Pez espada \n D | Gacela de Thomson"
// booleano para controlar el ciclo
let loop = true
while(loop){
  // texto validacion
  const textoValidacion = "\n Por favor solo ingrese A, B, C o D como respuesta"
  // preguntas
  let primerPregunta = prompt(primerPreguntaTexto+textoValidacion).toUpperCase()
  while(primerPregunta === "" || !isNaN(Number(primerPregunta)) || primerPregunta === null){
    primerPregunta = prompt(primerPreguntaTexto+textoValidacion).toUpperCase()
  }
  let segundaPregunta = prompt(segundaPreguntaTexto+textoValidacion).toUpperCase()
  while(segundaPregunta === "" || !isNaN(Number(segundaPregunta)) || segundaPregunta === null){
    segundaPregunta = prompt(segundaPreguntaTexto+textoValidacion).toUpperCase()
  }
  let terceraPregunta = prompt(terceraPreguntaTexto+textoValidacion).toUpperCase()
  while(terceraPregunta === "" || !isNaN(Number(terceraPregunta)) || terceraPregunta === null){
    terceraPregunta = prompt(terceraPreguntaTexto+textoValidacion).toUpperCase()
  }
  let cuartaPregunta = prompt(cuartaPreguntaTexto+textoValidacion).toUpperCase()
  while(cuartaPregunta === "" || !isNaN(Number(cuartaPregunta)) || cuartaPregunta === null){
    cuartaPregunta = prompt(cuartaPregunta+textoValidacion).toUpperCase()
  }
  
  // evaluación
  /* 
  Ternario (de sugar syntax)
  
  if(evaluador){
    return a
  } else {
    return b
  }
  
  es igual a realizar
  
  evaluador ? a : b

  */
  const primerPreguntaValidar = primerPregunta === primerPreguntaRespuesta ? "correcto" : "erróneo"
  const segundaPreguntaValidar = segundaPregunta === segundaPreguntaRespuesta ? "correcto" : "erróneo"
  const terceraPreguntaValidar = terceraPregunta === terceraPreguntaRespuesta ? "correcto" : "erróneo"
  const cuartaPreguntaValidar = cuartaPregunta === cuartaPreguntaRespuesta ? "correcto" : "erróneo"
  // Se puede agregar puntuación
  
  const evaluacion = `Habiendo realizado el test aca esta tu resultado: \n 1 - ${primerPreguntaRespuesta} vos ingresaste ${primerPregunta} lo que es ${primerPreguntaValidar}.\n 2 - ${segundaPreguntaRespuesta} vos ingresaste ${segundaPregunta} lo que es ${segundaPreguntaValidar}.\n 3 - ${terceraPreguntaRespuesta} vos ingresaste ${terceraPregunta} lo que es ${terceraPreguntaValidar}.\n 4 - ${cuartaPreguntaRespuesta} vos ingresaste ${cuartaPregunta} lo que es ${cuartaPreguntaValidar}.`
  alert(evaluacion)
  loop = confirm("¿Desea volver a realizar esta trivia?")
}

// Despedida
const despedida = "Espero que hayan disfrutado de estas preguntas de trivia, ojalá los veamos de vuelta pronto"
alert(despedida)
