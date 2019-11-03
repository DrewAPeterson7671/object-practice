var testGreeting2 = new String("Hello!");

String.prototype.addExcitement = function() {return this + "!!!!!!"};

var newGreeting = "Hola";


console.log(testGreeting2);
console.log(testGreeting2.addExcitement());
console.log(newGreeting.addExcitement());
