
let productos = [
  { nombre: "Labial", precio: 150, disponible: true },
  { nombre: "Rimel", precio: 220, disponible: true },
  { nombre: "Base", precio: 300, disponible: false }
];
const prompt = require("prompt-sync")();
const nombreProd = prompt("Ingresa el nombre del producto a consultar : ");
let resultado = mostrarProductos(nombreProd);
console.log(resultado);
function mostrarProductos(nombreP) { 
    console.log(nombreP);
    let posicion = productos.findIndex( producto => producto.nombre === nombreP );
    console.log(posicion);
    return productos[posicion].nombre +" cuesta $" + productos[posicion].precio + " disponible " + productos[posicion].disponible;
};
 