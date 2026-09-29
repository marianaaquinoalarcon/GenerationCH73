import promptSync from 'prompt-sync';
const prompt = promptSync();

export class Producto {
    constructor(nombre,precio,disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarinfo(){
        return "| Producto : "+this.nombre + " | Precio : $"+this.precio + " | Disponibilidad :  " + this.disponible + " |";
    }

    cambiarDisponibilidad(){
       if (this.disponible === true) {
        this.disponible = false;
       } else {
        this.disponible = true;
       }        
    }
}

export class Maquillaje extends Producto{
    constructor (nombre,tono){
        super(nombre);
        this.tono = tono;
    }
    mostrarinformacion(){
        return "| Producto : "+this.nombre + " | Tono : " + this.tono + "|";
    }

}
