export class Casilla {
    constructor(fila, columna, tieneMina = false) {
        this.fila = fila;
        this.columna = columna;
        this.tieneMina = tieneMina;
        this.estaRevelada = false;
        this.estaMarcada = false;
        this.minasAlrededor = 0;
    }

    marcar() {
        this.estaMarcada = !this.estaMarcada;
    }

    revelar() {
        this.estaRevelada = true;
    }
}
