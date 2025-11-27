const infoNodo = (nodo) => {
    console.log('Info', nodo)
    console.log('Tipo', nodo.nodeType)
    console.log('Nombre', nodo.nodeName)
    console.log('Valor', nodo.nodeValue)
    console.log("Nº hijos", nodo.childNodes.lenght)
    console.log('Contenido: ', nodo.firstChild)
    console.log('Contenido: ', nodo.parentNode)
    console.log('Contenido: ', nodo.nextSibling)
    console.log('Contenido Elemento: ', nodo.firstElementChild)
    console.log('Contenido Elemento: ', nodo.nextElementSibling)
    console.log('Contenido Elemento: ', nodo.previousElementSibling)

}
/**
 * Muestra el nodo y todos sus hijos
 * @param {} nodo 
 */
const recorrerNodo = (nodo) => {
    // nodo.childNodes.forEach(hijo => {
    //     console.log(hijo)
    // });

    for (let hijo of nodo.children) {
        console.log(hijo)
    }

}

const recorreNodoRecursivo = (nodo) => {
    console.log(nodo)

    for (let hijo of nodo.children) {
        recorreNodoRecursivo(hijo)
    }
}

(function () {
    let nodo = document.getElementById("lista")
    infoNodo(nodo);
    // recorrerNodo(nodo);
    recorreNodoRecursivo(nodo)
})()