const tablero = document.getElementById("tablero");

let piezas = [...Array(15).keys()].map(n => n + 1);
piezas.push("");

// Mezclamos (simple shuffle)
piezas.sort(() => Math.random() - 0.5);

// 2. Pintar el tablero
function dibujarTablero() {
    tablero.innerHTML = "";

    piezas.forEach((valor, index) => {
        const celda = document.createElement("div");
        celda.classList.add("celda");

        if (valor === "") {
            celda.classList.add("vacio");
        } else {
            // Valor = 1..15 → posición del trozo
            const x = ((valor - 1) % 4) * -100;
            const y = Math.floor((valor - 1) / 4) * -100;

            celda.style.backgroundImage = "url('img/images.jpg')";
            celda.style.backgroundPosition = `${x}px ${y}px`;

            celda.addEventListener("click", () => mover(index));
        }

        tablero.appendChild(celda);
    });
}

dibujarTablero();

// 3. Intentar mover una casilla
function mover(indice) {
    const vacio = piezas.indexOf("");

    // Calcular adyacencias en un grid 4x4
    const esAdyacente =
        indice === vacio - 1 && vacio % 4 !== 0 ||
        indice === vacio + 1 && indice % 4 !== 0 ||
        indice === vacio - 4 ||
        indice === vacio + 4;

    if (esAdyacente) {
        // Intercambiar
        [piezas[indice], piezas[vacio]] = [piezas[vacio], piezas[indice]];
        dibujarTablero();
        comprobarVictoria();
    }
}

// 4. Comprobar si has ganado
function comprobarVictoria() {
    for (let i = 0; i < 15; i++) {
        if (piezas[i] !== i + 1) return;
    }
    alert("¡Has ganado!");
}
