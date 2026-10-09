// Se pueden asignar los números de salida de una secuencia generada a elementos de una lista o array

const secuencia=[];  
for (let i = 0; i < 105; i++) {
  if((i+1)%3==0 && (i+1)%5!=0 && (i+1)%7!=0){
    secuencia[i] = "Fizz";
  }
  if ((i+1)%3!=0 && (i+1)%5==0 && (i+1)%7!=0) {
    secuencia[i] = "Buzz";
  }
  if ((i+1)%3==0 && (i+1)%5==0 && (i+1)%7!=0) {
    secuencia[i] = "FizzBuzz";
  } 
  if ((i+1)%7==0 && (i+1)%5!=0 && (i+1)%3!=0) {
    secuencia[i] = "Woof";
  } 
  else{
    secuencia[i] = (i+1);
  }
  };
  console.log(secuencia);