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
