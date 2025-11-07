const inicializarEventos = () => {
    document.getElementById('btn-1').addEventListener('click', () => {
        alert('Enviar codigo')
    })
}
(function () {
    const btn = document.querySelector("button");

    function random(number) {
        return Math.floor(Math.random() * (number + 1))
    }

    btn.addEventListener("click", () => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    })
    inicializarEventos()
})()