import db from './json/db.json' with {type: "json"}

function crearDiv(arEstudiantes) {
    let newDiv;
    let newNombre;
    let newLevel;
    for (let i = 0; i < arEstudiantes.length; i++) {
        newDiv = document.createElement('div');
        newDiv.id = (arEstudiantes[i].id);

        //Creamos los párrafos
        let newP1 = document.createElement('p');
        let newP2 = document.createElement('p');


        //Creamos los nodos de texto
        newNombre = document.createTextNode(`Nombre: ${arEstudiantes[i].name}`);
        newLevel = document.createTextNode(`Nivel: ${arEstudiantes[i].level}`);

        //Insertamos los nodos de texto en los párrafos
        newDiv.appendChild(newP1);
        newDiv.appendChild(newP2)


        //Insertamos los párrafos en el div
        newP1.appendChild(newNombre);
        newP2.appendChild(newLevel);

        //Insertamos el div en el contenedor
        document.getElementById('contenedor').appendChild(newDiv)
    }

    //ESTILOS
    const div = document.querySelector('div');
    div.style.display = 'flex'


    const divs = document.querySelectorAll('div');
    divs.forEach(div2 => {
        div2.style.margin = '20px'
        div2.style.padding = '20px'
        div2.style.border = '1px solid black'
    });

}

/**
 * Filtra los estudiantes activos
 * @param {*} db Base de datos
 * @returns Un array con los estudiantes activos
 */
function filtrarEstudiantes(db) {
    return db.students.filter(estudiante => estudiante.active == true);
}


/**
 * Muestra el checkbox para filtrar los estudiantes activos
 */
function mostrarCheck() {
    let arEstudiantes = filtrarEstudiantes(db);
    let checkbox = document.querySelector("input[id=toggleSwitch]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.getElementById('contenedor').innerHTML = "";
            crearDiv(arEstudiantes);
            ampliarInfo()
        } else {
            document.getElementById('contenedor').innerHTML = "";
            crearDiv(db.students);
            ampliarInfo()
        }
    });
}

/**
 * Función para ampliar Información de los usuarios
 */
function ampliarInfo() {
    let arCards = document.querySelectorAll("div");

    for (let i = 1; i < arCards.length; i++) {
        arCards[i].addEventListener('click', function () {
            document.getElementById('respuesta').innerHTML = "";

            let id = arCards[i].getAttribute('id');
            //Ceamos el div
            let newDiv = document.createElement('div');

            //Creamos los párrafos
            let newP1 = document.createElement('p');

            //Creamos los nodos de texto
            let newRespuesta = document.createTextNode(`Nombre:${db.students[id - 1].name}, Nivel: ${db.students[id - 1].level}, Activo: ${db.students[id - 1].active}, ID: ${db.students[id - 1].id}`);
            //Insertamos los nodos de texto en los párrafos
            newDiv.appendChild(newP1);

            //Insertamos los párrafos en el div
            newP1.appendChild(newRespuesta);

            //Insertamos el div en el contenedor
            document.getElementById('respuesta').appendChild(newDiv)
        })
    }


}


const main = () => {
    crearDiv(db.students);
    mostrarCheck();
    ampliarInfo();
}

document.addEventListener('DOMContentLoaded', main);