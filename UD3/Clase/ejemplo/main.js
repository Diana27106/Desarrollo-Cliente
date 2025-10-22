import { Articulo } from "./Articulo.mjs"
import { Articulos } from "./Articulos.mjs";

let dbDatosArticulos = [];

let fInit = () => {
    let art1 = new Articulo(1, "Camiseta", 19.99);
    let art2 = new Articulo(2, "Pantalon", 39.99);
    let art3 = new Articulo(3, "Zapatos", 59.99);
    let dbArt = new Articulos([art1, art2, art3, new Articulo(4, "Chaqueta", 89.99)]);
    console.log(dbArt.existeArticulo(1))
    console.table(dbArt.filtraPorPrecio(50))
    console.table(dbArt.filtra(({ cod }) => cod < 3))
    dbDatosArticulos.push(art1, art2, art3);
    dbArt.removeArticulo(2);
    console.table(dbArt)
    console.log("Datos inicializados")
}

(function () {

    // console.log("Mensaje desde main.js");
    fInit()
    // console.log(dbDatosArticulos);
    //Destructuración
    // const precio = dbDatosArticulos.filter(({ precio }) => precio > 30);
    // console.table(precio);
})()
