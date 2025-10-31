export class Telefono {
    constructor(num) {
        this.num = num;
        this.numLlamadas = 0;
    }

    llamar() {
        console.log('Llamando, bip, bip....')
        this.numLlamadas++;
    }
}