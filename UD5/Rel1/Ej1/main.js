(function () {
    console.log(document.querySelectorAll('a').length)
    console.log(document.querySelectorAll('a')[document.querySelectorAll('a').length - 2].href)
    let enlaces = document.querySelectorAll('a');
    let contadorGoogle = 0;
    enlaces.forEach(enlace => {
        if (enlace.href.includes('www.google.es')) {
            contadorGoogle++;
        }
    });
    console.log(`Número de enlaces a www.google.es: ${contadorGoogle}`);

    let parrafos = document.querySelectorAll('p')
    console.log(parrafos[2].children.length);
})()