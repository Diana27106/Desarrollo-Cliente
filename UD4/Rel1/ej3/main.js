const tiempoInicio = Date.now();
let timerId;

const actualizarTiempo = () => {
    const tiempoActual = Date.now();
    const diferenciaTiempo = tiempoActual - tiempoInicio;
    const segundos = Math.floor(diferenciaTiempo / 1000);
    document.getElementById('tiempo').textContent = segundos;
}

const inicializarContador = () => {
    timerId = setInterval(actualizarTiempo, 1000);
}

const inicializarEventos = () => {
    window.addEventListener('load', inicializarContador);
    window.addEventListener('beforeunload', () => {
        clearInterval(timerId);
    }
    );
}

(function () {
    inicializarEventos();
})()