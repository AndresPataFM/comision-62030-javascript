const botonSWAL = document.getElementById("boton")

const URL = "https://jsonplaceholder.typicode.com/posts"

async function cargarPublicaciones() {
    try {
        const resp = await fetch(URL)
        const posts = await resp.json()
        console.table(posts)
    } catch (error) {
        Swal.fire({
            title: 'Error',
            icon: "error",
            text: error
        })
    }
}

// cargarPublicaciones()

function confirmarCarga() {
    Swal.fire({
        title: '¿Descargar publicaciones del servidor?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, ver posts',
        cancelButtonText: 'No por ahora'
    }).then((response)=> {
        if (response.isConfirmed) {
            cargarPublicaciones()
        } else {
            Swal.fire({
                title: 'Que lástima',
            })
        }
    })
}

botonSWAL.addEventListener("click", confirmarCarga)