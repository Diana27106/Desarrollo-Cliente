import { Book } from "./Book.mjs"
import { BookList } from "./BookList.mjs"


/**
 * Muestra en pantalla todos los libros del array recibido.
 * Crea dinámicamente los elementos HTML y actualiza el contenedor principal.
 * 
 * @param {Array} arLibros - Array con objetos Book.
 */
function mostrarLibros(arLibros) {

    const contenedor = document.getElementById("bookList");
    contenedor.innerHTML = "";   // Limpia el contenido previo

    /**
     * Recorre todos los libros y construye los elementos HTML.
     */
    for (let i = 0; i < arLibros.length; i++) {

        /** Contenedor principal de cada libro */
        const divContenedor = document.createElement('div');
        divContenedor.className = "book";

        /** Contenedor con la información del libro (título y autor) */
        const divInfo = document.createElement('div');
        divInfo.className = "info";

        /** Estado del libro: leído o no leído */
        const divStatus = document.createElement('div');
        divStatus.className = "status";
        divStatus.textContent = arLibros[i].read
            ? `Read on ${arLibros[i].date}`
            : "Not Read";

        /** Título del libro */
        const titulo = document.createElement('h3');
        titulo.textContent = arLibros[i].title;

        /** Autor del libro */
        const autor = document.createElement('small');
        autor.textContent = arLibros[i].author;

        /** Añade título y autor al bloque de información */
        divInfo.appendChild(titulo);
        divInfo.appendChild(autor);

        /** Construye el contenedor final */
        divContenedor.appendChild(divInfo);
        divContenedor.appendChild(divStatus);

        /** Inserta el libro en el DOM */
        contenedor.appendChild(divContenedor);
    }
}


/**
 * Añade eventos de clic a todos los libros mostrados en pantalla.
 * Cuando se hace clic en un libro, se marca como leído,
 * se actualiza su fecha, el contador y la visualización.
 * 
 * @param {BookList} booklist - Objeto BookList actual.
 */
function leerLibro(booklist) {
    let libros = document.querySelectorAll(".book");

    for (let i = 0; i < libros.length; i++) {

        libros[i].addEventListener('click', () => {

            /** Marca el libro como leído y guarda la fecha */
            booklist.arBooks[i].read = true;
            booklist.arBooks[i].date = new Date().toDateString();

            /** Actualiza el texto del estado en pantalla */
            const status = libros[i].querySelector(".status");
            status.textContent = `Read on ${booklist.arBooks[i].date}`;

            /** Actualiza los contadores del objeto BookList */
            booklist.updateCounts();

            /** Actualiza la visualización de libros leídos */
            mostrarLibrosLeidos(booklist);
        });
    }
}


/**
 * Muestra debajo de la lista el total de libros leídos
 * y elimina cualquier contador anterior para evitar duplicados.
 * 
 * @param {BookList} booklist - Objeto BookList en uso.
 */
function mostrarLibrosLeidos(booklist) {
    const contenedor = document.getElementById("bookList");

    /** Busca si existe un contador anterior y lo elimina */
    const divOld = document.querySelector(".readed");
    divOld && divOld.remove();

    /** Crea el nuevo contador de libros leídos */
    const divRead = document.createElement('div');
    divRead.className = "readed";

    divRead.textContent = `Books read: ${booklist.read} of ${booklist.arBooks.length}`;

    contenedor.appendChild(divRead);
}


/**
 * Función autoejecutable que inicializa la lista de libros,
 * asigna el evento al botón de envío del formulario
 * y actualiza la visualización.
 */
(function () {

    /** Crea un nuevo objeto BookList */
    let booklist = new BookList();

    /** Evento para añadir un nuevo libro desde el formulario */
    document.getElementById("submit").addEventListener("click", () => {

        let titulo = document.getElementById("title").value;
        let genero = document.getElementById("genre").value;
        let autor = document.getElementById("author").value;

        /** Añade un nuevo libro a la lista */
        booklist.addBook(new Book(titulo, genero, autor));

        /** Actualiza todas las visualizaciones */
        mostrarLibros(booklist.arBooks);
        leerLibro(booklist);
        mostrarLibrosLeidos(booklist);
    });

})();
