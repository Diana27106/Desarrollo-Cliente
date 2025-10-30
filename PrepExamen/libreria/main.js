import db from './library.json' with {type: 'json'};
import { Book } from './Book.mjs';
import { Member } from './Member.mjs';
import { Loan } from './Loan.mjs';

//CREACION DE FUNCIONES DE GESTIÓN//

function combinarLibrosMiembros(db) {
    return [...db.books, ...db.members];
}

function librosPrestados(db, idMiembro) {
    let idLibro = db.loans.filter(({ memberId }) => memberId == idMiembro).map(prestamo => prestamo.bookId);
    return db.books.filter(({ id }) => id == idLibro).map(elemento => elemento.title);
}

function ordenarPrestamosPorFecha(db) {
    return db.loans.sort((fecha1, fecha2) => new Date(fecha1.loanDate) - new Date(fecha2.loanDate));
}

function miembrosConPrestamosActivos(db) {
    let idMiembro = db.loans.filter(({ returned }) => returned === false).map(elemento => elemento.memberId);
    return db.members.filter(({ id }) => idMiembro.includes(id)).map(elemento => elemento.name);
}

(function () {
    console.log("Cargando la base de datos de la biblioteca...")
    console.log("Libros: ")
    console.log(db.books);
    console.log("Miembros: ")
    console.log(db.members)
    console.log("Prestamos: ")
    console.log(db.loans)
    //USO DE CLASES
    let b1 = new Book(db.books[1].id, db.books[1].title, db.books[1].author, db.books[1].year)
    let b2 = new Book(db.books[0].id, db.books[0].title, db.books[0].author, db.books[0].year)
    let b3 = new Book(db.books[2].id, db.books[2].title, db.books[2].author, db.books[2].year)

    let m1 = new Member(db.members[1].id, db.members[1].name, db.members[1].age)
    let m2 = new Member(db.members[0].id, db.members[0].name, db.members[0].age)
    let m3 = new Member(db.members[2].id, db.members[2].name, db.members[2].age)

    let p1 = new Loan(db.loans[1].bookId, db.loans[1].memberId, db.loans[1].loanDate, db.loans[1].returned)
    let p2 = new Loan(db.loans[0].bookId, db.loans[0].memberId, db.loans[0].loanDate, db.loans[0].returned)
    let p3 = new Loan(db.loans[2].bookId, db.loans[2].memberId, db.loans[2].loanDate, db.loans[2].returned)

    const arBooks = [b1, b2, b3];
    const arMember = [m1, m2, m3];
    const arLoans = [p1, p2, p3];

    arBooks.forEach(book => book.mostrarInfo());
    arMember.forEach(member => member.mostrarInfo());
    arLoans.forEach(loan => loan.mostrarInfo());

    //Función 1
    console.log("Combinación libros + miembros")
    console.log(combinarLibrosMiembros(db))

    //Función 2
    console.log("Libros prestados a Laura")
    console.log(librosPrestados(db, 1))

    //Función 3
    console.log("Préstamos activos")
    console.log(ordenarPrestamosPorFecha(db))

    //Función 4
    console.log("Miembros con préstamos activos")
    console.log(miembrosConPrestamosActivos(db))


})()