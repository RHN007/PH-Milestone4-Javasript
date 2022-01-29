var color = "yellow";

if (color == "blue") {
  console.log("color is blue ");
} else if (color == "red") {
  console.log("color is red");
} else if (color == "green") {
  console.log("color is green");
} else if (color == "yellow") {
  console.log("color is yellow");
} else "color is black";

switch (color) {
  case "blue":
    console.log("color is blue");
    break;
  case "red":
    console.log("color is red");
    break;
  case "green":
    console.log("color is green");
    break;
  default:
    console.log("Sorry we are out of expression");
}
