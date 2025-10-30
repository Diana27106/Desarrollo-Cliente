import { Puzzle } from "./Puzzle.mjs";

(function () {
    // Crear un puzzle de 3x3
    const puzzle = new Puzzle(3);
    puzzle.dibujar();

    // Mover el hueco
    puzzle.mover("arriba");
    puzzle.dibujar();

    // Comprobar si está resuelto
    if (puzzle.estaResuelto()) {
        console.log("🎉 ¡Puzzle resuelto!");
        const tiempoTotal = (puzzle.tiempoFin - puzzle.tiempoInicio) / 1000;
        console.log(`Tiempo: ${tiempoTotal} segundos`);
    }

})();
