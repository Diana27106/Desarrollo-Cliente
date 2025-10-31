import { Telefono } from "./Telefono.mjs";

(function () {
    const t1 = new Telefono(642940700);
    t1.llamar();
    console.log(t1.numLlamadas)
    t1.llamar();
    t1.llamar();
    console.log(t1.numLlamadas)
})();
