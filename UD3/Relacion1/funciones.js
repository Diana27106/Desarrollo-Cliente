function valorMaximo (v1, v2, v3, v4){
    return Math.max(v1, v2, v3, v4);
}

function lanzamiento(){
    return Math.floor(Math.random()*6) + 1;
}

function contarTiradas(){
    const contadores = [0, 0, 0, 0, 0, 0];

    for (let i=0; i<6000; i++){
        let num = lanzamiento();
        contadores[num-1]++;
    }
    return contadores;
}

function volumen(radio){
    return 4/3 * Math.PI * Math.pow(radio, 3);
}

function area(radio){
    return Math.PI * Math.pow(radio, 2);
}

function potencia(base, exp){
    if (exp === 0){
        return 1;
    } else {
        return base *  potencia(base, exp - 1);
    }
}

function factorial(n){
    if (n < 2){
        return 1;
    } else {
        return n * (factorial(n-1))
    } 
}