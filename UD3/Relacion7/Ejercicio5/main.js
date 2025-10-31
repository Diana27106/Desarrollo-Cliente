import { Alumno } from "./Alumno.mjs";
import { Colegio } from "./Colegio.mjs";

(function () {
    const col1 = new Colegio('Jorbalan', 6, 10);
    console.log(col1.consultarNotaMedia(5))
    console.log(col1.modificarNotaMedia(5, 10))
    console.log(col1.consultarNotaMedia(5))
})();
