// Aca pueden jugar con una clase con propiedades privadas, setters y getters

class Person{
    #firstName;
    #lastName;
    #age;
    #interaction;
    constructor(age, firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#interaction = 0;
    }
    stringValidator(string){
        const noSpaceString = string.replace(/\s/g, '' ) //Esto es una expresion regular
        const isString = typeof string === "string"
        const isntEmpty = noSpaceString !== ""
        console.log(isntEmpty)
        return isString && isntEmpty
    }
    get firstName(){
        this.#interaction++
        return this.#firstName
    }
    set setFirstName(string){
        this.#interaction++
        if(this.stringValidator(string)){
            this.#firstName = string
        } else {
            console.warn("El name tiene que ser un string no vacío")
        }
    }
    get lastName(){
        this.#interaction++
        return this.#lastName
    }
    set setLastName(string){
        this.#interaction++
        if(this.stringValidator(string)){
            this.#lastName = string
        }
    }
    get fullName(){
        this.#interaction++
        return this.#lastName + ", " + this.#firstName 
    }
    get age(){
        this.#interaction++
        return this.#age
    }
    set setAge(years){
        this.#interaction++
        const toInterger = parseInt(years)
        const isNumber = (typeof years !==number)&&(!isNan(toInterger))
        const validNumber = years >= 0 
        const isntInfinite = years !== Infinity

        if(!isNumber){
            console.warn("Age must be a number")
        }
        if(!validNumber){
            console.warn("Age must be a number equal or greater to 0")
        }
        if(!isntInfinite){
            console.warn("Age cant be Infinity")
        }
        if(isNumber && validNumber && isntInfinite){
            this.#age = toInterger
        }
    }
    get interaction(){
        return this.#interaction
    }
}

const juan = new Person(20, "Juan", "Lopez") 
console.log(juan)
// console.log(juan.#firstName)
console.log(juan.firstName)
console.log(juan.interaction)
juan.setFirstName = ""


/* 
console.log(juan.firstName) // use getter
console.log(juan.fullName) // use getter

console.log(juan.setFirstName="")
// console.log(juan)
juan.setFirstName= "Pedro"
console.log(juan)

console.log(juan.interaction) */