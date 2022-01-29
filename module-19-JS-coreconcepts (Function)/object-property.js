var computer = {
  price: 29000,
  storage: "156gb",
  processor: "intel i5",
};

console.log(computer);
console.log(computer.processor);

var computerPrice = computer.price;

console.log(computerPrice);

//Set a object property value

computer.price = 22000;
console.log(computer);

//Different ways to set a value of an object property

var PriceProperty = "price";

computer.price = 22000;
computer["price"] = 23000;
computer[PriceProperty] = 19000;

var storageProperty = "storage";
computer[storageProperty] = "512gb";

computer["storage"] = "1 Tb";

computer.storage = "5 Tb ";
console.log(computer);
