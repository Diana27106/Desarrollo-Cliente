function ageCalculator(birth) {
    let currentYear = 2025;
    let edad = currentYear-birth;
    let mensaje = "They are either " + (edad-1) + " or " + edad;
    return mensaje;
}

function supplyCalculator(age, maxAge, amount) {
    let tiempo = maxAge-age;
    let dias = 365 * tiempo;
    let resultado = dias * amount;
    return resultado  
}

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