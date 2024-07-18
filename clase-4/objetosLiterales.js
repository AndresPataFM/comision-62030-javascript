// 🟠 Objetos 🟠
// Tipo de dato capaz de almacenar varias propiedades y/o métodos de manera clave/valor. Cada propiedad y/o método de este se declara con el uso de ": y "," dentro de llames {}. No necesita de palabra reservada para declararlo.

// En cavernicola
// propiedad => variable
// método => función

const objeto1 = {
    // clave: valor,
    propiedad: "valor",
    propiedad2: 123,
    metodo: function (){
        console.log("lógica")
    },
    metodo2: (a,b)=>a+b
};
const objeto1alt = {propiedad: "valor",propiedad2: 123,metodo: function (){console.log("lógica")},metodo2: (a,b)=>a+b};
console.log(objeto1);
console.log(objeto1alt);

// Desde ES5 Js permite el uso de "trailing commas", comas al final del contenido

// 🔶 Propiedades 🔶
// Son "variables internas" del objeto, estas puedes ser cualquiera de los tipos de datos vistos, arrays y/u objetos.
// No se pueden utilizar "-"

const objeto2 = {
    propiedad1:"hola", // Strings
    propiedad2: 2023, // Números 
    propiedad3: false, // Booleanos
    propiedad4: 123*4-5/7, // Cualquier cosa que se pueda poner como variable, como null, undefined, etc.
    propiedad5: {
        propHijo1: "Los objetos pueden tener objetos hijos"
    },
    propiedad6: [1,2,3] // Las propiedades pueden ser arrays
};

// 🔶 Métodos 🔶
//  Son "funciones internas" de los objetos, se declaran de la misma manera que als propiedades.

const division = (a,b)=>a/b

const objeto3 = {
    saludo: "Hola",
    sumar: function (a,b){
        return a+b
    },
    restar: (a,b)=>{
        return a-b
    },
    multiplicar: (a,b)=>a*b,
    dividir: division,
    saludar: function(){
        return `${this.saludo}`;
    } // el this no funciona con funciones flecha
};


// 🔶 Llamar propiedades/métodos 🔶
// objeto.propiedad
// objeto.método(parametros de ser necesarios)

console.log(objeto3.saludar());

// 🔸 Ejemplo 🔸

const usuario = {
    eMail: "asd@asd.com",
    userName: "oO_Mauricio_Oo",
    password: "123Contraseña",
    name: "Mauricio",
    lastName: "Perez",
    edad: 27,
    showData1: function(){
        return `${this.eMail} | ${this.userName} | ${this.password} | ${this.name} | ${this.lastName} | ${this.edad} `
    }, //funciona al ser function
    showData2: ()=> `${this.eMail} | ${this.userName} | ${this.password} | ${this.name} | ${this.lastName} | ${this.edad} `
    // muestra undefined
};

// 🔹 Recomendación 🔹
// Vean el objeto reservado "Object" y sus métodos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
