// Puede también reemplazar cada quinto número con Buzz, y cada número que cumple ambas condiciones con FizzBuzz

for (let i = 0; i < 105; i++) {
  if((i+1)%3==0 && (i+1)%5!=0){
    console.log("Fizz");
  }
  if ((i+1)%3!=0 && (i+1)%5==0) {
    console.log("Buzz");
  }
  if ((i+1)%3==0 && (i+1)%5==0) {
    console.log("FizzBuzz");
  } 
  else{
    console.log(i+1);
  }
  };