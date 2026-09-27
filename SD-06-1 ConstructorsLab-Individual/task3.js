// Type your code below this line!
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
    this.printMail = function () {
      return this.subject + ": " + this.message;
    };
  }
  
  // Type your code below this line!
  let subj = prompt("Ingrese el asunto : ");
  let msg = prompt("Ingrese el mensaje : ");
  const newMail = new Mail(subj,msg);
  
  // Type your code above this line!
  
  console.log(newMail.printMail());