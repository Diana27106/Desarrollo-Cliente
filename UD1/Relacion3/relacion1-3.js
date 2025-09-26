/**
 * Calcula tu edad
 * @param {*} birth Tu año de nacimiento
 * @returns Tu edad actual aproximada
 */
function ageCalculator(birth) {
    let currentYear = 2025;
    let edad = currentYear-birth;
    let mensaje = "They are either " + (edad-1) + " or " + edad;
    return mensaje;
}
/**
 * Calcula la comida que vas a necesitar de por vida
 * @param {*} age Tu edad actual
 * @param {*} maxAge La edad máxima estandar
 * @param {*} amount Cantidad de comida diaria
 * @returns Cuanta comida vas a necesitar de por vida
 */

function supplyCalculator(age, maxAge, amount) {
    let tiempo = maxAge-age;
    let dias = 365 * tiempo;
    let resultado = dias * amount;
    return resultado  
}
/**
 * Calcula la circunferencia de un circulo con su radio
 * @param {*} radio Introduce el radio del circulo
 * @returns La circunferencia del circulo
 */
function circumference(radio) {
    const pi=3.14159;
    return 2*pi*radio;
}

function area(radio) {
    const pi=3.14159;
    return pi*(radio * radio);
}

function convertTemperatureCF(cel) {
    return (cel * 9/5) + 32
}

function convertTemperatureFC(far) {
    return (far - 32) * 5/9
}