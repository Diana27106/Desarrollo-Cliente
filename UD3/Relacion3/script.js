function buscarNota(nEst, nTri) {
    const alumno = arClase[nEst]

    if (nTri === undefined) {
        let media = (alumno.nota1 + alumno.nota2 + alumno.nota3) / 3;
        return media.toFixed(2);
    } else {
        let propiedad = "nota" + nTri;
        return alumno[propiedad];
    }
}

function edadMedia(){
    const suma =  arClase.reduce((c, e) => c + e.edad, 0);
    return suma / arClase.length
}

function elegirAl(){
    let random = Math.floor(Math.random()*arClase.length);
    return arClase[random].nombre;
}

function paresImpares(){
    let arNum = [];
    for (let i=0; i<100; i++){
        n = Math.floor(Math.random()*1000)+1;
        arNum.push(n);
    }
    return arNum;
}

import { validateEmail } from './validators';

import { validateEmail } from './validators';

