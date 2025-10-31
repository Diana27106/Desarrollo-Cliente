export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mayorEdad() {
        if (this.edad > 18) {
            return true;
        }
    }
}