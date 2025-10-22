import { Cliente, saludar } from "./Cliente.mjs";
import { Articulo } from "./Articulo.mjs";
import { Albaran } from "./Albaran.mjs"
import { Albaranes } from "./Albaranes.mjs";

(function prueba() {

    const cliente1 = new Cliente("1234", "Pedro", "C/inventada nº2", "123456789", "pedro@email.com");
    const cliente2 = new Cliente("1245", "Maria", "C/inventada nº5", "012345678", "maria@email.com");
    const cliente3 = new Cliente("2345", "Juan", "C/inventada nº8", "987654321", "juan@email.com");

    const articulo1 = new Articulo(201, "Pelota", 8);
    const articulo2 = new Articulo(202, "Raqueta", 12);
    const articulo3 = new Articulo(203, "Patines", 100);
    const articulo4 = new Articulo(204, "Art4", 50);
    const articulo5 = new Articulo(207, "Art5", 20);

    const albaran1 = new Albaran(cliente1, "123", "2025-10-25", [articulo4, articulo5, articulo3]);
    const albaran2 = new Albaran(cliente1, "124", "2025-08-25", [articulo2, articulo3]);
    const albaran3 = new Albaran(cliente2, "125", "2025-10-25", [articulo2, articulo3]);
    const albaran4 = new Albaran(cliente3, "126", "2025-08-25", [articulo1, articulo2, articulo3]);
    const albaran5 = new Albaran(cliente1, "127", "2025-01-25", [articulo1, articulo4]);
    const albaran6 = new Albaran(cliente2, "128", "2025-12-25", [articulo3]);

    // albaran1.addArticulo(articulo3);
    // console.log("El precio total es de: " + albaran1.getTotal());
    // albaran1.show(albaran1);

    const arAlbaranes = [albaran1, albaran2, albaran3, albaran4, albaran5, albaran6];

    const arAlbaran = new Albaranes(arAlbaranes);
    console.table(arAlbaran);
    const arAlbaranfiltrado = arAlbaran.buscarFecha("2025-10-25");
    const arAlbaranfiltrado2 = arAlbaran.buscarCliente("1234");
    console.log(arAlbaranfiltrado);
    console.log(arAlbaranfiltrado2);
})()
