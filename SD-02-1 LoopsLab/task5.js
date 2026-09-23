//Puede indicar al usuario que introduzca el número de líneas que se generarán, o que genere una línea específica

const prompt = require("prompt-sync")();
let lineas = Number(prompt("Introduca el numero hasta donde llegara la secuencia : ")) 
for (let i = 0; i < lineas; i++) {
  if((i+1)%3==0 && (i+1)%5!=0 && (i+1)%7!=0){
    console.log("Fizz");
  }
  if ((i+1)%3!=0 && (i+1)%5==0 && (i+1)%7!=0) {
    console.log("Buzz");
  }
  if ((i+1)%3==0 && (i+1)%5==0 && (i+1)%7!=0) {
    console.log("FizzBuzz");
  } 
  if ((i+1)%7==0 && (i+1)%5!=0 && (i+1)%3!=0) {
    console.log("Woof");
  } 
  else{
    console.log(i+1);
  }
  };