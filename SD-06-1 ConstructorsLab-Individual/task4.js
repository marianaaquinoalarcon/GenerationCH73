// Type your code below this line!
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function Journey(from,to) {
    this.start = from;
    this.end = to;
}
let from = prompt(" Ingresa el lugar donde inicia el viaje. : ");
let to = prompt(" Ingresa el lugar donde termina el viaje. : ");

// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")