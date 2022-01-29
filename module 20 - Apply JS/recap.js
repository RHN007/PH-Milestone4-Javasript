var time = "10:15pm";
var bookPrice = 45;
var isWhiteColor = false;

//array

var partners = ["sajid", "mojid", "najid", "lasjid"];
var elementCount = partners.length;
var nodjidIndex = partners.indexOf("nojid");
partners.push("kajid");
partners.pop();

//conditonals

if (bookPrice < 120) {
  console.log("I will buy this book");
} else {
  console.log("mama, kichi discount den na , apni na mama ");
}
// loop

var i = 0;
while (i <= 17) {
  i++;
}

for (var i = 0; i <= 17; i++) {}

//function '

function isMoonUp(time) {
  if (time > 19 && time <= 5) {
    return true;
  }

  return false;
}
var moonStatus = isMoonUp(21);
console.log(moonStatus);

// let const

//value of variable could change
let price = 27;
price = 29;
price = 31;

//Value of variable will not change
const name = "Bagladesh";
console.log(name);
