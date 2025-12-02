let arProductos = [];

// Añadir producto
const addProduct = (producto) => {
    arProductos.push(producto);
    renderList();
};

// Eliminar producto
const deleteProduct = (producto) => {
    arProductos = arProductos.filter(p => p !== producto);
    renderList();
};

// Editar producto
const updateProduct = (producto, nuevoProducto) => {
    let indice = arProductos.indexOf(producto);
    arProductos[indice] = nuevoProducto;
    renderList();
};

// Limpiar lista
const clearAll = () => {
    arProductos = [];
    renderList();
};

// Pintar lista en pantalla
const renderList = () => {
    const ul = document.querySelector(".contenedor");
    ul.innerHTML = "";

    arProductos.forEach(producto => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${producto}
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        // botón eliminar
        li.querySelector(".delete").onclick = () => deleteProduct(producto);

        // botón editar
        li.querySelector(".edit").onclick = () => {
            let nuevo = prompt("Edit item:", producto);
            if (nuevo) updateProduct(producto, nuevo);
        };

        ul.appendChild(li);
    });
};

const main = () => {
    // botón añadir
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        let prod = document.getElementById("ingrediente").value.trim();

        if (prod !== "") addProduct(prod);

        document.getElementById("ingrediente").value = "";
    });

    // botón limpiar
    document.getElementById("clear").addEventListener("click", clearAll);
};

document.addEventListener("DOMContentLoaded", main);
