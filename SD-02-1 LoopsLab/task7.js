// Cómo podría intentar sustituir una secuencia de números primos impares por una nueva palabra en una lista o array
const prompt = require("prompt-sync")();
let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];
  const isPrime = (num) => {
  const boundary = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= boundary; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num >= 2;
};
  for (let i = 1; i < 105; i++) {
      if (isPrime(i)) {
      let n = Math.floor(Math.random()*buzzWords.length);    
      console.log(buzzWords[n]);
    }else{
      console.log(i);
    }
  };