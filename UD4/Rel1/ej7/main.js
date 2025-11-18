const inicializarEventos = () => {
    const tarjeta = document.getElementById('description-card');
    const celdas = document.querySelectorAll('input');
    celdas.forEach(celda => {
        celda.addEventListener('focus', () => {
            const descripcion = celda.getAttribute('data-description');
            if (descripcion) {
                tarjeta.textContent = descripcion;
                tarjeta.style.display = 'block';
            }
        })

        celda.addEventListener('blur', () => {
            tarjeta.style.display = 'none';
        })
    })

}
(function () {

    inicializarEventos();
})()