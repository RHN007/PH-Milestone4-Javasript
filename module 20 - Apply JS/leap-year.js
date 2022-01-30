function isLeapYear(year) {
  //   if (year % 4 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

const myYear = 2000;
const isMyYearLeapYear = isLeapYear(myYear);
console.log("Is my year leap year", isMyYearLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log("Is you year leap year", isYourYearLeapYear);
