/**
 * Gestiona una colección de libros y su estado de lectura.
 * Mantiene referencias al libro actual, el siguiente y el último leído,
 * así como contadores de libros leídos y no leídos.
 */
export class BookList {

    /**
     * Inicializa una nueva lista de libros.
     */
    constructor() {

        /**
         * Array que contiene todos los objetos Book.
         * @type {Array<Book>}
         */
        this.arBooks = [];

        /**
         * Número total de libros leídos.
         * @type {number}
         */
        this.read = 0;

        /**
         * Número total de libros no leídos.
         * @type {number}
         */
        this.noRead = 0;

        /**
         * Libro que el usuario está leyendo actualmente.
         * @type {Book|null}
         */
        this.cBook = null;

        /**
         * Siguiente libro recomendado o en cola de lectura.
         * @type {Book|null}
         */
        this.nBook = null;

        /**
         * Último libro leído por el usuario.
         * @type {Book|null}
         */
        this.lBook = null;
    }

    /**
     * Añade un libro al array principal y actualiza
     * las referencias del libro actual y el siguiente.
     *
     * @param {Book} book - Libro que será añadido a la lista.
     */
    addBook(book) {
        this.arBooks.push(book);

        // Si aún no hay libro actual, este será el primero.
        if (!this.cBook) {
            this.cBook = book;
        }

        // Si ya hay actual pero no siguiente, este se convierte en el siguiente.
        else if (!this.nBook) {
            this.nBook = book;
        }
    }

    /**
     * Actualiza los contadores de libros leídos y no leídos
     * en función del estado actual de arBooks.
     */
    updateCounts() {
        this.read = this.arBooks.filter(libro => libro.read === true).length;
        this.noRead = this.arBooks.filter(libro => libro.read === false).length;
    }

    /**
     * Marca el libro actual como terminado, asigna su fecha,
     * lo convierte en el último leído y actualiza el libro actual
     * y el siguiente en la lista.
     */
    finishCurrentBook() {

        /** Marca el libro actual como leído */
        this.cBook.read = true;

        /** Guarda la fecha de finalización */
        this.cBook.date = new Date(Date.now());

        /** Registra el libro como el último leído */
        this.lBook = this.cBook;

        /** El libro siguiente pasa a ser el actual */
        this.cBook = this.nBook;

        /**
         * Busca el nuevo siguiente libro entre los no leídos.
         * Si no encuentra ninguno, nBook será null.
         */
        this.nBook = this.arBooks.find(book => book.read === false);
    }
}
