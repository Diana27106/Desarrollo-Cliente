

const inicializarEventos = () => {
    document.getElementById("div1").addEventListener("mouseover", (evt) => {
        document.getElementById("div1").style.backgroundColor = 'lightgreen';
        document.getElementById("div1").textContent = `(${evt.pageX}, ${evt.pageY})`;
        console.log('Objeto evento:', evt);
        console.log(`Evento: ${evt.type} en ${evt.target.id}`)
        console.log(evt.ctrlKey)
    })
    document.getElementById("div1").addEventListener("mouseout", (evt) => {
        document.getElementById("div1").style.backgroundColor = 'lightgray';
        document.getElementById("div1").textContent = `1`;
    })
}

(function () {
    inicializarEventos()
})()