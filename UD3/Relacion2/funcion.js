function rellenarArray(arr, limite){ 
    for(let i=0; i<20; i++){
        arr.push((Math.floor(Math.random()*limite)))
    }
}
function sum  (arNum){
    let suma=0;
    for (let i=0; i<arNum.length; i++){
        suma+=arNum[i];
    }
    return suma
}
        
function valorMedio(arNum){return (sum(arNum)/arNum.length)}

/**
 * El número de palabras de un string
 * @param {string} cadena Introduce una cadena de texto
 * @returns Devuelve el número de palabras 
 */
function numPalabras(cadena){
    let arPalabras = cadena.split(" ");
    return arPalabras.length;
}
/**
 * La primera palabra de un String 
 * @param {string} cadena Introduce una cadena de texto
 * @returns La primera palabra de un sting
 */
function primeraPalabra(cadena){
    let arPalabras = cadena.split(" ");
    return arPalabras[0];
}
/**
 * La última palabra de un String 
 * @param {string} cadena Introduce una cadena de texto
 * @returns La última palabra de un sting
 */
function ultimaPalabra(cadena){
    let arPalabras = cadena.split(" ");
    return arPalabras[arPalabras.length-1];
}
/**
 * Transforma un String a un Array de palabras en orden inverso al original. 
 * @param {string} cadena Introduce una cadena de texto
 * @returns Un array ordenado por palabras en el orden inverso al ingresado
 */
function ordenInverso(cadena){
    let arPalabras = cadena.split(" ");
    let arInverso = [];
    for (let i=arPalabras.length; i>0; i--){
        arInverso.push(arPalabras[i-1]);
    }
    return arInverso;
}
/**
 * Transforma un String a un Array de palabras ordenado de a-z
 * @param {string} cadena Introduce una cadena de texto
 * @returns Un array ordenado de a-z
 */
function ordenAsc(cadena){
    cadena = cadena.toLowerCase();
    let arPalabras = cadena.split(" ");
    return arOredenado = arPalabras.sort();
}

/**
 * Transforma un String a un Array de palabras ordenado de z-a
 * @param {string} cadena Introduce una cadena de texto
 * @returns Devuelve un array ordenado de z-a
 */
function ordenDes(cadena){
    cadena = cadena.toLowerCase();
    let arPalabras = cadena.split(" ");
    let arOrdenado = arPalabras.sort();
    let arInverso = [];
    for (let i=arOrdenado.length; i>0; i--){
        arInverso.push(arOrdenado[i-1]);
    }
    return arInverso;
}

module.exports = {
    numPalabras,
    primeraPalabra,
    ultimaPalabra,
    ordenInverso,
    ordenAsc,
    ordenDes
};
