const validarMayusculas = () => {
    const texto = 'HolaMundo';
    const regExp = /[A-Z]/;

    if (regExp.test(texto)) {
        console.log("Texto con al menos una mayúscula")
    } else {
        console.log("El texto no contiene ninguna mayúscula")
    }
}

const validarCaracteresEspeciales = () => {
    const texto = 'HolaMundo!';
    const regExp = /[!@#$%^&*]/;

    if (regExp.test(texto)) {
        console.log("Texto con al menos un caracter especial")
    } else {
        console.log("El texto no contiene ningún caracter especial")
    }
}

const validarCorreo = () => {
    const texto = 'diana@gmail.com';
    const regExp = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regExp.test(texto)) {
        console.log("Correo valido")
    } else {
        console.log("Correo invalido")
    }
}

const valdiarTarjetaCredito = () => {
    const texto = '0000000000000000';
    const regExp = /^[0-9]{16}$/;

    if (regExp.test(texto)) {
        console.log("Tarjeta valida")
    } else {
        console.log("Tarjeta invalida")
    }
}

const valdiarLongitud = () => {
    const texto = 'holamun';
    const regExp = /^.{8,}$/;

    if (regExp.test(texto)) {
        console.log("Texto váldio")
    } else {
        console.log("Error, texto de menos de 8 caracteres")
    }
}

const validarNumero = () => {
    const texto = 'HolaMundo1';
    const regExp = /[0-9]/;

    if (regExp.test(texto)) {
        console.log("Texto con al menos un numero")
    } else {
        console.log("El texto no contiene ningun numero")
    }
}
(function () {
    validarMayusculas();
    validarCaracteresEspeciales();
    validarCorreo()
    valdiarTarjetaCredito()
    valdiarLongitud()
    validarNumero()
})();
