export class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    mostrarInfo() {
        console.log(`Libro: ${this.title}, Autor: ${this.author}, Año: ${this.year}`);
    }
}