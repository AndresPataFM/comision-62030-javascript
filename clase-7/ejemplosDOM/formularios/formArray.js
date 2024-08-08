// No es un array en si pero lo podes tratar de manera similar

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

formulario.addEventListener("submit", (e)=>{
    // evita el reset
    e.preventDefault()
    // Aca podes acceder al "Array", en target
    // console.dir(e.target)
    // Si desean iterarlo un forEach no funciona
    // for(let i=0; i<e.target.length; i++){
    //     console.log(e.target[i])
    // }
    // mas simple
    // for(valor of e.target){
    //     console.log(valor)
    // }

    // Eviten este, no les va a servir
    // for(valor in e.target){
    //     console.log(valor)
    // }
    submits.push(new ResultadoFormulario(
        e.target[0].value,
        e.target[1].value,
        e.target[2].value,
        e.target[3].value,
        e.target[4].value,
        e.target[5].value,
        (e.target[6].checked && e.target[6].value) || (e.target[7].checked && e.target[7].value) || (e.target[8].checked && e.target[8].value),
        e.target[9].value
    ))
    console.table(submits)
})