export function rubricExcellent(calificacion) {
    let resultado;
if (calificacion > 8 ) {
    resultado = "Excellet";
} else {
    resultado = "Pass";    
}
return resultado;
}