// 🟠 ¿Que son? 🟠
// Las librerías son código ajeno que podes introducir al tuyo mediante distintos métodos que permite utilizar lógica programada por otro.

// 🟠 ¿Cuando utilizarlas? 🟠
/* Normalmente se utilizan cuando:
◽ Uno evalua que la funcionalidad deseada tardaría más de lo que valdría más el tiempo ahorrado para el proyecto crear el código desde 0. 
◽ Es una funcionalidad muy compleja que todavía no entiende.
◽ Te lo piden tu empresa (muchas empresas tienen librerias de estilo/código propias).
*/ 

//  🟠 Pasos a seguir 🟠

// Ver compatibilidad de dependencias con tu proyecto
// Muchas veces las librerías deseadas no estan actualizadas a la versión actual de código necesario o uno esta utilizando código de legado que no es compatible con una funcionalidad utilizada. A su vez, hay librerías que pueden depender de otras (en su momento bootstrap utilizaba jQuery y se necesitaban ambos para su funcionamiento)

// Leer documentación
// Este es el paso más importante, te enseña como utilizar el código sin tener que leerlo entero. Normalmente está en ingles.

// Instalar en el proyecto
// Actualmente pueden:
/* 
◽ Copiar el link al cdn
◽ Descargar en local 
*/
// A futuro podrán:
/* 
◽ Descargarlo y utilizar el js como módulos apra importar lo necesario
◽ Instalarlo mediante npm
*/
// Nota: fijense si el código necesita llamar a una función para ser funcional.
// Nota2: de no modificar el código de la librería, es recomendable utilizar un js minificado ya que pesa menos y es más rápido.

// Datos extra:
// No es recomendable utilizar más librerías de las necesarias, entorpecen el código y uno suele tener poco control sobre ellas, lo que puede llevar a complicaciones.


// Librerías recomendadas por Coder
// Sweet alert 2: https://sweetalert2.github.io/
// Luxon: https://moment.github.io/luxon/#/
// Toastify: https://apvarun.github.io/toastify-js/

// Uno no esta limitado a estas pero son de las mejores documentadas.

const imprimoConsola = (dato)=>{
    console.log("Imprimo esto", dato)
}


// Sweet alert 2

const btnSwal = document.getElementById("btnSwal")

/* btnSwal.addEventListener("click", ()=>{
    Swal.fire({
        title: "Felecitaciones!",
        color: "#d47a20",
        text: "Me hiciste click!",
        icon: "success"
    });
}) */


btnSwal.addEventListener("click", ()=>{
    const { value: text } = Swal.fire({
        title: 'Soy un Submit',
        input: 'text',
        inputLabel: 'Escribe texto',
        inputPlaceholder: 'saraza'
    }).then(result=>imprimoConsola(result.value))
})



// utilizar datos de un input de Swal
// const { value: text } = Swal.fire({
//     title: 'Soy un Submit',
//     input: 'text',
//     inputLabel: 'Escribe texto',
//     inputPlaceholder: 'saraza'
// }).then(result=>imprimoConsola(result.value))


// Luxon
let DateTime = luxon.DateTime;

Swal.fire({
    // conseguir fecha de luxon
    title: DateTime.now().toLocaleString(DateTime.DATETIME_FULL),
    showConfirmButton: true,
})
/* Swal.fire({
    // conseguir fecha de luxon
    title: DateTime.now(),
    showConfirmButton: true,
}) */

console.log(DateTime.now())

// Toastify

const boton = document.getElementById("agregar")
/* boton.addEventListener("click", ()=>{
    // más lógica
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000
    }).showToast();
}) */

boton.addEventListener("click", ()=>{
    Toastify({
        text: "Producto agregado al carrito",
        duration: 1500*(Math.random()+1),
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #c43d68, #3cd0de)",
        },
    }).showToast();
})