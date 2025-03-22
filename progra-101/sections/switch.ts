export let weekDay:number = 6 //Lunes 1, Martes 2, Miercoles 3, Jueves 4, Viernes 5

if (weekDay <=0) {
    throw Error ("Dia de la semana no permitido");
}
switch (weekDay) {
    case 1: console.log("Lunes");
    break;

    case 2: console.log("Martes");
    break;

    case 3: console.log("Miercoles");
    break;

    case 4: console.log("Jueves");
    break;

    case 5: console.log("Viernes");
    break;

    default:
        console.log("No es Lunes, martes, miercoles, jueves o viernes");
}
