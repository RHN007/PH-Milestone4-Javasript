var tableLenght = 12;
var tourDestination = ["coxsbazar", "nepal", "vutan", "paris"];

tourDestination.indexOf("vutan");

var fourthDestination = tourDestination[3];
tourDestination[1] = "srilanka";

tourDestination.push("london");
tourDestination.pop();

if (tourDestination[1] == "nepal") {
  console.log("phara ahare ahare");
} else if (tourDestination[1] == "china") {
  console.log("Chaina tor khache jamuna");
} else if (tourDestination.length == 4) {
  console.log("aro taka ase aro beshi ghurmu");
} else {
  console.log("kothao Jamuna ran o khamu na ");
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
  console.log("ami dim khamu");
}

if (eggPrice >= myBudget) {
  console.log("lebu diye vat khamu");
}
