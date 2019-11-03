function Dog(name, colors, age) {
  this.name = name;
  this.colors = colors;
  this.age = age;
}

var myPuppy = new Dog("Ernie", ["brown", "black"], 3);

// myPuppy.speak = "Bark!";

console.log(myPuppy);

var falcor = new Dog("Falcor", ["black"], 4);
var nola = new Dog("Nola", ["white", "black"], 6);
var patsy = new Dog("Patsy", ["brown"], 7);

console.log(falcor.name);
console.log(nola.age);
console.log(patsy.colors);


Dog.prototype.speak = function() {
  console.log("Woof!");
}

console.log(myPuppy.speak());

Dog.prototype.humanYears = function() {
  return this.age * 7;
}

console.log(nola.humanYears());
console.log(myPuppy.humanYears());

var newPuppy = new Dog("Goliath", ["gray"], 2);
console.log(newPuppy.speak());
console.log(newPuppy.humanYears());
