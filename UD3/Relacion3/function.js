/**
 * Obtiene la nota de un alumno en un trimestre especifico
 * @param {number} nEstudiante Recibe el índice de un alumno
 * @param {number} nTrimestre Recibe un número de trimestre (1-3)
 * @returns La nota de ese alumno en ese trimestre. Si el trimestre no se da, se devuelve la media de todos los trimestres. 
 */
function obtenerNota(nEstudiante, nTrimestre) {
    const estudiante = arClase[nEstudiante];
    switch (nTrimestre) {
        case 1:
            return estudiante.nota1;
        case 2:
            return estudiante.nota2;
        case 3:
            return estudiante.nota3;
        default:
            let media = (estudiante.nota1 + estudiante.nota2 + estudiante.nota3) / 3;
            return Math.round(media, 2);
    }
}
/**
 * Calcula la media de edad de una clase    
 * @param {Array} arClase Recibe un array de objetos alumnos
 * @returns La medid de edad de los alumnos
 */
function edadMedia(arClase){
    let suma = 0;
    arClase.forEach(element => {
        suma += element.edad;
    });
    return suma / arClase.length
}

/**
 * Función que elige un alumno alazar de un array
 * @param {Array} arClase Recibe un array de objetos alumnos
 * @returns Devuelve el nombre aleatorio de uno de ellos
 */
function alumnoAlazar(arClase){
    let aleatorio = Math.floor(Math.random() * arClase.length);
    return arClase[aleatorio].nombre;
}

function paresImpares(){
    const arNumeros = [];
    for (let i = 0; i<100; i++){
        arNumeros.push(Math.floor(Math.random()*1000))+1;
    }
    return arNumeros;
}

function darAlta(){
    let nombre = prompt("Introduce el nombre: ");
    let ventas = parseInt(prompt("Introduce las ventas brutas del vendedor:"));
    arVendedores.push({nombre: nombre, ventas:ventas});
    let vendedor = arVendedores[arVendedores.length-1]
    return calcualarSalario(vendedor);
}
function calcualarSalario(vendedor){
    return semana + (vendedor.ventas * 0.9);
}

function arrayToCero(ar){
    return ar.map(elemento => elemento = 0); 
}

function arrayIncrementado(ar){
    return ar.map(elemento => elemento + 1);
}

function arrayToString(ar){
    let resultado = "";
    ar.forEach(elemento => resultado += elemento + " ");
    return resultado;
}

function lanzarDado(){
    let dado1 = Math.floor(Math.random()*6)+1;
    let dado2 = Math.floor(Math.random()*6)+1;
    return dado1 + dado2;
}

function lanzarDado2(){
    return Math.floor(Math.random()*6)+1;
}