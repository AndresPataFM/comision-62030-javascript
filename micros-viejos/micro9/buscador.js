const productos = [
    {nombre:"manzana"},
    {nombre:"pera"},
    {nombre:"lechuga"},
    {nombre:"tomate"},
    {nombre:"papa"},
    {nombre:"anana"},
    {nombre:"palta"}
]

function filtrar(string){
    const filtro = productos.filter((elemento)=>{
        const busqueda = elemento.nombre.includes(string)
        return busqueda
    })
    return filtro
}