// Type your code below this line!
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function FriendList(repeticiones) {
    this.friend = [];

        for (let i = 0; i < (repeticiones); i++) {
            let nombre = prompt("Ingresa el nombre de un amigo : ");
    
            this.friend.push(nombre);
        }
}

let repeticiones = Number(prompt("¿Cuantas palabras quieres ingresar al arreglo? : "));
let add = new FriendList(repeticiones);

console.log(add.friend);


// Type your code above this line!

