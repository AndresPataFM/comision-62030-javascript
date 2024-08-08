// Es engorroso y tedioso pero tenes cotnrol total

class ResultadoFormulario{
    constructor(nombreCompleto, email, telefono, dni, fecha, color, genero, consulta){
        this.nombreCompleto = nombreCompleto;
        this.email = email;
        this.telefono = telefono;
        this.email = email;
        this.dni = dni;
        this.fecha = fecha;
        this.color = color;
        this.genero = genero;
        this.consulta = consulta;
    }
}

const submits = []

const formulario = document.getElementById("formulario")
const nombreCompleto = document.getElementById("nombreCompleto")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const dni = document.getElementById("dni")
const fecha = document.getElementById("fecha")
const color = document.getElementById("color")
const femenino = document.getElementById("femenino")
const masculino = document.getElementById("masculino")
const otro = document.getElementById("otro")
const consulta = document.getElementById("consulta")
const enviar = document.getElementById("enviar")

formulario.addEventListener("submit", (e)=>{
    // evita el reset
    e.preventDefault()
    const fNombreCompleto = nombreCompleto.value
    const fEmail = email.value
    const fTelefono = telefono.value
    const fDni = parseInt(dni.value)
    const fFecha = fecha.value
    const fColor = color.value
    const fFemenino = femenino.checked && femenino.value
    const fMasculino = masculino.checked && masculino.value
    const fOtro = otro.checked && otro.value
    const fConsulta = consulta.value

    const fGenero = fFemenino || fMasculino || fOtro

    submits.push(new ResultadoFormulario(
        fNombreCompleto,
        fEmail,
        fTelefono,
        fDni,
        fFecha,
        fColor,
        fGenero,
        fConsulta
    ))
    // formulario.reset()
    console.table(submits)
})