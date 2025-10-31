export class Puzzle {
    constructor(dimensiones) {
        this.dimensiones = dimensiones;
        this.tablero = [];
        this.hueco = null;
        this.movimientos = 0;
        this.tiempoInicio = null;
        this.tiempoFin = null;

        this.generarTablero();
    }

    generarTablero() {
        const numeros = [];
        for (let i = 1; i < this.dimensiones * this.dimensiones; i++) {
            numeros.push(i);
        }
        numeros.push(null);

        numeros.sort(num => Math.random() - 0.5);

        this.tablero = [];
        for (let fila = 0; fila < this.dimensiones; fila++) {
            const inicio = fila * this.dimensiones;
            const fin = inicio + this.dimensiones;
            const filaTablero = numeros.slice(inicio, fin);
            this.tablero.push(filaTablero);
        }

        for (let fila = 0; fila < this.dimensiones; fila++) {
            for (let col = 0; col < this.dimensiones; col++) {
                if (this.tablero[fila][col] == null) {
                    this.hueco = { fila, col };
                }
            }
        }

        this.tiempoInicio = Date.now();
    }

    mover(direccion) {
        const { fila, col } = this.hueco;
        let nuevaFila = fila;
        let nuevaCol = col;

        switch (direccion) {
            case "arriba":
                nuevaFila--;
                break;
            case "abajo":
                nuevaFila++;
                break;
            case "izquierda":
                nuevaCol--;
                break;
            case "derecha":
                nuevaCol++;
                break;
            default:
                console.log("Dirección no válida");
                return;
        }

        if (
            nuevaFila < 0 ||
            nuevaFila >= this.dimension ||
            nuevaCol < 0 ||
            nuevaCol >= this.dimension
        ) {
            console.log("Movimiento no válido");
            return;
        }

        this.tablero[fila][col] = this.tablero[nuevaFila][nuevaCol];
        this.tablero[nuevaFila][nuevaCol] = null;

        this.hueco = { fila: nuevaFila, col: nuevaCol };
        this.movimientos++;
    }

    estaResuelto() {
        let contador = 1;
        for (let fila = 0; fila < this.dimension; fila++) {
            for (let col = 0; col < this.dimension; col++) {
                if (fila === this.dimension - 1 && col === this.dimension - 1) {
                    return this.tablero[fila][col] === null;
                }
                if (this.tablero[fila][col] !== contador) {
                    return false;
                }
                contador++;
            }
        }
        this.tiempoFin = Date.now();
        return true;
    }


    dibujar() {
        console.log("Movimientos: " + this.movimientos);
        console.log("Tablero:");

        for (let fila of this.tablero) {
            console.log(fila.map(celda => celda == null ? "_" : celda.toString().padStart(2, " ")).join(" "))
        }
    }

}