import db from './db/db.json' with {type: 'json'}


const filtrarPorCategoria = (categoria) => {
    return db.filter(producto => producto.category === categoria);
}

const mostrarProductos = (arProductos) => {
    document.getElementById("productos").innerHTML = "";
    for (let i = 0; i < arProductos.length; i++) {
        let card = document.createElement('div');
        let id = document.createElement('p');
        let titulo = document.createElement('p');
        let precio = document.createElement('p');
        let img = document.createElement('img');

        id.textContent = arProductos[i].id;
        titulo.textContent = arProductos[i].title;
        precio.textContent = arProductos[i].price;
        img.src = arProductos[i].image;

        card.appendChild(id);
        card.appendChild(titulo);
        card.appendChild(precio);
        card.appendChild(img);
        card.id = `${db[i].id}`;
        card.className = 'articulo';

        document.getElementById('productos').appendChild(card)
    }
    let arProd = document.querySelectorAll('.articulo');
    arProd.forEach(articulo => {
        articulo.addEventListener("click", () => {
            console.log(arProductos[articulo.id].description)
            let info = mostrarInfo(arProductos[articulo.id - 1]);
            let infoDiv = document.getElementById("info");
            infoDiv.innerHTML = "";
            let pInfo = document.createElement("p");
            pInfo.textContent = info;
            infoDiv.appendChild(pInfo);
        })
    });
}

function mostrarInfo(articulo) {
    return articulo.description;
}

(function () {
    document.getElementById("categoria").addEventListener("click", () => {
        let categoria = document.getElementById("categoria").value;
        if (categoria == "todas") {
            mostrarProductos(db);
        } else {
            let arProductos = filtrarPorCategoria(categoria)
            mostrarProductos(arProductos)
        }
    })
})()