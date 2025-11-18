(function () {
    // ---- VARIABLES ----
    const texto = document.getElementById('texto');
    let tamañoActual = 16;
    const tamañoBase = 16;

    // ---- FUNCIONES ----
    function aumentarFuente() {
        tamañoActual += 2;
        texto.style.fontSize = tamañoActual + 'px';
    }

    function disminuirFuente() {
        if (tamañoActual > 10) { // límite mínimo
            tamañoActual -= 2;
            texto.style.fontSize = tamañoActual + 'px';
        }
    }

    function fuentePorDefecto() {
        tamañoActual = tamañoBase;
        texto.style.fontSize = tamañoBase + 'px';
    }

    function alinearIzquierda() {
        texto.style.textAlign = 'left';
    }

    function justificarTexto() {
        texto.style.textAlign = 'justify';
    }

    // ---- EVENTOS ----
    document.getElementById('aumentar').addEventListener('click', aumentarFuente);
    document.getElementById('disminuir').addEventListener('click', disminuirFuente);
    document.getElementById('default').addEventListener('click', fuentePorDefecto);
    document.getElementById('izquierda').addEventListener('click', alinearIzquierda);
    document.getElementById('justificar').addEventListener('click', justificarTexto);

})();
