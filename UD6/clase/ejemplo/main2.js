import { get } from './httpCliente.js';

let tarjetas;

const card = (objeto) => {
    let tarjeta = document.createElement('div');
    let genero = document.createElement('p');
    let estado = document.createElement('p');
    let nombre = document.createElement('p');
    let img = document.createElement('img');

    genero.textContent = `Gender: ${objeto.gender}`;
    estado.textContent = `Status: ${objeto.status}`;
    nombre.textContent = objeto.name;
    img.src = objeto.image;

    tarjeta.id = objeto.id;
    tarjeta.className = 'articulo';

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(genero);
    tarjeta.appendChild(estado);
    tarjeta.appendChild(img);

    return tarjeta;
};

const cards = (arObjetos) => {
    const contenedor = document.getElementById("contenedorDatos");

    for (let i = 0; i < arObjetos.length; i++) {
        let tarjeta = card(arObjetos[i]);
        contenedor.appendChild(tarjeta);
    }

    tarjetas = document.querySelectorAll(".articulo");
    for (let i = 0; i < tarjetas.length; i++) {
        tarjetas[i].addEventListener("click", () => {

            console.log(tarjetas[i].id)
            getInfo(tarjetas[i].id)
        })
    };
}

const cardInfo = (card) => {
    document.getElementById("descripcion").innerHTML = "";
    let id = document.createElement('p');
    let name = document.createElement('p');
    let status = document.createElement('p');
    let img = document.createElement('img')
    let species = document.createElement('p')
    let createdAt = document.createElement('p')

    id.textContent = card.id;
    name.textContent = card.name;
    status.textContent = card.status;
    img.src = card.image;
    species.textContent = card.species;
    createdAt.textContent = card.createdAt;

    document.getElementById("descripcion").appendChild(id)
    document.getElementById("descripcion").appendChild(name)
    document.getElementById("descripcion").appendChild(status)
    document.getElementById("descripcion").appendChild(img)
    document.getElementById("descripcion").appendChild(species)
    document.getElementById("descripcion").appendChild(createdAt)
}


function getFetch(url) {
    get(url)
        .then(json => cards(json.items))
}

function getInfo(id) {
    get(`https://futuramaapi.com/api/characters/${id}`)
        .then(json => cardInfo(json))
}

const main = () => {
    getFetch("https://futuramaapi.com/api/characters");
};

document.addEventListener("DOMContentLoaded", main);