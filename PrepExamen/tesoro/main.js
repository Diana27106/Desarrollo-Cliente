(function () {
    function buscarTesoro(mapa) {
        let fila = 1;
        let columna = 1;

        while (true) {
            const valor = mapa[fila - 1][columna - 1];
            console.log(`(${fila},${columna}) -> ${valor}`);

            if (valor === fila * 10 + columna) {
                console.log("Tesoro encontrado!");
                return [fila, columna];
            }

            fila = Math.floor(valor / 10);
            columna = valor % 10;
        }
    }

    function crearMapaVacio(filas, columnas) {
        let mapa = [];
        for (let i = 0; i < filas; i++) {
            mapa[i] = [];
            for (let j = 0; j < columnas; j++) {
                mapa[i][j] = 0;
            }
        }
        return mapa;
    }

    function elegirTesoro(filas, columnas) {
        return [
            Math.floor(Math.random() * filas) + 1,
            Math.floor(Math.random() * columnas) + 1
        ];
    }

    function crearCamino(fInicio, fFinal, cInicio, cFinal) {
        let camino = [[fInicio, cInicio]];
        let fila = fInicio;
        let columna = cInicio;

        while (fila !== fFinal || columna !== cFinal) {
            if (fila < fFinal) fila++;
            else if (fila > fFinal) fila--;

            if (columna < cFinal) columna++;
            else if (columna > cFinal) columna--;

            camino.push([fila, columna]);
        }

        return camino;
    }

    function rellenarMapaCamino(mapa, camino) {
        for (let i = 0; i < camino.length - 1; i++) {
            let [fila, columna] = camino[i];
            let [sFila, sColumna] = camino[i + 1];
            mapa[fila - 1][columna - 1] = sFila * 10 + sColumna;
        }

        let [fTesoro, cTesoro] = camino[camino.length - 1];
        mapa[fTesoro - 1][cTesoro - 1] = fTesoro * 10 + cTesoro;
    }

    function rellenarAleatorios(mapa) {
        for (let i = 0; i < mapa.length; i++) {
            for (let j = 0; j < mapa[i].length; j++) {
                if (mapa[i][j] === 0) {
                    let fila = Math.floor(Math.random() * mapa.length) + 1;
                    let columna = Math.floor(Math.random() * mapa[i].length) + 1;
                    mapa[i][j] = fila * 10 + columna;
                }
            }
        }
    }

    function crearMapa(filas, columnas) {
        let mapa = crearMapaVacio(filas, columnas);
        let [tFila, tColumna] = elegirTesoro(filas, columnas);

        let camino = crearCamino(1, tFila, 1, tColumna);

        rellenarMapaCamino(mapa, camino);
        rellenarAleatorios(mapa);

        return mapa;
    }

    let mapaAleatorio = crearMapa(5, 5);
    console.table(mapaAleatorio);
    let tesoro = buscarTesoro(mapaAleatorio);
    console.log("Tesoro encontrado en:", tesoro);
})();
