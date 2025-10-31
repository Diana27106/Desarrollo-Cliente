import { Alumno } from "./Alumno.mjs";
export class Colegio {
    constructor(nombre, numAulas, numAlumnos) {
        this.nombre = nombre;
        this.numAulas = numAulas;
        this.numAlumnos = numAlumnos;
        this.arAlumnos = [];
        for (let i = 0; i < numAlumnos; i++) {
            this.arAlumnos.push(new Alumno(i, `alumno${i}`, 5.00));
        }
    }

    consultarNotaMedia(id) {
        const al = this.arAlumnos.find(alumno => alumno.id == id)
        return al.nota;
    }

    modificarNotaMedia(id, nuevaNota) {
        const indice = this.arAlumnos.findIndex(alumno => alumno.id == id)
        this.arAlumnos[indice].nota = nuevaNota;
        return nuevaNota;
    }

}