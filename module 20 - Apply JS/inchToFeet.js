function inchToFeet(inches) {
  var feet = inches / 12;
  return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log("myInches in feet", feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log(feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log(feet);

var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log(feet);

//mile to kilometer

function mileToKilometer(miles) {
  var km = miles * 1.6093;
  return km;
}

var marathon = mileToKilometer(26.2);
console.log("marthon in km:", marathon);
