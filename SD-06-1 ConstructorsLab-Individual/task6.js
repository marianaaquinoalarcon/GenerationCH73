// Type your code below this line!
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function compras(cant, prod) {
    this.ListaCompras = {
        cantidad: cant,
        producto: prod
    };    
}

let prod = prompt("Ingresa el producto que desea comprar : ");
let cant = Number(prompt("Ingresa la cantidad de productos : ")); 

const comp = new compras(cant, prod);
console.log(comp.ListaCompras);
// Type your code above this line!

