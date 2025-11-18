const inicializarEventos = () => {
    const campo = document.getElementById('mensaje');
    campo.addEventListener('blur', () => {
        const contenidoActual = campo.value;
        const resultado = contenidoActual.replaceAll("&", "and");
        campo.value = resultado;
    })
}
(function () {
    inicializarEventos();
})()