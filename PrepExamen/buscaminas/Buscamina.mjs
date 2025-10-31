import { Casilla } from "./Casilla.mjs";

export class Buscamina {
    constructor(filas, columnas, totalMinas, tiempoLimiteSegundos = Infinity) {
        this.filas = filas;
        this.columnas = columnas;
        this.totalMinas = Math.min(totalMinas, filas * columnas);
        this.tiempoLimiteSegundos = tiempoLimiteSegundos;

        this.estadoJuego = "NO_INICIADO";
        this.tiempoInicio = null;
        this.tiempoTranscurido = 0;
        this.tiempoActual = null;
        this._intervaloId = null;

        this.tablero = this.inicializarTablero();
        this.casillasNoMinasRestantes = filas * columnas - this.totalMinas;
    }

    inicializarTablero() {
        const tablero = [];
        for (let i = 0; i < this.filas; i++) {
            tablero[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                tablero[i][j] = new Casilla(i, j, false);
            }
        }
        this.tablero = tablero;
        this.colocarMinas();
        this.calcularNumeros();
        return tablero;
    }

    colocarMinas() {
        let minasColocadas = 0;
        while (minasColocadas < this.totalMinas) {
            const filaRandom = Math.floor(Math.random() * this.filas);
            const colRandom = Math.floor(Math.random() * this.columnas);
            if (!this.tablero[filaRandom][colRandom].tieneMina) {
                this.tablero[filaRandom][colRandom].tieneMina = true;
                minasColocadas++;
            }
        }
    }

    calcularNumeros() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                let contadorMinas = 0;
                if (!this.tablero[i][j].tieneMina) {
                    for (let di = -1; di <= 1; di++) {
                        for (let dj = -1; dj <= 1; dj++) {
                            if (di === 0 && dj === 0) continue;
                            const ni = i + di;
                            const nj = j + dj;
                            if (ni >= 0 && ni < this.filas && nj >= 0 && nj < this.columnas) {
                                if (this.tablero[ni][nj].tieneMina) contadorMinas++;
                            }
                        }
                    }
                }
                this.tablero[i][j].minasAlrededor = contadorMinas;
            }
        }
    }

    revelarCasilla(fila, col) {
        // comprobaciones de rango
        if (fila < 0 || fila >= this.filas || col < 0 || col >= this.columnas) return;

        const cas = this.tablero[fila][col];

        // no revelar si ya está revelada o marcada
        if (cas.estaRevelada || cas.estaMarcada) return;

        cas.revelar();

        if (cas.tieneMina) {
            this.estadoJuego = "PERDIDO";
            this.detenerTiempo();
            return;
        }

        // actualizar contador de casillas restantes si no es mina
        this.casillasNoMinasRestantes--;
        if (this.casillasNoMinasRestantes === 0) {
            this.estadoJuego = "GANADO";
            this.detenerTiempo();
            return;
        }

        // si no hay minas alrededor, revelar recursivamente vecinos
        if (cas.minasAlrededor === 0) {
            this.revelarVecinos(fila, col);
        }
    }

    marcarCasilla(fila, col) {
        if (fila < 0 || fila >= this.filas || col < 0 || col >= this.columnas) return;
        const cas = this.tablero[fila][col];
        if (cas.estaRevelada) return;
        // alternar marca en vez de sólo poner true
        cas.estaMarcada = !cas.estaMarcada;
    }

    revelarVecinos(fila, col) {
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                if (di === 0 && dj === 0) continue;
                const ni = fila + di;
                const nj = col + dj;
                if (ni >= 0 && ni < this.filas && nj >= 0 && nj < this.columnas) {
                    const vecino = this.tablero[ni][nj];
                    if (!vecino.estaRevelada && !vecino.estaMarcada) {
                        // llamar a revelarCasilla que ya protege contra rango y condiciones
                        this.revelarCasilla(ni, nj);
                    }
                }
            }
        }
    }

    iniciarTiempo() {
        if (this._intervaloId !== null) return; // ya iniciado
        this.tiempoInicio = new Date();
        this.estadoJuego = "JUGANDO";
        // guardar id del intervalo para poder cancelarlo después
        this._intervaloId = setInterval(() => this.verificarTiempo(), 1000);
    }

    detenerTiempo() {
        if (this._intervaloId !== null) {
            clearInterval(this._intervaloId);
            this._intervaloId = null;
        }
    }

    verificarTiempo() {
        if (!this.tiempoInicio) return;
        this.tiempoActual = new Date();
        this.tiempoTranscurido = (this.tiempoActual - this.tiempoInicio) / 1000;
        if (this.tiempoTranscurido > this.tiempoLimiteSegundos) {
            this.estadoJuego = "TIEMPO_ACABADO";
            this.detenerTiempo();
        }
    }
}
