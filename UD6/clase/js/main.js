/**
 * Carga datos de una API y los muestra en un contenedor HTML.
 * Muestra los estados intermedios de la solicitud.
 */
function cargarDatos2() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contenedorDatos").innerHTML = this.responseText;
        }
        console.log("ReadyState:" + this.readyState, '-', this.status)

    };
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}

/**
 * Carga datos de una API y los muestra en un contenedor HTML.
 * No muestra los estados intermedios de la solicitud.
 * 
 */
function cargarDatos() {
    let xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let arDatos = JSON.parse(this.responseText);
            console.log(arDatos);
            document.getElementById("contenedorDatos").innerHTML = JSON.parse(this.responseText);
        }
        console.log("ReadyState:" + this.readyState, '-', this.status)
    };
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}

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
        precio.textContent = arDatos[i].price;
        img.src = arDatos[i].image;

        card.appendChild(id);
        card.appendChild(titulo);
        card.appendChild(precio);
        card.appendChild(img)
        card.id = `${arDatos[i].id}`;
        card.className = 'articulo';

        document.getElementById('contenedorDatos').appendChild(card)
    }
}

const filtrarPorCategoria = (arDatos, categoria) => {
    return arDatos.filter(producto => producto.category === categoria);
}

const mostrarArticulos = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let arDatos = JSON.parse(this.responseText);
            mostrarProductos(arDatos)

            document.getElementById("categoria").addEventListener("click", () => {
                let categoria = document.getElementById("categoria").value;
                if (categoria == "todas") {
                    mostrarProductos(arDatos);
                } else {
                    let arProductos = filtrarPorCategoria(arDatos, categoria)
                    mostrarProductos(arProductos)
                }
            })
        }
    }
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();
}
function main() {
    document.getElementById('cargaDatos').addEventListener('click', mostrarArticulos);



}

document.addEventListener("DOMContentLoaded", main());