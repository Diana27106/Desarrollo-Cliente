(function () {
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    const parrafo = document.createElement("p");
    parrafo.className = "parrafo";
    parrafo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    contenedor.appendChild(parrafo);

    const enlace = document.createElement("a");
    enlace.href = "#";
    enlace.textContent = "Ver Artículo Completo";
    contenedor.appendChild(enlace);
    let textoCompleto = false;
    enlace.addEventListener("click", function (event) {
        event.preventDefault();
        if (!textoCompleto) {
            parrafo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            enlace.textContent = "Ver Menos";
            textoCompleto = true;
        } else {
            parrafo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
            enlace.textContent = "Ver Artículo Completo";
            textoCompleto = false;
        }
    });

    document.body.appendChild(contenedor);
})