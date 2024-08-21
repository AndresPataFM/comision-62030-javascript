const botonSWAL = document.getElementById("boton")
const botonToast = document.getElementById("botonToastify")
const carrito = []
// Seet Alert
botonSWAL.addEventListener("click", ()=>{
    // Muchas gracias por darme trabajo
    // Swal.fire({
    //     title: "Gracias",
    //     text: "Agradexco que me utilices",
    //     icon: "success"
    // });
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Signed in successfully"
    });
})




// toastify
//  https://apvarun.github.io/toastify-js/


botonToast.addEventListener("click", ()=>{

    carrito.push("1")

    Toastify({
        text: `${carrito}`,
        duration: 3000,
        newWindow: true,
        close: true,
        position: "right", // `left`, `center` or `right`
        gravity: "top", // `top` or `bottom`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
})

// Luxon
// https://moment.github.io/luxon/#/?id=luxon

let DateTime = luxon.DateTime;
console.dir(DateTime)
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_SHORT))
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_LONG))