export function rubricPassFail(calificacion) {
    let resultado ;
    if (calificacion >= 5) {
        resultado = "Pass";
    } else {
        resultado = "Fall";
    }
return resultado;
}