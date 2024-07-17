// Simular el portal de un profesor de escuela
// Vean el concepto clases a futuro para mejorar esto

const datos = {
    usuario: "andres",
    contrasenia:"123",
    ingreso: false,
    alumnos: []
}

function login( intentos, maximaCantidadIntentos){
    // valida usuario/contrasenia
    alert(`Tiene ${maximaCantidadIntentos} intentos posibles de ingresar, este es su intento ${intentos+1}`)
    let profesorIngresado = prompt("Ingrese su nombre")
    let profesorLower = profesorIngresado.toLocaleLowerCase()
    let constraseniaIngresada = prompt("ingrese la contrasenia")
    if((datos.usuario === profesorLower)&&(datos.contrasenia === constraseniaIngresada)){
        alert("Bienvenido")
        datos.ingreso=true
        return true
    } else {
        alert(`Le quedan ${maximaCantidadIntentos-(intentos+1)} intentos`)
    }
}

function loginLoop(intentos, maximaCantidadIntentos){
    // ciclo que maneja la cantidad de veces que se puede realziar el login
    do{
        if(login(intentos, maximaCantidadIntentos)){
            break //frena el loop si ingresa, asi tienen un ejemplo de break
        } 
        intentos++
    } while(intentos < maximaCantidadIntentos)
}
function agregarAlumnos(){
    // agrega alumnos al array de datos
    let agregarAlumno = true
    while (agregarAlumno){
        // valido nombre (podría modularizarlo en función aparte)
        let nombreAlumno = prompt("Ingrese el nombre del alumno a ingresar").toLowerCase()
        while (!nombreAlumno){
            nombreAlumno = prompt("Hubo un error. Ingrese el nombre del alumno a ingresar").toLowerCase()
        }
        // valido nomta (podría modularizarlo en función aparte)
        let notaAlumno = Number(prompt(`Ingrese la nota del alumno ${nombreAlumno}. Un número entre 1 y 10`))
        let notaNoValidada = true
        do{
            if(isNaN(notaAlumno)){
                notaAlumno = Number(prompt("Por favor ingrese un número"))
            } else if(nombreAlumno < 1 || notaAlumno > 10){
                notaAlumno = Number(prompt("El número ingresado debería de ser entre 1 y 10"))
            } else {
                notaNoValidada = false
            }
        } while (notaNoValidada)
        // creo un objeto alumno
        const alumno = {
            nombre: nombreAlumno,
            nota: notaAlumno
        }
        // Lo agrego al array
        datos.alumnos.push(alumno)
        agregarAlumno = confirm("¿Desea agregar otro alumno?")
    }
}

function calcularPromedio (){
    // calcula el promedio de todos los alumnos
    let sumaTotal = 0
    let aprobados = 0
    for(alumno of datos.alumnos){
        sumaTotal += alumno.nota
        if(alumno.nota >= 7){
            aprobados++
        }
    }
    const promedio = sumaTotal/datos.alumnos.length
    alert(`El promedio de los alumnos es de ${promedio}. De los ${datos.alumnos.length} alumnos, ${aprobados} aprobaron y ${datos.alumnos.length - aprobados} desaprobaron.`)
    return promedio
}

function mostrarAlumnos(){
    let textolistaAlumnos = `Hay un total de ${datos.alumnos.length} alumnos: `
    for(let i = 0; i < datos.alumnos.length ; i++){
        textolistaAlumnos += `\n ${i+1} - ${datos.alumnos[i].nombre} | Nota: ${datos.alumnos[i].nota}`
    }
    alert(textolistaAlumnos)
}

const examen = ()=>{
    // Función que toma un examen al alumno
    alert("Bienvenido al exámen de matemáticas")
    let nota = 0
    const corrector = (num1, num2, operacion, rtaAlumno)=>{
        switch(operacion){
            case "+":
                if(num1+num2===rtaAlumno) {
                    nota += 2
                }
                break
            case "-":
                if(num1-num2===rtaAlumno) {
                    nota += 2
                }
                break
            case "*":
                if(num1*num2===rtaAlumno) {
                    nota += 2
                }
                break
            case "/":
                if(num1/num2===rtaAlumno) {
                    nota += 2
                }
            default: console.log("ERROR")
        }
        
    }
    // esto puede ser su propia funcion que llamo 5 veces
    let preg1 = Number(prompt("Cuánto es 5*8"))
    corrector(5,8, "*", preg1)
    let preg2 = Number(prompt("Cuánto es 3+4"))
    corrector(3,4, "+", preg2)
    let preg3 = Number(prompt("Cuánto es 13*2"))
    corrector(13,2, "*", preg3)
    let preg4 = Number(prompt("Cuánto es 100/4"))
    corrector(100,4, "/", preg4)
    let preg5 = Number(prompt("Cuánto es 10-3"))
    corrector(10,3, "-", preg5)

    alert(`Su nota es: ${nota}/10`)
    return nota
}



const preguntaSeleccion=()=>{
    // Funcion con lista de opciones y devuelve la selección elegida
    let eleccion = prompt("Que desea hacer: \n 1 - Mostrar alumnos \n 2 - Agregar alumnos \n 3 - Calcular promedio \n 4 - Tomar un examen \n Por favor ingrese el número del proceso seleccionado.")
    return parseInt(eleccion)
}

const selector=(eleccion)=>{
    switch(eleccion){
        case 1:
            // Mostrar alumnos
            mostrarAlumnos()
            break
        case 2:
            // Agregar alumnos
            agregarAlumnos()
            break
        case 3:
            // calcular promedio
            calcularPromedio()
            break
        case 4:
            // tomar un examen
            examen()
            break
        default:
            alert("ingreso un valor inválido")
    }
}

const inicializar = ()=>{
    let intentos = 0
    const maximaCantidadDeIntentos = 3
    do{
        login(intentos, maximaCantidadDeIntentos)
        if(datos.ingreso){
            // break
            intentos=5
        }
        intentos++
    } while(intentos<3)

    if(datos.ingreso){
        let loop = true
        do{
            selector(preguntaSeleccion())
            loop = confirm("¿Desea continuar?")
        } while(loop)
    }
}

inicializar()