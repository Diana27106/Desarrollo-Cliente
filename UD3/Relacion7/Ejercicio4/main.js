import { Vivienda } from "./Vivienda.mjs";

(function () {
    const casaA = new Vivienda('Garcia Prieto', 58, 15706);
    const casaB = new Vivienda('Camino Caneiro', 29, 32004);
    const casaC = new Vivienda('San Clemente', 's/n', 15705);
    console.log(casaA.imprimeCodigoPostal())
    console.log(casaC.imprimeCalle())
})();
