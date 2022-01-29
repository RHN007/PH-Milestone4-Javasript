function addTwoNumbers(number1, number2) {
  console.log(number1, number2);
  //   console.log(number2);
  var total = number1 + number2;
  return total;
}

var firstNumber = 35;
var secondNumber = 47;

var result = addTwoNumbers(secondNumber, firstNumber);

console.log("result Value", result);

//Multiplication

function multiplyTwoNumbers(num1, num2) {
  var total = num1 * num2;
  return total;
}

var result = multiplyTwoNumbers(7, 7);
console.log("total after Multiplication", result);

// Deduction

function deduction(num1, num2) {
  var result = num1 - num2;
  return result;
}

var total = deduction(100, 35);
console.log("total after deduction", total);

//Divide Function

function division(num1, num2) {
  var result = num1 / num2;
  return result;
}

var total = division(100, 5);
console.log("Total after division", total);
