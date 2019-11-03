var epicodusStudent = {
  firstName: "Charlie",
  lastName: "Bucket",
  level: 1,
  track: ["PHP", "Javascript", "Drupal"],
  enrollmentStatus: true
};

console.log(epicodusStudent.firstName);
console.log(epicodusStudent.level + 10);
console.log(epicodusStudent.track[2]);


var cat = {
  name: "Kitty Poppins",
  speak: function() {
    console.log("Meow!");
  }
};

console.log(cat.name);
console.log(cat['name']);
console.log(cat["name"]);
console.log(cat.speak());
console.log(cat['speak']());

var testGreeting = new String;

var testGreeting2 = new String("Hello!");
// testGreeting2
