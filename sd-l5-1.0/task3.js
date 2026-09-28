export function ageCalculator(año,mes,dia) {
    var hoy = new Date();

    this.year = hoy.getFullYear() - año;

    if (mes > (hoy.getMonth() + 1) || dia > hoy.getDay()) {
        this.year -= 1;
    }
    
   return this.year;
}