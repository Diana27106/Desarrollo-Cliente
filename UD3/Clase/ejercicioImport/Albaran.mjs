export class Albaran {
    constructor(cliente, numAlbaran, fecha, lineas) {
        this.cliente = cliente;
        this.numAlbaran = numAlbaran;
        this.fecha = fecha;
        this.lineas = lineas;
    }
show() {
    let articulos = "";
    for (let i = 0; i < this.lineas.length; i++) {
        articulos += this.lineas[i].nombre + " ";
    }
    console.log("ALBARAN: Cliente: " + this.cliente.nombre + " numAlbaran: " + this.numAlbaran + " fecha: " + this.fecha + " lineas: " + articulos)
}

addArticulo(articulo) {
    this.lineas.push(articulo)
}

getTotal() {
    let total = 0;
    let pvp = 0;
    for (let i = 0; i < this.lineas.length; i++) {
        pvp = this.lineas[i].pvp;
        total += pvp;
    }
    return total;
}
        }


