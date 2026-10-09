export function ageCalculator(año,mes,dia) {
    var hoy = new Date();

    let year = Number((hoy.getFullYear() - Number(año)));

    if (Number(mes) > (hoy.getMonth() + 1) || Number(dia) > hoy.getDay()) {
        year--;
    }
    
   return year;
}