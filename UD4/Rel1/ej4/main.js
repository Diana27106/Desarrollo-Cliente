const inicializarEventos = () => {
    const arCeldas = document.querySelectorAll(".celdas")
    for (let i = 0; i < arCeldas.length; i++) {
        arCeldas[i].addEventListener('mouseover', (evt) => {
            if (evt.ctrlKey) {
                arCeldas[i].style.backgroundColor = 'red';
            }
            if (evt.shiftKey) {
                arCeldas[i].style.backgroundColor = 'blue';
            }
            if (evt.altKey) {
                arCeldas[i].style.backgroundColor = '#eee';
            }
        })
    }

    document.getElementById('borrar').addEventListener('click', () => {
        for (let i = 0; i < arCeldas.length; i++) {
            arCeldas[i].style.backgroundColor = '#eee';
        }
    })

}
(function () {
    inicializarEventos()
})()