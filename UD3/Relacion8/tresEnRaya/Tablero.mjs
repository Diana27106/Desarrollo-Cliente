export class Tablero {
    constructor() {
        this.tablero = [];
        for (let i = 0; i < 3; i++) {
            this.tablero[i] = [];
            for (let j = 0; j < 3; j++) {
                this.tablero[i][j] = null;
            }
        }
        this.j1 = 'X';
        this.j2 = 'O';

        this.turno = this.j1;
    }

    jugar(fila, col) {
        if (fila < 0 || fila > 2 || col < 0 || col > 2) {
            console.log("ERROR: Las coordenadas deben estar entre 0 y 2.");
            return;
        }

        if (this.tablero[fila][col] != null) {
            console.log("ERROR: Esta celda ya está ocupada por " + this.tablero[fila][col]);
            return;
        }

        const simboloJugado = this.turno;
        this.tablero[fila][col] = simboloJugado;

        const esVictoria = this.verificarVictoria(fila, col);

        if (esVictoria) {
            console.log("El ganador es el jugador: " + simboloJugado);
            return;
        } else {
            const esEmpate = this.hayEmpate();

            if (esEmpate) {
                console.log("Los judadores han empatado");
                return;
            } else {
                this.turno = this.turno == this.j1 ? this.j2 : this.j1
            }
        }
    }

    verificarVictoria(fila, col) {
        if (this.tablero[fila][0] == this.tablero[fila][1] && this.tablero[fila][0] == this.tablero[fila][2] && this.tablero[fila][col] != null) {
            return true;
        } else {
            return false;
        }

        if (this.tablero[0][col] == this.tablero[1][col] && this.tablero[0][col] == this.tablero[2][col] && this.tablero[fila][col] != null) {
            return true;
        } else {
            return false;
        }

        if (fila == col) {
            if (this.tablero[0][0] != null &&
                this.tablero[0][0] == this.tablero[1][1] &&
                this.tablero[0][0] == this.tablero[2][2]) {
                return true;
            }
        }


        if ((fila + col) == 2) {
            if (this.tablero[0][2] != null &&
                this.tablero[0][2] == this.tablero[1][1] &&
                this.tablero[0][2] == this.tablero[2][0]) {
                return true;
            }
        }

        return false;
    }

    hayEmpate() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.tablero[i][j] == null) {
                    console.log("No hay empate")
                    return false;
                }
            }
        }
        return true;
    }
}