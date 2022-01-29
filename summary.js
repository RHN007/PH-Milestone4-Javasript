var skyColor = "white";

var phones = ["iphone", "shomi", "samsung", "lg", "htc"];

phones[3] = "walton";

// Check an element(oppo) not exist in an array

if (phones.indexOf("oppo") == -1) {
  console.log("opps AAmir khan oppo is missing");
}

//if LG is avaiable
if (phones.indexOf("lg") != -1) {
  console.log("lg is avaiable now");
}

//loop

var num = 0;
while (num <= 10) {
  num++;
}

for (var i = 0; i < phones.length; i++) {}

//function

function addThreeNumbers(num1, num2, num3) {
  var total = num1 + num2 + num3;
  return total;
}

var sum = addThreeNumbers(45, 34, 23);
console.log(sum);

//object

var microphone = {
  brand: "blue yeit",
  prici: 120,
  color: "black",
};

var mahiya = { mahi: "hate" };
// mahiya[mahi] = "agnee 2";
mahiya.mahi = "love";
console.log(mahiya);

var smartphone = { brand: "iPhone", model: "13" };
console.log(smartphone.brand);
console.log(smartphone["brand"]);

function getReminder(number1, number2) {
  var result = number1 % number2;
  return result;
}

const reminder = getReminder(12, 3);

console.log(reminder);

function addNumber(number1, number2) {
  return "Result is " + number1 + number2;
}

var result = addNumber(5, 4);
// console.log(result);
