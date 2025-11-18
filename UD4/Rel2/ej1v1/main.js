const main = () => {
    const normal = document.getElementById('aNormal');
    const minimalista = document.getElementById('aMinimalista');

    // Guardamos estilos originales como cadenas
    const bodyStyle = document.querySelector('body').getAttribute('style') || '';
    const navStyle = document.querySelector('nav').getAttribute('style') || '';
    const mainStyle = document.querySelector('main').getAttribute('style') || '';
    const divStyle = document.querySelector('div').getAttribute('style') || '';
    const asideStyle = document.querySelector('aside').getAttribute('style') || '';

    const enlaces = document.querySelectorAll('a');

    normal.addEventListener('click', (event) => {
        event.preventDefault();

        document.getElementById('visible').style.display = 'block';

        // Estilos nav
        const nav = document.querySelector('nav');
        nav.style.backgroundColor = 'lightblue';
        nav.style.boxShadow = '2px 2px 2px darkblue';
        nav.style.padding = '10px';

        // Estilos enlaces
        enlaces.forEach(element => {
            element.style.color = 'blue';
            element.style.fontWeight = 'bolder';
        });

        // Estilos body
        const body = document.querySelector('body');
        body.style.fontFamily = 'Arial, sans-serif';
        body.style.backgroundColor = 'lightyellow';

        // Estilos main
        const main = document.querySelector('main');
        main.style.padding = '20px';
        main.style.width = '80%';
        main.style.float = 'right';

        // Estilos div
        const divResaltado = document.querySelector('div');
        divResaltado.style.backgroundColor = 'yellow';
        divResaltado.style.border = '1px solid black';

        // Estilos aside
        const aside = document.querySelector('aside');
        aside.style.backgroundColor = 'blue';
        aside.style.height = '100vh';
        aside.style.width = '10%';
        aside.style.float = 'left';
    });

    minimalista.addEventListener('click', (event) => {
        event.preventDefault();

        document.getElementById('visible').style.display = 'none';

        // Restaurar estilos originales
        document.querySelector('body').setAttribute('style', bodyStyle);
        document.querySelector('nav').setAttribute('style', navStyle);
        document.querySelector('main').setAttribute('style', mainStyle);
        document.querySelector('div').setAttribute('style', divStyle);
        document.querySelector('aside').setAttribute('style', asideStyle);

        enlaces.forEach(a => a.removeAttribute('style'));
    });
};

document.addEventListener('DOMContentLoaded', main);
