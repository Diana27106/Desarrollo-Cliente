const expresionRegular = () => {
    const texto = '43T42';

    const regNumero = RegExp(/^\d+$/);
    const regNumero2 = /^\d+$/;

    if (regNumero.test(texto)) {
        console.log('Num valido')
    } else {
        console.log('Num invalido')
    }
}

const buscarCodigo = () => {
    const codigo = '12345, 25681, 202';
    const regNum = /\d{5}/g

    let arrNum;

    while ((arrNum = regNum.exec(codigo)) !== null) {
        console.log(arrNum)
        console.log(`Se encontro ${arrNum[0]}. El siguiente empieza en ${regNum.lastIndex}`)
    }
}

(function () {
    buscarCodigo();
})()