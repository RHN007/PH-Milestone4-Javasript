// const number = 4;

// const remainder = number % 2;

// console.log(remainder == 0);

const number = 145;
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);

const herNumbrt = 1892;
const isHerNumberEven = isEven(herNumbrt);

console.log("is her number even", isHerNumberEven);

// is odd function
function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  }
  return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log("is my number odd", isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumbrt);
console.log("Is her number odd", isHerNumberOdd);
