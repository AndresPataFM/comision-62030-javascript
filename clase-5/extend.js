class Animal {
  constructor(piel, especie){
    this.vivo = true;
    this.piel = piel
    this.especie = especie
  }
}

class Mamifero extends Animal {
  constructor(especie, extremidades){
    super("pelo", especie)
    this.mama = true
    this.extremidades = extremidades
  }
}

const gato = new Mamifero("Gato", 5)
console.log(gato)

// 
class Lugar {
  constructor(tamanio, ambientes){
    this.tamanio = tamanio
    this.ambientes = ambientes
  }
  calcularPrecio = function(){
    return this.tamanio*this.ambientes
  }
}

class Departamento extends Lugar {
  constructor(tamanio, ambientes, piso){
    super(tamanio, ambientes)
    this.piso = piso
  }
}
const depto = new Departamento(1000, 5, 7)
console.log(depto.calcularPrecio())