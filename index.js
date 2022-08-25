/*
1- Ingresar y mostrar las notas de una comision, calcular e informar:

    El promedio de los alumnos desaprobados (notas < 4)
    El promedio de los alumnos aprobados (notas >= 4)
    El promedio de los alumnos promocionados (notas >= 7, tambien cuentan como aprobados)
    La minima y maxima nota ingresada
    Se desconoce la cantidad de notas
*/

/* Contadores */
let desaprobados = 0;
let aprobados = 0;
let promocionados = 0;

/* Variable para la nota */
let nota;

/* Acumuladores */
let acumDesaprobados = 0;
let acumAprobados = 0;
let acumPromocionados = 0;

/* Variables para maximo y minimo */
let notaMax = Number.NEGATIVE_INFINITY;
let notaMin = Number.POSITIVE_INFINITY;

do {

    nota = parseInt(prompt("Nota:"));

    /* Desaprobado */
    if(nota < 4) {

        desaprobados++;
        acumDesaprobados += nota;
    }
    /* Aprobado */
    else {

        aprobados++;
        acumAprobados += nota;
        /* Promocionado */
        if(nota >= 7) {
            promocionados++;
            acumPromocionados += nota;
        }
    }

    /* Algoritmo para hallar maximo y minimo */
    if(nota > notaMax) {
        notaMax = nota;
    } 
    if(nota < notaMin) {
        notaMin = nota;
    }

} while(confirm("Otra nota?"));

console.log(`Promedio de desaprobados es: ${(acumDesaprobados / desaprobados).toFixed(1)}`);
console.log(`Promedio de aprobados es: ${(acumAprobados / aprobados).toFixed(1)}`);
console.log(`Promedio de promocionados es: ${(acumPromocionados / promocionados).toFixed(1)}`);

console.log(`La nota maxima fue: ${notaMax}`);
console.log(`La nota minima fue: ${notaMin}`);