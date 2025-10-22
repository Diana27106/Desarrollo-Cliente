export class Albaranes {
    constructor(arAlbaran){
        this.arAlbaran = arAlbaran;
    }

    buscarFecha(fecha) {
        return this.arAlbaran.filter(elemento => elemento.fecha === fecha);
    }

    buscarCliente(nif) {
        return this.arAlbaran.filter(elemento => elemento.cliente.nif === nif);
    }
}