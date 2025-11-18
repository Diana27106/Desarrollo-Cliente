function crearDiv(nodoPadre, num) {
    const body = document.body;
    let newDiv;
    let newText;
    for (let i = 0; i < num; i++) {
        newDiv = document.createElement('div');
        newDiv.id = "div" + i;
        newText = document.createTextNode("Esto es el div " + (i + 1) + " con id: " + newDiv.id);
        newDiv.appendChild(newText);
        nodoPadre.appendChild(newDiv)
    }
}

document.addEventListener('DOMContentLoaded', crearDiv(document.getElementById('contenedor'), 5));