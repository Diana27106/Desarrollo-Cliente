const validarNombre = () => {
    const texto = document.getElementById("nombre").value.trim();
    const regExp = /^[A-Z][a-z]+$/;

    document.getElementById("nombre").style.border =
        regExp.test(texto) ? '1px solid green' : '1px solid red';
};

const validarApellidos = () => {
    const texto = document.getElementById("apellidos").value.trim();
    const regExp = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

    document.getElementById("apellidos").style.border =
        regExp.test(texto) ? '1px solid green' : '1px solid red';
};

const validarCorreo = () => {
    const texto = document.getElementById("email").value.trim();
    const regExp = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    document.getElementById("email").style.border =
        regExp.test(texto) ? '1px solid green' : '1px solid red';
};

const valdiarDNI = () => {
    const texto = document.getElementById("DNI").value.trim();
    const regExp = /^[0-9]{8}[A-Z]$/;

    document.getElementById("DNI").style.border =
        regExp.test(texto) ? '1px solid green' : '1px solid red';
};

const valdiarTelefono = () => {
    const texto = document.getElementById("telefono").value.trim();
    const regExp = /^[0-9]{9}$/;

    document.getElementById("telefono").style.border =
        regExp.test(texto) ? '1px solid green' : '1px solid red';
};

const validarUsuario = () => {
    const texto = document.getElementById("usuario").value.trim();
    const regExp = /^[0-9!.,:;!?_\-@#$%^&*\/]{8,}$/;

    document.getElementById("usuario").style.border =
        regExp.test(texto) ? '1px solid green' : '1px solid red';
};

(function () {
    document.getElementById("nombre").addEventListener("input", validarNombre);
    document.getElementById("apellidos").addEventListener("input", validarApellidos);
    document.getElementById("DNI").addEventListener("input", valdiarDNI);
    document.getElementById("telefono").addEventListener("input", valdiarTelefono);
    document.getElementById("email").addEventListener("input", validarCorreo);
    document.getElementById("usuario").addEventListener("input", validarUsuario);
})();
