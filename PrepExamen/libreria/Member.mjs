export class Member {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    mostrarInfo() {
        console.log(`Miembro: ${this.name}, Edad: ${this.age}`);
    }
}