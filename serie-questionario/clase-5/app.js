// Se agregan clases, métodos y storage
// === Entidades ===
class Trivia{
  constructor(id,nombre,etiquetas, puntuacionMaxima, preguntas){
    this.id = id;
    this.nombre = nombre;
    this.etiquetas = etiquetas;
    this.preguntas = [];
    this.puntuacion = {
      maxima: puntuacionMaxima,
      actual: 0,
      record: 0
    }
    for(const pregunta of preguntas){
      this.crearPregunta(pregunta.texto, pregunta.opciones, pregunta.respuesta.correcta, this.id)
    }
  };
  Pregunta = class Pregunta{
    static contador = 0;
    constructor(texto, opciones, respuestaCorrecta, idTrivia){
      this.id = idTrivia + String(Pregunta.contador++)
      this.texto = texto;
      this.opciones = [];
      this.respuesta = {
        correcta: respuestaCorrecta,
        usuario: "",
        estado: "NO RESPONDIO"
      };
      for(let i = 0; i<opciones.length;i++){
        this.agregarOpcion(opciones[i])
      }
    };
    agregarOpcion = function(opcion){
      const esString = typeof opcion === "string";
      if(esString){
        const stringSinEspacio = opcion.replace(/\\s+/g, '');
        const stringVacio = stringSinEspacio === '';
        if(!stringVacio){
          this.opciones.push(opcion);
        } else{
          console.warn("Es un string vacío o consiste solo de espacios");
        };
      } else {
        console.warn("esa opción no es un string");
      };
    };
    validarABCD = (texto)=>{
      // retorna true si falla alguna validación
      // el nulo lo evaluo aparte proque genera error con length
      if(texto === null){
        console.warn("Se apreto cancelar al responder")
        return true
      } else {
        const textoTesteo = texto.toUpperCase()
        const largoDistintoUno = texto.length !== 1
        const letraValida = textoTesteo === "A" || textoTesteo === "B" || textoTesteo === "C" || textoTesteo === "D"

        const letraInvalida = !letraValida
        if(largoDistintoUno){
          console.warn("Cantidad de inputs distinto a uno.")
        } else if(letraInvalida){
          console.warn("Se utilizó una letra distinta de A, B, C o D.")
        } 
        return letraInvalida || largoDistintoUno
      }
    }
    preguntar(){
      let textoFinal = this.texto
      for(const opcion of this.opciones){
        textoFinal += "\n " + opcion
      }
      const textoValidacion = "\n Por favor solo ingrese A, B, C o D como respuesta";
      const respuesta = prompt(textoFinal+textoValidacion);
      return respuesta;
    }
    preguntarValidar(){
      // loop en el que obliga al usuario a ingresar una rta válida
      let rta = ""
      do{
        rta = this.preguntar()
      }while(this.validarABCD(rta))
      // Le asigno el nuevo valor a la propiedad
      this.respuesta.usuario = rta.toUpperCase();
    }
  };
  crearPregunta(texto, opciones, respuestaCorrecta) {
    // verificaciones
    this.preguntas.push(new this.Pregunta(texto, opciones, respuestaCorrecta, this.id));
  };
  evaluarRespuestas(){
    for(const pregunta of this.preguntas){
      if(pregunta.respuesta.usuario === pregunta.respuesta.correcta){
        this.puntuacion.actual++
        pregunta.respuesta.estado = "correcto";
      } else {
        pregunta.respuesta.estado = "erróneo";
      };
    };
  };
  actualizarRecord(){
    if(this.puntuacion.actual > this.puntuacion.record){
      alert("Nuevo Record")
      this.puntuacion.record = this.puntuacion.actual
    } else if(this.puntuacion.actual === this.puntuacion.record){
      alert("Empataste el récord")
    }
  }

  generarEvaluacion(){
    let evaluacion = "Habiendo realizado el test aca esta tu resultado:"
    for(let i = 0; i<this.preguntas.length; i++){
      evaluacion += `\n ${i+1} - Esperado: ${this.preguntas[i].respuesta.correcta} vos ingresaste ${this.preguntas[i].respuesta.usuario} lo que es ${this.preguntas[i].respuesta.estado}.`
    }
    return evaluacion
  }
  ejecutarTrivia(){
    // como solo hay 1 trivia por ahora siempre va a ser la 0
    alert(`El record actual es de: ${this.puntuacion.record}/${this.puntuacion.maxima}`)
    let intentos = usuarioActual.historial[0]
    if(intentos){
      intentos.intentos++
    } else {
      usuarioActual.agregarHistorial(this.id, 0, 1)
      intentos = usuarioActual.historial[0]
    }
    console.log(this.preguntas)
    for(const preguntaTrivia of this.preguntas){
      preguntaTrivia.preguntarValidar()
    }
    this.evaluarRespuestas()
    // Combinado
    const evaluacion = this.generarEvaluacion()
    alert(evaluacion)
    // Puntuación
    usuarioActual.historial[0].actualizarHistorial(this.puntuacion.actual, usuarioActual.historial[0].intentos)
    guardarCambiosActual()
    // Evalúa si salir o no del loop
    // Imprimir a consola
    console.log(`En el intento #${usuarioActual.historial[0].intentos} obtuvo un ${this.puntuacion.actual}/${this.puntuacion.maxima}`)
    // reseteo puntaje
    this.puntuacion.actual = 0
  }
};

