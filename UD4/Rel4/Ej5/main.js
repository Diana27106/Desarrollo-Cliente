const validarTitular = () => {
    const texto = document.getElementById("card-holder").value.trim();
    const regExp = /^[A-Za-z]+(?: [A-Za-z]+)+$/;

    document.getElementById("card-holder").style.border =
        regExp.test(texto) ? '1px solid lightgreen' : '1px solid lightcoral';
};

const validarNum = () => {
    const texto = document.getElementById("card-number").value.trim();
    const regExp = /^\d{4} \d{4} \d{4} \d{4}$/

    document.getElementById("card-number").style.border =
        regExp.test(texto) ? '1px solid lightgreen' : '1px solid lightcoral';
};

const validarCvv = () => {
    const texto = document.getElementById("cvv").value.trim();
    const regExp = /^[1-3]{3,}$/

    document.getElementById("cvv").style.border =
        regExp.test(texto) ? '1px solid lightgreen' : '1px solid lightcoral';
};


(function () {
    document.getElementById("card-holder").addEventListener("input", validarTitular);
    document.getElementById("card-number").addEventListener("input", validarNum);
    document.getElementById("cvv").addEventListener("input", validarCvv);
})();
