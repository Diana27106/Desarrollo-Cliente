let arPalabras = ["taekwondo", "coche", "flor", "nube", "color", "pizza", "deporte"];
let palabraElegida = "";
let espacios = [];
let vidas = 10;

let divVidas;

const elegirPalabra = () => {
    let random = Math.floor(Math.random() * arPalabras.length);
    return arPalabras[random];
};

const crearEspacios = () => {
    palabraElegida = elegirPalabra();

    let div = document.createElement("div");
    div.className = "espacios";

    espacios = [];

    for (let i = 0; i < palabraElegida.length; i++) {
        let p = document.createElement("p");
        p.textContent = "_";
        espacios.push(p);
        div.appendChild(p);
    }

    document.body.appendChild(div);
};

const restarVida = () => {
    vidas--;
    mostrarVidas();

    if (vidas <= 0) {
        alert("You lose! The word was: " + palabraElegida)
        location.reload;
    }
}

const mostrarVidas = () => {
    divVidas.textContent = `You have ${vidas} lifes`;
}
const prepararClicks = () => {
    let letras = document.querySelectorAll(".alphabet p");

    letras.forEach(letra => {
        letra.addEventListener("click", () => {
            let letraElegida = letra.textContent;
            let acierto = false;

            for (let i = 0; i < palabraElegida.length; i++) {
                if (palabraElegida[i] === letraElegida) {
                    espacios[i].textContent = letraElegida;
                    acierto = true;
                }
            }
            if (!acierto) {
                restarVida();
            }

            letra.style.pointerEvents = "none";
            letra.style.opacity = "0.3";
        });
    });
};

const main = () => {
    divVidas = document.createElement("div");
    divVidas.className = "vidas";
    document.body.appendChild(divVidas);

    mostrarVidas();

    crearEspacios();
    prepararClicks();
};

document.addEventListener("DOMContentLoaded", main);
