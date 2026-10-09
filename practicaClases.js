
class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    /*mostrarInfo(){ //funcion agregada por dentro 
    return this.nombre + " cuesta $" + this.precio + " disponibilidad "+ this.disponible;    
    }*/
}

Producto.prototype.mostrarInfo = function () { //funcion agregada por fuera pero pertenece a la clase
    return this.nombre + " cuesta $" + this.precio + " disponibilidad "+ this.disponible;
}

const p1 = new Producto("Labial",150,true);
const p2 = new Producto("Rimel",180,false);
const p3 = new Producto("Base",250,true);

console.log(p1.mostrarInfo());
console.log(p2.mostrarInfo());
console.log(p3.mostrarInfo());