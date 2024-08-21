const boton = document.getElementById("ejemplo")

// boton.onclick = ()=>{
//   alert("click")
// }

// boton.addEventListener("click", ()=>{
//   alert("click")
// })

// function clickear(){
//   alert("click")
// }

const ulCarrito = document.getElementById("carrito")
let carrito = [1,2,3,4] 

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

function mostrarCarrito(){
  ulCarrito.innerHTML = ""
  carrito.forEach(prod=>{
    const li = document.createElement("li")
    li.innerHTML = prod
    li.addEventListener("click", ()=>{
      // Toast.fire({
      //   icon: "info",
      //   title: `Este es el producto ${prod}`
      // });
      Toastify({
        text: `Este es el producto ${prod}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right", 
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    })
    ulCarrito.appendChild(li)
  })
}

function compraRealziada(){
  console.log("Cobrar carrito y mandar recibo al sistema")
  carrito = []
  mostrarCarrito()
}

boton.addEventListener("click", ()=>{
  compraRealziada()
  Swal.fire({
    title: "Compra Realizada",
    text: "Muchas gracias por su compra",
    icon: "info",
    iconColor: "red"
  });
})

// Swal.fire({
//   title: "Ingrese el nombre de un pokemon",
//   input: "text",
//   inputAttributes: {
//     autocapitalize: "off"
//   },
//   showCancelButton: true,
//   confirmButtonText: "Look up",
//   showLoaderOnConfirm: true,
//   preConfirm: async (pokemon) => {
//     try {
//       const URL = `
//       https://pokeapi.co/api/v2/pokemon/${pokemon}
//       `;
//       const response = await fetch(URL);
//       if (!response.ok) {
//         return Swal.showValidationMessage(`
//           ${JSON.stringify(await response.json())}
//         `);
//       }
//       return response.json();
//     } catch (error) {
//       Swal.showValidationMessage(`
//         Request failed: ${error}
//       `);
//     }
//   },
//   allowOutsideClick: () => !Swal.isLoading()
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: `Altura del pokemon`,
//       text: `${result.value.height} pulgadas`
//     });
//   }
// });


// const input = async()=>{
//   const { value: text } = await Swal.fire({
//     title: 'Ingrese su nombre',
//     input: 'text',
//     inputLabel: 'Nombre',
//     inputPlaceholder: 'Juan'
//   })
//   console.log(text)
// }

// input()

mostrarCarrito()
// Swal.fire({
//   title: "Bienvenido",
//   text: "Gracias por entrar",
//   showCancelButton: true
// })

// Swal.fire({
//   title: "<strong>HTML <u>example</u></strong>",
//   icon: "info",
//   html: `
//   <form id="formSwal">
//     <input type="text" id="input1">
//     <input type="text" id="input2">
//     <input type="submit" id="submit">
//   </form>
//   `,
//   showCloseButton: true,
//   showCancelButton: true,
//   focusConfirm: false,
//   confirmButtonText: `
//     <i class="fa fa-thumbs-up"></i> Great!
//   `,
//   confirmButtonAriaLabel: "Thumbs up, great!",
//   cancelButtonText: `
//     <i class="fa fa-thumbs-down"></i>
//   `,
//   cancelButtonAriaLabel: "Thumbs down"
// }).then(result=>{
//   if(result.isConfirmed){
//     const form = document.getElementById("formSwal")
//     console.log(form)
//   }
// });

// const infoLuxon = luxon.DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO();
let DateTime = luxon.DateTime;
console.dir(DateTime.local(2053))
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_SHORT))

// console.log(infoLuxon)
console.log(new Date())