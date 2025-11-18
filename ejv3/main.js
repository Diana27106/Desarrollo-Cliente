const inicializarEventos = () => {
    const linkCSS = document.getElementById('css-tema');
    const normal = document.getElementById('aNormal');
    const minimalista = document.getElementById('aMinimalista');

    normal.addEventListener('click', (event) => {
        event.preventDefault();
        linkCSS.setAttribute('href', 'styleNormal.css');
    });

    minimalista.addEventListener('click', (event) => {
        event.preventDefault();
        linkCSS.setAttribute('href', 'styleMinimalista.css');
    });
};

(function () {
    inicializarEventos();
})();
