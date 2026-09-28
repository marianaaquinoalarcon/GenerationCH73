export class FriendAge {
    constructor(nombre,año,mes,dia){
        
     var hoy = new Date();
    
    this.name = nombre;
    this.year = hoy.getFullYear() - año;
    if (mes > (hoy.getMonth() + 1) && dia > hoy.getDay()) {
        this.year -= 1;
    }
    }
    returnAge () {
        return this.name + " is " + this.year + " today!";
    }
}