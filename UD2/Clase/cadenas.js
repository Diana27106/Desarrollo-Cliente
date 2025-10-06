function esPalindromo(scad) {
    let scadInversa = "";
    for (let i = scad.length - 1; i >= 0; i--) {
        scadInversa += scad.charAt(i);
    }
    return scad === scadInversa;
}

function miSplit(cadena, delimitador) {
    let arSplit = [];
    let inicio = 0;
    let indiceDelimitador = cadena.indexOf(delimitador, inicio);

    while (indiceDelimitador !== -1) {
        arSplit.push(cadena.substring(inicio, indiceDelimitador));
        inicio = indiceDelimitador + delimitador.length;
        indiceDelimitador = cadena.indexOf(delimitador, inicio);
    }
    arSplit.push(cadena.substring(inicio));

    return arSplit;
}


function contiene(cadena, subcadena) {
    for (let i = 0; i <= cadena.length - subcadena.length; i++) {
        let encontrado = true;
        for (let j = 0; j < subcadena.length; j++) {
            if (cadena[i + j] !== subcadena[j]) {
                encontrado = false;
                break; 
            }
        }
        if (encontrado) {
            return true;
        }
    }
    return false;
}