const inicializarEventos = () => {
    document.addEventListener('load', (evt) => {
        console.log(evt)
    })
}
(function () {
    inicializarEventos()
})()