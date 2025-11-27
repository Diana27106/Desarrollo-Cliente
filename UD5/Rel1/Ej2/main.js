(function () {
    let arPersonas = [
        { codigo: 1, dni: "4455544X", Nombre: "Juan López López", edad: 18 },
        { codigo: 2, dni: "7778888X", Nombre: "Luis Mateo López", edad: 25 },
        { codigo: 3, dni: "6654545M", Nombre: "Pedro Guitierrez López", edad: 41 },
        { codigo: 4, dni: "9998897X", Nombre: "María Guitierrez López", edad: 32 },
    ];

    let contenedor = document.createElement('div');
    contenedor.className = 'contenedor';

    arPersonas.forEach(persona => {
        let tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        tarjeta.textContent = `Código: ${persona.codigo} - Nombre: ${persona.Nombre} - Edad: ${persona.edad}`;
        contenedor.appendChild(tarjeta);
    }
    );
    document.body.appendChild(contenedor);

})()