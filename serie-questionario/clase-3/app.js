// Se agregan funciones
// === Variables ===
// Puntuación
let puntuacion = 0
const puntuacionMaxima = 4
// Intentos
let intentos = 0
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

// === Funciones ===
const validarABCD = (texto)=>{
  // retorna true si falla alguna validación
  // el nulo lo evaluo aparte proque genera error con length
  if(texto === null){
    console.warn("Se apreto cancelar al responder")
    return true
  } else {
    const textoTesteo = texto.toUpperCase()
    const largoDistintoUno = texto.length !== 1
    const letraValida = textoTesteo === "A" || textoTesteo === "B" || textoTesteo === "C" || textoTesteo === "D"
    // Solo para facilitar lectura de código, puede usarse siempre !letraValida en vez de esto
    const letraInvalida = !letraValida
    if(largoDistintoUno){
      console.warn("Cantidad de inputs distinto a uno.")
    } else if(letraInvalida){
      // esta en else if porque nunca va a ser válido si la cantidad de carácteres es incorrecta
      console.warn("Se utilizó una letra distinta de A, B, C o D.")
    } 
    return letraInvalida || largoDistintoUno
  }
}
const preguntar = (textoPregunta)=>{
  // texto validacion
  const textoValidacion = "\n Por favor solo ingrese A, B, C o D como respuesta"
  const respuesta = prompt(textoPregunta+textoValidacion)
  return respuesta
}
const validarRespuesta = (textoPregunta)=>{
  // loop en el que obliga al usuario a ingresar una rta válida
  let rta = ""
  do{
    rta = preguntar(textoPregunta)
  }while(validarABCD(rta))
  return rta.toUpperCase()
}
const evaluarRespuesta = (rta, rtaEsperada)=>{
  if(rta === rtaEsperada){
    puntuacion++
    return "correcto"
  } else {
    return "erróneo"
  }
}
const loopTrivia = ()=>{
  let loop = true
  while(loop){
    // Aumenta contador de intentos
    intentos++
    // Preguntas
    let primerPregunta = validarRespuesta(primerPreguntaTexto)
    let segundaPregunta = validarRespuesta(segundaPreguntaTexto)
    let terceraPregunta = validarRespuesta(terceraPreguntaTexto)
    let cuartaPregunta = validarRespuesta(cuartaPreguntaTexto)
    // Evaluar respuestas
    const primerPreguntaValidar = evaluarRespuesta(primerPregunta, primerPreguntaRespuesta)
    const segundaPreguntaValidar = evaluarRespuesta(segundaPregunta, segundaPreguntaRespuesta)
    const terceraPreguntaValidar = evaluarRespuesta(terceraPregunta, terceraPreguntaRespuesta)
    const cuartaPreguntaValidar = evaluarRespuesta(cuartaPregunta, cuartaPreguntaRespuesta)
    // Combinado
    const evaluacion = `Habiendo realizado el test aca esta tu resultado: \n 1 - Esperado: ${primerPreguntaRespuesta} vos ingresaste ${primerPregunta} lo que es ${primerPreguntaValidar}.\n 2 - Esperado: ${segundaPreguntaRespuesta} vos ingresaste ${segundaPregunta} lo que es ${segundaPreguntaValidar}.\n 3 - Esperado: ${terceraPreguntaRespuesta} vos ingresaste ${terceraPregunta} lo que es ${terceraPreguntaValidar}.\n 4 - Esperado: ${cuartaPreguntaRespuesta} vos ingresaste ${cuartaPregunta} lo que es ${cuartaPreguntaValidar}.\nEsto resulta en una puntuación de ${puntuacion}/${puntuacionMaxima}`
    alert(evaluacion)
    // evalua si salir o no del loop
    loop = confirm("¿Desea volver a realizar esta trivia?")
    // Imprimir a consola
    console.log(`En el intento #${intentos} obtuvo un ${puntuacion}/${puntuacionMaxima}`)
    // reseteo puntaje
    puntuacion = 0
  }
}

const app =()=>{
  // saludo
  alert("Bienvenido a la trivia animal de hoy. ¡Veamos cuanto conocimiento animal tenés a tu disposición!")

  loopTrivia()

  // despedida
  const despedida = "Espero que hayan disfrutado de estas preguntas de trivia, ojala los veamos de vuelta pronto"
  alert(despedida)
}

// === Ejecución de código ===

app()