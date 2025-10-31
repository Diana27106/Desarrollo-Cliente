import { Punto } from "./Punto.mjs";
import { Recta } from "./Recta.mjs";

(function () {
    const p1 = new Punto(5, 3);
    const p2 = new Punto(2, 2);
    const l1 = new Recta(p1, p2);
    console.log(l1)
})();
