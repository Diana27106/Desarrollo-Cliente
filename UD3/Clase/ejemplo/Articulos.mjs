export class Articulos {
    constructor(arArticulo) {
        this.arArticulo = arArticulo;
    }

    inicializarDatos() {
        const arArticulo = [];
        for (let i = 0; i < 5; i++) {
            arArticulo.push()
        }
    }

    existeArticulo(cod) {
        if (this.arArticulo.find(({ cod }) => cod == cod) == undefined) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Devuelve un array con los array superiores a precioMin
     * @param {*} precioMin 
     */
    filtraPorPrecio(precioMin) {
        return this.arArticulo.filter(({ precio }) => precio > precioMin)
    }

    /**
     * Filtra los articulos según la función de callback proporcionada
     * @param {*} callback función de filtro
     */
    filtra(callback) {
        return this.arArticulo.filter(callback)
    }

    addArticulo(articulo) {
        return this.arArticulo.push(articulo)
    }

    removeArticulo(codigo) {
        let indice = this.arArticulo.findIndex(({ cod }) => cod == codigo);
        return this.arArticulo.splice(indice, 1);
    }
}