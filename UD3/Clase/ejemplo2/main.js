import db from './json/db.json'  with {type: 'json'};

/**
 * Devuelve un array con la combinación de estudiantes y cursos.
 * @param {*} db base de datos conlos tres atributos
 * @returns un array con la combinación de estudiantes y cursos
 */
function combinaEstudiantesYCursos(db) {
    let combinaArrayEstudiantesYCursos = [];
    return combinaArrayEstudiantesYCursos = combinaArrayEstudiantesYCursos.concat(db.students, db.courses);
}

/**
 * Devuelve un array con la combinación de estudiantes y cursos.
 * @param {*} db base de datos conlos tres atributos
 * @returns un array con la combinación de estudiantes y cursos
 */
function combinaEstudiantesYCursos2(db) {
    return [...db.students, ...db.courses]
}
/**
 * 
 * @param {*} db Recibe una base de datos
 * @param {*} idAlumno recibe el id a buscar
 * @returns devuelve un array de ids de los cursos del alumno con x id
 */
function devueleCursosAlumno(db, idAlumno) {
    let arId = [];
    const arEnrollment = db.enrollments;
    const arMatricula = arEnrollment.filter(({ studentId }) => studentId == idAlumno);
    // arMatricula.forEach(element => {
    //     arId.push(element.courseId);
    // });

    function transforma(obEnrollment) {
        return obEnrollment.courseId;
    }
    arId = arMatricula.map(elemento => elemento.courseId)
    return arId;
}

function devueleCursosAlumno2(db, idAlumno) {
    const arMatricula = db.enrollments.filter(({ studentId }) => studentId == idAlumno);
    return arMatricula.map(({ courseId, enrollmentDate, completed }) => ({ courseId, enrollmentDate, completed }));
}

function ordenar(db) {
    return db.enrollment.sort((a, b) => new Date(a.enrollmentDate) - new Date(b.enrollmentDate));
}
(function () {
    console.log("Hola desde main12.js");
    console.log("Cargando datos desde JSON...");
    console.log(db);
    console.log("Estudiantes", db.students);
    console.log("Cursos", db.courses);
    console.log("Enrollments", db.enrollments);

    console.log(combinaEstudiantesYCursos(db));
    console.log(devueleCursosAlumno2(db, 2))
    console.log(ordenar(db))
})();