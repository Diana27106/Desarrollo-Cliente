import { Tablero } from './tablero.mjs';

// Función auxiliar para imprimir el tablero de forma legible
function imprimirTablero(tablero) {
    console.log('\n--- Tablero Actual ---');
    tablero.tablero.forEach((row, index) => {
        console.log(`Fila ${index}: ${row.map(cell => cell === null ? '-' : cell).join(' | ')}`);
    });
    console.log('----------------------');
}

// =======================================================
// Simulación 1: Victoria de 'X' en la Fila 0
// =======================================================

console.log('--- INICIO SIMULACIÓN 1: Victoria de X ---');
const juegoVictoria = new Tablero();
imprimirTablero(juegoVictoria);

// Turno 1 (X)
juegoVictoria.jugar(0, 0); // X en [0, 0]
imprimirTablero(juegoVictoria);

// Turno 2 (O)
juegoVictoria.jugar(1, 1); // O en [1, 1]

// Turno 3 (X)
juegoVictoria.jugar(0, 1); // X en [0, 1]
imprimirTablero(juegoVictoria);

// Turno 4 (O)
juegoVictoria.jugar(2, 2); // O en [2, 2]

// Turno 5 (X) -> ¡Victoria!
juegoVictoria.jugar(0, 2); // X en [0, 2]
imprimirTablero(juegoVictoria);
// Debería mostrar: ¡Juego Terminado! El ganador es el jugador con la ficha: X

console.log('-------------------------------------------');

// =======================================================
// Simulación 2: Empate
// =======================================================

console.log('\n--- INICIO SIMULACIÓN 2: Empate ---');
const juegoEmpate = new Tablero();

// Llenamos el tablero de forma que no haya victoria
juegoEmpate.jugar(0, 0); // X
juegoEmpate.jugar(0, 1); // O
juegoEmpate.jugar(0, 2); // X
juegoEmpate.jugar(1, 0); // O
juegoEmpate.jugar(1, 2); // X
juegoEmpate.jugar(1, 1); // O
juegoEmpate.jugar(2, 1); // X
juegoEmpate.jugar(2, 0); // O

// Ultimo movimiento (X) -> ¡Empate!
juegoEmpate.jugar(2, 2); // X
imprimirTablero(juegoEmpate);
// Debería mostrar: ¡Juego Terminado! Los jugadores han empatado.

console.log('-------------------------------------------');