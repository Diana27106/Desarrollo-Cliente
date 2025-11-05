const inicializarEventos = () => {
    document.addEventListener('click', () => {
        alert('Enviar codigo')
    })
}
(function () {
    inicializarEventos()
})()