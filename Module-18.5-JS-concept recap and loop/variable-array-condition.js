var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// Array

var items = ["bottle", "mug", "paper", "pen"];
items.indexOf("paper"); // -1
items.push("envolope");
items.push("watch");
items.pop();

// Conditionals

if (items.lenght >= 4) {
  console.log("you have too many stuff on your desk");
} else if (items.lenght == 4) {
  console.log("You only have one hali items");
} else {
  console.log("WOW you have a clean desk ");
}
