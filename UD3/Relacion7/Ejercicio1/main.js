import { Persona } from "./Persona.mjs";

function calcularEdad(arPersonas) {
    return arPersonas.reduce((acumulador, persona) => acumulador + persona.edad, 0) / arPersonas.length;
}

(function () {
    const p1 = new Persona('Diana', 19);
    const arPersonas = [
        p1,
        new Persona('Carlos', 22),
        new Persona('Ana', 16),
        new Persona('Luis', 25)
    ];

    console.log(calcularEdad(arPersonas));
})();
