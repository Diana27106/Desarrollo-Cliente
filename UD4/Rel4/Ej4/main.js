const validarNombre = () => {
    const texto = document.getElementById("nombre").value.trim();
    const regExp = /^[A-Z][a-z]+$/;

    document.getElementById("nombre").style.border =
        regExp.test(texto) ? '1px solid lightgreen' : '1px solid lightcoral';
};

const validarApellidos = () => {
    const texto = document.getElementById("apellido").value.trim();
    const regExp = /^[A-Z][a-z]+$/;

    document.getElementById("apellido").style.border =
        regExp.test(texto) ? '1px solid lightgreen' : '1px solid lightcoral';
};

const validarCorreo = () => {
    const texto = document.getElementById("email").value.trim();
    const regExp = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    document.getElementById("email").style.border =
        regExp.test(texto) ? '1px solid lightgreen' : '1px solid lightcoral';
};

const validarTelefono = () => {
    const texto = document.getElementById("telefono").value.trim();
    const regExp = /^[0-9]{9}$/;

    document.getElementById("telefono").style.border =
        regExp.test(texto) ? '1px solid lightgreen' : '1px solid lightcoral';
};

const validarContraseña = () => {
    const texto = document.getElementById("contraseña").value.trim();
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

    document.getElementById("contraseña").style.border =
        regExp.test(texto) ? '1px solid lightgreen' : '1px solid lightcoral';
};

const validarRepetirContraseña = () => {
    const texto = document.getElementById("contraseñaConf").value.trim();
    const pass = document.getElementById("contraseña").value.trim();
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

    const esValida = regExp.test(texto) && texto === pass;
    document.getElementById("contraseñaConf").style.border =
        esValida ? '1px solid lightgreen' : '1px solid lightcoral';
};

(function () {
    document.getElementById("nombre").addEventListener("input", validarNombre);
    document.getElementById("apellido").addEventListener("input", validarApellidos);
    document.getElementById("email").addEventListener("input", validarCorreo);
    document.getElementById("telefono").addEventListener("input", validarTelefono);
    document.getElementById("contraseña").addEventListener("input", validarContraseña);
    document.getElementById("contraseñaConf").addEventListener("input", validarRepetirContraseña);
})();
