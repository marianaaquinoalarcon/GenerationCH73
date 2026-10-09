export function rubricExcellent(calificacion) {
    let resultado;
if (calificacion > 8 ) {
    resultado = "Excellent";
} else {
    resultado = "Pass";    
}
return resultado;
}