let name = "Marco";
let age = 20;
let hasHobbies = true;
let Gender = "Male";

const nameThatCannotChange = "Marco";
const GenderThatCannotChange = "Male";

if (hasHobbies) {
  console.log("I have hobbies");
}

if (age > 20) {
  console.log("You are not a teenager.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else if (age >= 9 && age <= 12) {
  console.log("You are preadolescent.");
} else {
  console.log("You are a child.");
}

console.log(name);
console.log(age);
console.log(hasHobbies);

console.log(`My name is ${name} and I am ${age} years old and my gender is ${Gender}.`);

let hobbies = ["Basketball", "ML", "Bike"];

console.log(hobbies);

// Adding an element to the array
hobbies.push("Dota");

console.log(hobbies);

// Mapping array
hobbies = hobbies.map(hobby => hobby + " it's addicting");

console.log(hobbies);

// Object declaration
let person = {
  name: "Marco",
  age: 20,
  Gender: "Male",
  hasHobbies: true,
  greet() {
    console.log("Hello, I am " + this.name);
  }
};

console.log(person.name); // Output: Marco
console.log(person.age); // Output: 20
console.log(person.Gender); // Output: Male
console.log(person.hasHobbies); // Output: true

// Function declaration
function myFunction() {
  console.log("Kon'nichiwa");
}
myFunction(); // Output: Kon'nichiwa

// Arrow function
const myFunction = () => {
  return "Kon'nichiwa";
};

console.log(myFunction()); // Output: Kon'nichiwa

// Adding parameters
function describeStudent(name, age, Gender) { // This is a function that takes in three parameters/arguments
  console.log("He is " + Gender + ", his name is " + name + " and he is " + age + " years old");
}

describeStudent(name, age, Gender); // Output: He is Male, his name is Marco and he is 20 years old

