const inicializarEventos = () => {
    document.addEventListener('mouseover', (evt) => {
        document.getElementById('coordenadas').textContent = `(${evt.clientX}:${evt.clientY})`
    })
}
(function () {
    inicializarEventos()
})()