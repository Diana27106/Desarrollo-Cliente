const inicializarEventos = () => {
    document.getElementById('imagenTexto').addEventListener("mouseover", () => {
        document.getElementById('imagenTexto').src = './img2.png';
    });
    document.getElementById('imagenTexto').addEventListener("mouseout", () => {
        document.getElementById('imagenTexto').src = './img.png';
    });

    const celdas = document.querySelectorAll('#tablaColores td');
    celdas.forEach(celda => {
        const color = celda.getAttribute('data-color');
        const nombre = celda.getAttribute('data-nombre');

        celda.addEventListener('mouseover', () => {
            celda.style.backgroundColor = color;
            celda.style.color = 'white';
        })

        celda.addEventListener('mouseout', () => {
            celda.style.backgroundColor = 'white';
            celda.style.color = 'black';
            celda.textContent = nombre;
        })
    })

}
(function () {

    inicializarEventos();
})()