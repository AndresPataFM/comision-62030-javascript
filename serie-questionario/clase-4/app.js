// Se agregan arrays y objetos simples
// === Entidades ===
const trivia = {
  intentos: 0,
  // propiedad que maneja la info de la puntuación
  puntuacion:{
    actual: 0,
    maxima: 4,
    record: 0,
  },
  // array con todas las preguntas
  preguntas: [
    {
      texto:"¿Qué animal tiene 1 pie?",
      opciones:["A | Caracol.","B | Hornero.", "C | Girafa.", "D | Mollusco."],
      respuesta:{
        correcta: "A",
        usuario: "",
        //Se espera una de 3 opciones: "NO RESPONDIO", "correcto", "erróneo"
        estado: "NO RESPONDIO",
      }
    },
    {
      texto:"¿Que animal es más dañino al hombre?",
      opciones:["A | Tiburón.","B | Mosquito.", "C | Jaguarete.", "D | Vaca."],
      respuesta:{
        correcta: "B",
        usuario: "",
        estado: "NO RESPONDIO",
      }
    },
    {
      texto:"¿Cuál animal es el que más se encuentra domesticado?",
      opciones:["A | Perro.","B | Vaca.", "C | Gallina.", "D | Gato."],
      respuesta:{
        correcta: "C",
        usuario: "",
        estado: "NO RESPONDIO",
      }
    },
    {
      texto:"¿Cuál es el animal más rapido?",
      opciones:["A | Cheeta.","B | Halcón Peregrino.", "C | Pez espada.", "D | Gacela de Thomson."],
      respuesta:{
        correcta: "B",
        usuario: "",
        estado: "NO RESPONDIO",
      }
    },
  ]
}
// === Variables ===
// Texto preguntas

// === Funciones ===
const armarTextoOpciones = (pregunta)=>{
  let textoFinal = pregunta.texto
  for(const opcion of pregunta.opciones){
    textoFinal += "\n " + opcion
  }
  return textoFinal
}
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
const preguntar = (pregunta)=>{
  // texto validacion
  const textoValidacion = "\n Por favor solo ingrese A, B, C o D como respuesta"
  const respuesta = prompt(armarTextoOpciones(pregunta)+textoValidacion)
  return respuesta
}
const validarRespuesta = (pregunta)=>{
  // loop en el que obliga al usuario a ingresar una rta válida
  let rta = ""
  do{
    rta = preguntar(pregunta)
  }while(validarABCD(rta))
  // Le asigno el nuevo valor a la propiedad
  pregunta.respuesta.usuario = rta.toUpperCase();
}
const evaluarRespuesta = ()=>{
  for(const pregunta of trivia.preguntas){
    if(pregunta.respuesta.usuario === pregunta.respuesta.correcta){
      trivia.puntuacion.actual++
      pregunta.respuesta.estado = "correcto"
    } else {
      pregunta.respuesta.estado = "erróneo"
    }
  }
}
const generarEvaluacion = ()=>{
  let eval = "Habiendo realizado el test aca esta tu resultado:"
  for(let i = 0; i<trivia.preguntas.length; i++){
    eval += `\n ${i+1} - Esperado: ${trivia.preguntas[i].respuesta.correcta} vos ingresaste ${trivia.preguntas[i].respuesta.usuario} lo que es ${trivia.preguntas[i].respuesta.estado}.`
  }
  return eval
}
const evaluarPuntuacion = ()=>{
  if(trivia.puntuacion.actual>trivia.puntuacion.record){
    alert("Nuevo Record")
    trivia.puntuacion.record=trivia.puntuacion.actual
  } else if(trivia.puntuacion.actual===trivia.puntuacion.record){
    alert("Empataste el récord")
  }
}
const loopTrivia = ()=>{
  let loop = true
  while(loop){
    trivia.intentos++
    for(preguntaTrivia of trivia.preguntas){
      validarRespuesta(preguntaTrivia)
    }
    evaluarRespuesta()
    // Combinado
    const evaluacion = generarEvaluacion()
    alert(evaluacion)
    // Puntuación
    evaluarPuntuacion()
    // Evalúa si salir o no del loop
    loop = confirm("¿Desea volver a realizar esta trivia?")
    // Imprimir a consola
    console.log(`En el intento #${trivia.intentos} obtuvo un ${trivia.puntuacion.actual}/${trivia.puntuacion.maxima}`)
    // reseteo puntaje
    trivia.puntuacion.actual = 0
  }
}

const app =()=>{
  // saludo
  alert("Bienvenido a la trivia animal de hoy. ¡Veamos cuanto conocimiento animal tenés a tu disposición!")
  alert(`El record actual es de: ${trivia.puntuacion.record}/${trivia.puntuacion.maxima}`)
  // trivia
  loopTrivia()
  // despedida
  const despedida = "Espero que hayan disfrutado de estas preguntas de trivia, ojala los veamos de vuelta pronto"
  alert(despedida)
}

// === Ejecución de código ===

app()