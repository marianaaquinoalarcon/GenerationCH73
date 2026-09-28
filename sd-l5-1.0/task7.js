export function rubricPerfect(calificacion) {
  let resultado;

    if (calificacion > 8 && calificacion < 11) {
    resultado = "Excellet";
} 
else if (calificacion == 11) {
    resultado = "Perfect";    
} 
else {
    resultado = "Pass";    
}

return resultado;
}
