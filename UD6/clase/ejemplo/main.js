import { get } from './httpCliente.js';
const card = (objeto) => {
    // return dom card
    let tarjeta = document.createElement('div');
    let genero = document.createElement('p');
    let estado = document.createElement('p');
    let nombre = document.createElement('p');
    let img = document.createElement('img')

    genero.textContent = `Gender: ${objeto.gender}`;
    estado.textContent = `Status: ${objeto.status}`;
    nombre.textContent = objeto.name;
    img.src = objeto.image;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(genero);
    tarjeta.appendChild(estado);
    tarjeta.appendChild(img)
    tarjeta.id = objeto.items.id;
    tarjeta.className = 'articulo';
}

const cards = (arObjetos) => {
    //Por cada elemento llama a card dentro de un grid y el appenchild
    for (let i = 0; i < arObjetos.items.lenght; i++) {
        debugger
        let tarjeta = card(arObjetos.items[i]);
        document.getElementById("contenedorDatos").appendChild(tarjeta);
    }

}

function getFetch(url) {
    get(url)
        .then(json => cards(json))
}
const main = () => {
    getFetch("https://futuramaapi.com/api/characters");
}

document.addEventListener("DOMContentLoaded", main)