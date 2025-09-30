function esPalindromo(scad){
    let scadInversa = "";
    for (let i=scad.length; i>=0; i--){
        scadInversa += scad.charAt(i);
    }
    if (scad == scadInversa){
        return true;
    }else{
        return false;
    }
}

function miSplit(cadena, delimitador){
    let arSplit = [];
    //Hacerlo con el while y el index of y substring

    for (let i=0; i<cadena.length; i++){
        if (cadena[i] === delimitador){
            arSplit.push()
        }
    }
    return arSplit
}


function contiene(cadena, subcadena){
    for (let i=0; i<cadena.length-subcadena.lenght; i++){
        let encontrado = true;

        for (let j=0; j<subcadena.length; j++){
            if (cadena[i] !== subcadena[j]){
                return true;
                break;
            }
        }
    }
    return false; 
}

