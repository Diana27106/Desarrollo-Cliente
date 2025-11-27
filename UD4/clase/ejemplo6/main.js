const verificar = (nombre) => {
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');


    for (let i = 0; i < ca.length; i++) {
        let elemento = ca[i];
        const arElemento = elemento.split('=');

        // debugger
        // console.log("arElemento[0]" + arElemento[0])
        if (arElemento[0].trim() == nombre) {
            return arElemento[1];
        }
    }
    return null;
}

const fCrearCookie = () => {
    document.cookie = "usuario=Juan";
    document.cookie = "tema=oscuro";
}

const fMostrarCookie = () => {
    console.log("Valor de 'tema':", verificar('numero'));
    alert("Todas las cookies:\n" + document.cookie);
}

const fFecha = (nombre, valor, diasExpiracion) => {
    let d = new Date();
    d.setTime(d.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
    let expiracion = d.toUTCString();
    document.cookie = nombre + "=" + valor + "; expires=" + expiracion + "; path=/";
}

const mainCookies = () => {
    const button = document.getElementById("btnCookie");
    if (button) {
        button.addEventListener('click', fCrearCookie);
    }

    const button2 = document.getElementById("mostrarCookie");
    if (button2) {
        button2.addEventListener('click', fMostrarCookie);
    }

    // This sets the 'apellido' cookie to expire in 7 days
    fFecha("apellido", "Perez", 7);
}

document.addEventListener('DOMContentLoaded', function () {
    mainCookies();
});