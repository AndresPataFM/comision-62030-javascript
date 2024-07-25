// 🟠 Objetos 🟠
// Tipo de dato capaz de almacenar varias propiedades y/o métodos de manera clave/valor. cada propiedad y/o método de este se declara con el uso de ": y "," dentro de llames {}. No necesita de palabra reservada para declararlo.

const objeto1 = {
    // clave: valor,
    propiedad: "valor",
    metodo: function (){ //recomiendo functions en vez de arrow functions si desean usar this
        console.log("lógica")
    },
};
// 🔶 Propiedades 🔶
// Son "variables internas" del objeto, estas puedes ser cualquiera de los tipos de datos vistos, arrays y/u objetos.
// 🔶 Métodos 🔶
// Son "funciones internas" de los objetos, se declaran de la misma manera que als propiedades.

// 🔶 this 🔶
// La palabra clave this es una palabra clave que permite hacer referencia al objeto mismo
// No funciona con funciones flechas al declararla para métodos

const objeto2 = {
    // clave: valor,
    tipo: "auto",
    color: "rojo",
    mostrarTipo: ()=>console.log("Tipo:",this.tipo),
    mostrarColor: function (){
        console.log("Color:",this.color)
    }
};
objeto2.mostrarTipo();
objeto2.mostrarColor();

// 🔶 Funciones Constructoras 🔶
// Estas son funciones capaces de crear objetos
// En estas se capitaliza la primera letra (camelCase => PascalCase)
// Se suelen nombrar como el objetos que quiere iterar (ie: si genera productos, se llamara "Producto")

// 🔸 Declarar 🔸
// Se declara como una función normal solo que se utiliza la palabra clave "this"
// En funciones constructoras no funciona this con funciones flechas
// Sus metodos internos SI funcionan con funciones flecha
// Se utiliza "=" en vez de ":" 
// No se usan ","

function Auto (modelo, color){
    this.modelo = modelo;
    this.color = color;
    this.mostrar = function(){return `El auto es un ${this.modelo} de color ${this.color}`};
    this.mostrarInconsistente = ()=>{return this.modelo};
}

// 🔸 Crear Instancias de objeto 🔸
// Se utiliza la palabra clave "new" en referencia a su constructor
// Fijense que ahora si le hacen console.log muestra que es una instancia de la función constructora

const ferrari = new Auto("Ferrari", "rojo");
console.log(ferrari)
console.log(ferrari.mostrar());
console.log(ferrari.mostrarInconsistente());

// 🔶 Clases 🔶 
// Tienen la misma funcionalidad que funciones constructoras
// Utilizan la palabra reservada "class"
// Tienen constructores internos para 

/* 
class Nombre{
    constructor(parametros/opcional){
        prop1 = ???; //Puede tener lógica
        ...
    }
    metodo1
    ...
}
*/

class Alimento{
    constructor(nombre, tipo, costo){
        this.nombre = nombre
        this.tipo = tipo
        this.costo = costo
        this.precio = costo * 1.5
        this.ganancia = this.precio-costo
    }
    vender(){ // método de clase
        alert(`${this.nombre} [ ${this.tipo} ]: $ ${this.precio}/unidad`)
    }
}

const gaseosa = new Alimento("Gaseosa", "bebida", 350)
console.log(gaseosa)
// gaseosa.vender()

// 🔸 Setters / Getters 🔸
// Se suelen utilizar cuando uno quiere correr lógica adicional al modificar/obtener

// 🔹 Setter 🔹 
// Son un tipo de método especial que tienen como función dedicada cambiar el/los valor/es de una propiedad
// Utiliza la palabra clave "set"

const animal1 = {
    especie: "Sapo",
    nombre: "Monica",
    set cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
};

// 🔹 Getter 🔹 
// Son un tipo de método especial que tienen como función dedicada obtener valor/es de una propiedad

const animal2 = {
    especie: "Tucan",
    nombre: "Tuki Tuki",
    get introduccion() {
        return `Hola soy ${this.nombre} y soy un/a ${this.especie}`
    }
};

// llamar un getter
console.log(animal2.introduccion)

// 🔸 Métodos/Variables estáticos/as 🔸
// se utilizan para manterer el objeto, configuración fija o singletons
// muy utilizado en videojuegos
// poco usado en Js
// es una de las maneras apra manipular la memoria
// Permite llamar al método de clase sin crear isntancias del objeto

// 🔸 Público / Privado 🔸
// 🔹 Público 🔹 
// Son las que usamos hasta ahora, cualquier persona puede editarlo

// 🔹 Privado 🔹 
// Se le agrega "#" adelante de la propiedad
// Solo se pueden acceder/modificar mediante setters/getters
// ⛔ Se pueden acceder mediante la consola del ordenador ya que este es un debugger y los debuggers buscan/obtienen acceso a las propiedades/métodos privados 

class Persona{
    #secreto;
    constructor(nombre, secreto){
        this.nombre = nombre;
        this.#secreto = secreto;
    }
    get contarSecreto(){
        return `El secreto de ${this.nombre} es: ${this.#secreto}.`
    }
}
const Juan = new Persona("Juan", "no me baño hace 1 mes")
console.log(Juan)
// console.log(Juan.#secreto) // Genera error al tratar de acceder a algo privado
console.log(Juan.contarSecreto)
// Juan.#secreto // genera error al ser privado

// 🔸 Extend 🔸
// La habilidad de extender clases
// palabra reservada "extend" indica que clase se extiende
// método reservado "super" llama al constructor de la clase extendida
// 

class SerVivo{
    constructor(){
        this.vivo = true;
    }
}

class Reino extends SerVivo{
    constructor(reino){
        super()
        this.reino = reino
    }
}

class Mamifero extends Reino{
    constructor(especie){
        super("Mamifero")
        this.pelo = true
        this.mama = true
        this.especie = especie
    }
}

const marmota = new Mamifero("marmota")
console.log(marmota)

// 🔸 Polimorfismo 🔸
// La capacidad de un objeto de cambiar su comportamiento/valores de propiedades dependiendo de su contexto
// Ej:  Poder tener distintos objetos Mascota que nacen de una clase Mascota, las instancias varian su conportamiento dependeindo de que datos se les dieron al instanciar

// 🟠 Paradigma de objetos 🟠 
// Los principios S.O.L.I.D.

// 🔸 S - Single-responsiblity Principle 🔸 
// Responsabilidad única
// Un objeto solo debería de tener 1 trabajo

// 🔸 O - Open-closed Principle 🔸 
// Abierto/cerrado
// Los objetos deberían de estar abiertos a la extensión pero cerrados a la modificacion (por esto usas clases privadas/setters/getters)
// Podes extender la clase sin modificarla

// 🔸 L - Liskov Substitution Principle 🔸 
// Principio de substitución de Liskov
// Cada subclase puede ser substituida por su padre

// 🔸 I - Interface Segregation Principle 🔸 
// Principio de segragación de interface
// Clientes no se deben de ver forzado a crear instancias/depender de métodos que no utilicen

// 🔸 D - Dependency Inversion Principle 🔸 
// Principio de Inversion de dependencia
// Entidades deben de depender de abstracciones no de cosas concretas.