// Type your code below this line!
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function auto(marca,modelo,año,color, puertas,kilometraje,motor) {
    this.car = {
        marca: marca,
        modelo: modelo,
        año: año,
        color : color,
        puertas: puertas,
        kilometraje: kilometraje,
        motor:  motor
    };    
}

let marca = prompt("Ingresa la marca del auto : ");
let modelo = Number(prompt("Ingresa el modelo : ")); 
let año = Number(prompt("Ingresa el año de fabricacion : ")); 
let color = prompt("Ingresa el color del auto : "); 
let puertas = Number(prompt("Ingresa cantidad de puertas : ")); 
let kilometraje = Number(prompt("Ingresa el kilometraje : ")); 
let motor = prompt("Ingresa el tipo de motor : "); 

const autos = new auto(marca,modelo,año,color, puertas,kilometraje,motor);

console.log(autos.car);
// Type your code above this line!

