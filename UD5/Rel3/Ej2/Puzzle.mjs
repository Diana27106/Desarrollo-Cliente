export class Puzzle {
    constructor() {
        this.tablero = [];
        this.hueco = null;
        this.columnas = 4;
        this.filas = 4;
    }

    generarTablero() {
        const arTablero = [];
        for (let i = 0; i < this.columnas * this.filas; i++) {
            arTablero.push(i);
        }

        arTablero.push(null)

        arTablero.sort(num => Math.random() - 0.5);
        return arTablero;
    }
}