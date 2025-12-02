let arImagenes = [
    "img/img1.png",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.png",
    "img/img5.png"
];

let cartas = [];
let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false; // para evitar clickar mientras se giran


const barajar = (array) => {
    return array.sort(() => Math.random() - 0.5);
};


const crearTablero = () => {
    const contenedor = document.querySelector(".contenedor");

    // duplicar las imágenes para tener parejas
    let imagenesDobles = [...arImagenes, ...arImagenes];

    // barajar
    cartas = barajar(imagenesDobles);

    // crear las cartas
    cartas.forEach(img => {
        let div = document.createElement("div");
        div.className = "carta";

        // estado boca abajo al inicio
        div.dataset.imagen = img;
        div.innerHTML = `
            <div class="frente"><img src="${img}"></div>
            <div class="atras"></div>
        `;

        div.addEventListener("click", () => girarCarta(div));

        contenedor.appendChild(div);
    });
};


const girarCarta = (carta) => {
    if (bloqueo) return;
    if (carta === primeraCarta) return;

    carta.classList.add("activa");

    // primera carta
    if (!primeraCarta) {
        primeraCarta = carta;
        return;
    }

    // segunda carta
    segundaCarta = carta;
    bloqueo = true;

    comprobarPareja();
};


const comprobarPareja = () => {
    let img1 = primeraCarta.dataset.imagen;
    let img2 = segundaCarta.dataset.imagen;

    if (img1 === img2) {
        // Coinciden → se quedan giradas
        primeraCarta = null;
        segundaCarta = null;
        bloqueo = false;

        comprobarVictoria();
    } else {
        // No coinciden → girar de nuevo
        setTimeout(() => {
            primeraCarta.classList.remove("activa");
            segundaCarta.classList.remove("activa");

            primeraCarta = null;
            segundaCarta = null;
            bloqueo = false;
        }, 1000);
    }
};


const comprobarVictoria = () => {
    let todas = document.querySelectorAll(".carta.activa");

    if (todas.length === cartas.length) {
        setTimeout(() => {
            alert("¡Has encontrado todas las parejas!");
        }, 300);
    }
};


const main = () => {
    crearTablero();
};

document.addEventListener("DOMContentLoaded", main);
