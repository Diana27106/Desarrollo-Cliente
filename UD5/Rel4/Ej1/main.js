let intervalo;
let segundos = 0;

const actualizar = () => {
    const timer = document.getElementById("tiempo");

    let min = Math.floor(segundos / 60);
    let seg = segundos % 60;

    timer.textContent =
        (min < 10 ? "0" + min : min) + ":" +
        (seg < 10 ? "0" + seg : seg);
}

const contar = () => {
    segundos++;
    actualizar();
}

const main = () => {
    document.getElementById("start").addEventListener("click", () => {
        if (!intervalo) {
            intervalo = setInterval(contar, 1000);
        }
    })

    document.getElementById("stop").addEventListener("click", () => {
        clearInterval(intervalo);
        intervalo = null;
    })

    document.getElementById("reset").addEventListener("click", () => {
        clearInterval(intervalo);
        intervalo = null;
        segundos = 0;
        actualizar();
    })
}

document.addEventListener("DOMContentLoaded", main);