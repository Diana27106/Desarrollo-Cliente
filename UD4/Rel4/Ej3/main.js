const validarMinuscula = () => {
    const texto = document.getElementById("username").value.trim();
    const regExp = /[a-z]/;

    document.getElementById("lowercase").style.display =
        regExp.test(texto) ? 'none' : 'block';
};

const validarMayuscula = () => {
    const texto = document.getElementById("username").value.trim();
    const regExp = /[A-Z]/;

    document.getElementById("uppercase").style.display =
        regExp.test(texto) ? 'none' : 'block';
};

const valdiarLongitud = () => {
    const texto = document.getElementById("username").value.trim();
    const regExp = /^.{6,}$/;

    document.getElementById("minimum").style.display =
        regExp.test(texto) ? 'none' : 'block';
};

const validarFormulario = () => {
    const texto = document.getElementById("username").value.trim();

    const tieneMinuscula = /[a-z]/.test(texto);
    const tieneMayuscula = /[A-Z]/.test(texto);
    const longitudCorrecta = /^.{6,}$/.test(texto);

    const boton = document.getElementById("submit");

    if (tieneMinuscula && tieneMayuscula && longitudCorrecta) {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
}

(function () {
    document.getElementById("username").addEventListener("input", validarMinuscula);
    document.getElementById("username").addEventListener("input", validarMayuscula);
    document.getElementById("username").addEventListener("input", valdiarLongitud);
    document.getElementById("username").addEventListener("input", validarFormulario);

})();
