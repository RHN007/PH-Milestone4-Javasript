var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 101;
var packedWell = false;

// if (danishPrice < myBudget) {
//   console.log("Danish kyeye danish jabo");
// } else if (butterBreadPrice < myBudget) {
//   console.log("Butter bon diye cha khamu");
// } else if (toastBiscuitPrice < myBudget) {
//   console.log("toast biscuit khamu");
// } else {
//   console.log("batasha diya khamu");
// }

if (danishPrice < myBudget) {
  if (packedWell == true) {
    console.log("Danish Khamu");
  } else {
    console.log(
      "Danish Khamu na Karon ami khawar age machi kehye felse oredek"
    );
  }
}
