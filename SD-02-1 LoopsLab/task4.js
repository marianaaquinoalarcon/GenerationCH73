// Puede continuar el patrón reemplazando también cada séptimo número con Woof, junto con las otras condiciones

for (let i = 0; i < 105; i++) {
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