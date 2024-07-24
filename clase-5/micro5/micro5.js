/*
// Completa el código de la clase 'Persona'
class Persona {
  // Completa el constructor con los parámetros 'nombre' y 'edad'
  constructor( _____, _____) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Completa el método 'saludar' para que retorne un mensaje de saludo
  _____() {
    return `Hola, mi nombre es ${this._____} y tengo ${this._____} años.`;
  }
}
*/

// Completa el código de la clase 'Persona'
class Persona {
  // Completa el constructor con los parámetros 'nombre' y 'edad'
  constructor( nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Completa el método 'saludar' para que retorne un mensaje de saludo
  saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Crea una instancia de la clase 'Persona' con el nombre 'Juan' y la edad 30
let persona1 = new Persona('Pedro', 40);
console.log(persona1)
// Llama al método 'saludar' en la instancia y muestra el mensaje resultante
console.log(persona1.saludar()); // Debería mostrar "Hola, mi nombre es Pedro y tengo 40 años.".
