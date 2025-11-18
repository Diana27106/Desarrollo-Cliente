const inicializarEventos = () => {
    const imagenes = document.querySelectorAll("img");
    imagenes.forEach(imagen => {
        let arrastrar = false;
        let offsetX, offsetY;

        imagen.addEventListener('mousedown', (imagen) => {
            arrastrar = true;
            offsetX = imagen.offsetX;
            offsetY = imagen.offsetY;
            imagen.style.cursor = 'grabbing';
        })

        document.addEventListener('mouseup', () => {
            arrastrar = false;
            imagen.style.cursor = 'grab';
        })

        document.addEventListener('mousemove', (img) => {
            if (arrastrar) {
                imagen.style.left = img.pageX - offsetX + 'px';
                imagen.style.top = img.pageY - offsetY + 'px';
            }
        })
    });

}
(function () {
    inicializarEventos();
})()