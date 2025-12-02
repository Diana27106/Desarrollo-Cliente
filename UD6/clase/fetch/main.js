// async function getFetch() {
//     let response = await fetch("https://fakestoreapi.com/products")
//     console.log(response);
//     console.log(await response.json())
// }

let articulos;
const mostrarProductos = (arDatos) => {
    document.getElementById("contenedorDatos").innerHTML = "";
    for (let i = 0; i < arDatos.length; i++) {
        let card = document.createElement('div');
        let id = document.createElement('p');
        let titulo = document.createElement('p');
        let precio = document.createElement('p');
        let img = document.createElement('img')

        id.textContent = arDatos[i].id;
        titulo.textContent = arDatos[i].title;
        precio.textContent = arDatos[i].price + "€";
        img.src = arDatos[i].image;

        card.appendChild(id);
        card.appendChild(titulo);
        card.appendChild(precio);
        card.appendChild(img)
        card.id = `${arDatos[i].id}`;
        card.className = 'articulo';

        document.getElementById('contenedorDatos').appendChild(card)
    }
    articulos = document.querySelectorAll(".articulo");
    for (let i = 0; i < articulos.length; i++) {
        articulos[i].addEventListener("click", () => {
            getInfo(articulos[i].id)
        })
    }
}

const mostrarArticulo = (articulo) => {
    document.getElementById("descripcion").innerHTML = "";
    let id = document.createElement('p');
    let titulo = document.createElement('p');
    let precio = document.createElement('p');
    let img = document.createElement('img')
    let descripcion = document.createElement('p')
    let category = document.createElement('p')
    let rating = document.createElement('p')

    id.textContent = articulo.id;
    titulo.textContent = articulo.title;
    precio.textContent = articulo.price + "€";
    img.src = articulo.image;
    descripcion.textContent = articulo.description;
    category.textContent = 'Categoría: ' + articulo.category;
    rating.textContent = 'Reseñas: ' + articulo.rating["rate"] + " | " + articulo.rating["count"];

    document.getElementById("descripcion").appendChild(id)
    document.getElementById("descripcion").appendChild(titulo)
    document.getElementById("descripcion").appendChild(precio)
    document.getElementById("descripcion").appendChild(img)
    document.getElementById("descripcion").appendChild(descripcion)
    document.getElementById("descripcion").appendChild(category)
    document.getElementById("descripcion").appendChild(rating)
}

function getFetchV2() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => mostrarProductos(json))
        .catch(error => console.log(error))
}

function getInfo(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => mostrarArticulo(json))
        .catch(error => console.log(error))
}

const main = () => {
    document.getElementById('cargaDatos').addEventListener('click', getFetchV2);

}

document.addEventListener('DOMContentLoaded', main)