class Usuario {
  constructor(nombre, contrasenia, historial=[]){
    this.nombre = nombre;
    this.contrasenia = contrasenia;
    this.historial = []
    if(historial.length>0){
      // esto esta así para poder agregarle validaciones
      for(let i=0; i<historial.length; i++){
        this.agregarHistorial(historial[i].triviaId, historial[i].puntuacion, historial[i].intentos)
      }
    }
  }
  HistorialTrivia = class {
    constructor(triviaId, puntuacion, intentosTrivia=0){
      this.triviaId = triviaId;
      this.puntuacion = puntuacion;
      this.intentos = intentosTrivia;
    }
    actualizarHistorial(puntuacion, intentos){
      if(this.puntuacion < puntuacion){
        this.puntuacion = puntuacion
      }
      this.intentos = intentos
    }
  }
  agregarHistorial(triviaId, puntuacion, intentos){
    if(this.historial.length===0){
      this.historial.push(new this.HistorialTrivia(triviaId, puntuacion, intentos))
    } else{
      let existeEnHistorial = false
      for(let i=0; i<this.historial.length; i++){
        if(triviaId === this.historial[i].triviaId){
          this.historial[i].actualizarHistorial(puntuacion, intentos)
          existeEnHistorial = true
          // no debería de haber 2 id idénticos así que no vale la pena seguir
          break
        }
      }
      if(!existeEnHistorial){
        this.historial.push(new this.HistorialTrivia(triviaId, puntuacion, intentos))
      }
    }
  }
}
// === Variables ===
// a futuro lo ideal sería que haya más de 1 trivia.
const trivias = []
let triviaActual = new Trivia(0,"animales", ["animal", "facil"], 4, [{texto:"¿Qué animal tiene 1 pie?",opciones:["A | Caracol.","B | Hornero.", "C | Girafa.", "D | Mollusco."],respuesta:{correcta: "A"}},{texto:"¿Que animal es más dañino al hombre?",opciones:["A | Tiburón.","B | Mosquito.", "C | Jaguarete.", "D | Vaca."],respuesta:{correcta: "B"}},{texto:"¿Cuál animal es el que más se encuentra domesticado?",opciones:["A | Perro.","B | Vaca.", "C | Gallina.", "D | Gato."],respuesta:{correcta: "C"}},{texto:"¿Cuál es el animal más rapido?",opciones:["A | Cheeta.","B | Halcón Peregrino.", "C | Pez espada.", "D | Gacela de Thomson."],respuesta:{correcta: "B"}},])
const usuarios = []
let usuarioActual

// === Funciones ===
const guardarUsuarios = ()=>{
  console.log(usuarios)
  let usuariosJSON = JSON.stringify(usuarios)
  localStorage.setItem("usuarios", usuariosJSON)
}
const crearUsuario = (nombre, contrasenia, historial)=>{
  usuarios.push(new Usuario(nombre, contrasenia, historial))
  guardarUsuarios()
}
function guardarCambiosActual(){
  for (let i=0; i<usuarios.length; i++){
    if(usuarios[i].nombre === usuarioActual.nombre){
      usuarios[i] = usuarioActual
      guardarUsuarios()
      return //evita que siga buscando cuando ya encontró
    }
  }
}
const conseguirUsuarios = ()=>{
  let usuariosJSON = localStorage.getItem("usuarios")
  if(usuariosJSON === null){
    return null
  }
  let usuariosParse = JSON.parse(usuariosJSON)
  for(const usuario of usuariosParse){
    // si no los paso por la clase, pierdo los métodos
    crearUsuario(usuario.nombre, usuario.contrasenia, usuario.historial)
  }
}
const preguntarUsuario = ()=>{
  let nombre = prompt("Ingrese su nombre de usuario")
  let existeUsuario = false
  let usuarioValidado = false
  let loopValidacion = true
  while(nombre === "" || nombre === null){
    nombre = prompt("Ingrese su nombre de usuario")
  }
  for(const usuario of usuarios){
    if(usuario.nombre === nombre){
      existeUsuario = true
      usuarioActual = usuario
    }
  }

  while(loopValidacion && existeUsuario){
    const contraseniaIntento = prompt("Ingrese su contraseña")
    if(contraseniaIntento === usuarioActual.contrasenia){
      loopValidacion = false
      usuarioValidado = true
      alert("Ingresó exitosamente")
    }
  }

  if(existeUsuario && usuarioValidado){
    alert(`Bienvenido de vuelta ${nombre}`)
  } else if(existeUsuario && !usuarioValidado){
    alert("Por favor recuepre sus credenciales para volver a ingresar.")
  } else {
    alert("Detectamos que es su primera vez realizando nuestras trivias, por favor genere una contrasenia")
    // extremadamente simplista esta aca
    const contrasenia = prompt("Ingrese su contrasenia")
    crearUsuario(nombre, contrasenia)
    usuarioActual = usuarios[usuarios.length-1]
  }
}

const loopTrivia = ()=>{
  let loop = true
  while(loop){
    triviaActual.ejecutarTrivia()
    loop = confirm("¿Desea volver a realizar esta trivia?")
  }
}

const app =()=>{
  conseguirUsuarios()
  // saludo
  alert("Bienvenido a la trivia animal de hoy. ¡Veamos cuanto conocimiento animal tenés a tu disposición!")
  // usuario
  preguntarUsuario()
  // trivia
  loopTrivia()
  // despedida
  const despedida = "Espero que hayan disfrutado de estas preguntas de trivia, ojala los veamos de vuelta pronto"
  alert(despedida)
}

// === Ejecución de código ===

app()