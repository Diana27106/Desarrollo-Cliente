import { Buscamina } from "./Buscamina.mjs";

(function main() {
    // Configuración de prueba
    const FILAS = 8;
    const COLUMNAS = 8;
    const MINAS = 10;

    // Crear juego
    const juego = new Buscamina(FILAS, COLUMNAS, MINAS);

    // Variables auxiliares del test (algunas propiedades del Buscamina original pueden no haber sido inicializadas)
    if (typeof juego.casillasNoMinasRestantes === "undefined") {
        // calcular casillas no minas restantes inicial
        juego.casillasNoMinasRestantes = FILAS * COLUMNAS - MINAS;
    }
    if (typeof juego.estadoJuego === "undefined") {
        juego.estadoJuego = "NO_INICIADO";
    }

    // Función para representar casilla en texto
    function representarCasilla(c) {
        if (c.estaMarcada) return "F"; // bandera
        if (!c.estaRevelada) return "."; // oculta
        if (c.tieneMina) return "M"; // mina revelada
        return c.minasAlrededor > 0 ? String(c.minasAlrededor) : " "; // número o espacio
    }

    // Imprimir tablero al completo (modo diagnóstico: muestra todo si debug true)
    function imprimirTablero(mostrarTodas = false) {
        console.log("Estado del tablero:");
        let header = "   ";
        for (let j = 0; j < juego.columnas; j++) header += j.toString().padStart(2, " ") + " ";
        console.log(header);
        for (let i = 0; i < juego.filas; i++) {
            let filaTexto = i.toString().padStart(2, " ") + " ";
            for (let j = 0; j < juego.columnas; j++) {
                const cas = juego.tablero[i][j];
                if (mostrarTodas) {
                    // mostrar minas y números independientemente de revelar
                    if (cas.tieneMina) filaTexto += " M ";
                    else filaTexto += " " + (cas.minasAlrededor > 0 ? cas.minasAlrededor : " ") + " ";
                } else {
                    filaTexto += " " + representarCasilla(cas) + " ";
                }
            }
            console.log(filaTexto);
        }
        console.log(`Estado juego: ${juego.estadoJuego}; Casillas sin mina restantes: ${juego.casillasNoMinasRestantes}`);
        console.log("");
    }

    // Estado inicial (oculto)
    imprimirTablero(false);

    // Revelar una casilla aleatoria que no esté marcada (intentar hasta encontrar una sin mina para ver expansión)
    function revelarAlgunaNoMina() {
        for (let i = 0; i < juego.filas; i++) {
            for (let j = 0; j < juego.columnas; j++) {
                const c = juego.tablero[i][j];
                if (!c.tieneMina) {
                    console.log(`Revelando casilla (${i}, ${j}) que no tiene mina`);
                    juego.revelarCasilla(i, j);
                    return { i, j };
                }
            }
        }
        return null;
    }

    // Marcar una casilla con mina para probar marcarCasilla
    function marcarUnaMinaConocida() {
        for (let i = 0; i < juego.filas; i++) {
            for (let j = 0; j < juego.columnas; j++) {
                if (juego.tablero[i][j].tieneMina) {
                    console.log(`Marcando casilla (${i}, ${j}) que tiene mina (prueba de marcar)`);
                    juego.marcarCasilla(i, j);
                    return { i, j };
                }
            }
        }
        return null;
    }

    // Revelar casilla con mina (para probar perdida) - sólo si queremos forzar pérdida
    function revelarMinaParaPerder() {
        for (let i = 0; i < juego.filas; i++) {
            for (let j = 0; j < juego.columnas; j++) {
                if (juego.tablero[i][j].tieneMina) {
                    console.log(`Revelando casilla con mina (${i}, ${j}) para probar pérdida`);
                    juego.revelarCasilla(i, j);
                    return { i, j };
                }
            }
        }
        return null;
    }

    // Empezar pruebas
    juego.iniciarTiempo?.(); // iniciar tiempo si existe (uso opcional del método)
    imprimirTablero(false);

    // Revelar una casilla sin mina y ver cambio
    revelarAlgunaNoMina();
    imprimirTablero(false);

    // Marcar una mina conocida
    marcarUnaMinaConocida();
    imprimirTablero(false);

    // Mostrar tablero completo para diagnóstico (muestra todas las minas y números)
    console.log("Mostrar tablero completo (diagnóstico)");
    imprimirTablero(true);

    // Probar revelar una mina para forzar final pérdida (comentar si no quieres perder en la prueba)
    // revelarMinaParaPerder();
    // imprimirTablero(true);

    // Detener tiempo si existe
    juego.detenerTiempo?.();

    console.log("Prueba finalizada.");
})();
