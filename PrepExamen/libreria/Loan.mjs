export class Loan {
    constructor(bookId, memberId, loanDate, returned) {
        this.bookId = bookId;
        this.memberId = memberId;
        this.loanDate = loanDate;
        this.returned = returned;
    }

    mostrarInfo() {
        console.log(`Prestamo:\n Libro: ${this.bookId}, Miembro: ${this.memberId}, Fecha: ${this.loanDate}, Devuelto: ${this.returned}`);
    }
}