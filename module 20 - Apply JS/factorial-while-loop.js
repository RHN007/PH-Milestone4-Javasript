// function getFactorial(number) {
//   let factorial = 1;
//   let i = 1;
//   while (i <= number) {
//     factorial = factorial * i;
//     i++;
//   }
//   return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// function getFactorial(number) {
//   let factorial = 1;
//   let i = number;

//   while (i >= 1) {
//     factorial = factorial * i;
//     i--;
//   }
//   return factorial;
// }

// const myFactorial = getFactorial(5);
// console.log(myFactorial);

//for loop reverse

function getFactorial2(number) {
  let factorial = 1;
  for (let i = number; i >= i; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

const myFactorial2 = getFactorial2(6);
console.log(myFactorial2);