export class Vivienda {
    constructor(calle, num, codigo) {
        this.calle = calle;
        this.num = num;
        this.codigo = codigo;
        this.show();
    }

    setNumero(num) {
        this.num = num;
    }

    setCalle(calle) {
        this.calle = calle;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    imprimeCalle() {
        return this.calle;
    }

    imprimeCodigoPostal() {
        return this.codigo;
    }

    imprimeNumero() {
        return this.num;
    }

    show() {
        console.log(`Nueva casa en calle: ${this.calle}, nº: ${this.num}, CP: ${this.codigo}.`)
    }
}