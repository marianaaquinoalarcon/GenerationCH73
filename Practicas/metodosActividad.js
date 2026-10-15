/*const contact = {
    "forename":"Ash",
    "surname":"Springs",
    "fullname": function () {
        return "Ash Springs"
    }
}*/
/*const contact = {
    "forename":"Ash",
    "surname":"Springs",
    "fullname": function () {
        return this.forename + " "+ this.surname;
    }
}

let ashSpringsFullName = contact.fullname();
//console.log(ashSpringsFullName());
console.log(ashSpringsFullName);


function funcionamientoMath(){
    const numeroRandom = Math.random();
  //  console.log(numeroRandom());
   // console.log(Math.PI);
}
*/
//crear
function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;

    this.mostrarInfo = function () {
        return this.nombre +" cuesta $" + this.precio;
    };
}
//crear  tres productos
const producto1 = new Producto("Labial",150)
const producto2 = new Producto("Rimel",100)
const producto3 = new Producto("Base",250)
//despues
console.log(producto1.mostrarInfo());
console.log(producto2.mostrarInfo());
console.log(producto3.mostrarInfo());