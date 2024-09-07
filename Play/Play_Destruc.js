// ? Destructuting object and array 
// sept 2024

const person = {
    name : 'John',
    age: 25,
    hobbies: ['reading', 'cooking'],
    greet:function(){
        console.log('Hello my name is'+this.name+'and I am'+this.age+'years old.');
    }
};

// When to use destructuring 
// Destructuring is a useful when you only need a specific property of an object

// regular function
// regular passing of object
//even though we are passing the whole object, we are only using the name property 
//const printname = (personData) =>{ 
  // console.log(personData.name)  
//}

// ! DESTRUCTING THE OBJECT 
// if  we are only interested in the name property of the object , we can use destructing 
const printName = ({name})=>{
    console.log(name);
}

//we pass the object as an argument to the function 

printName(person);

//! WITH FUNCTION DESTRUCTURING 
const {name,age} = person;
console.log(hobby1,hobby2);

// DESTRUCTURING ARRAY
const hobbies = ['reading','cooking'];
const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);

/* Reminders when using destructuring 
-The property name must match the object property name.
-The property name must be enclosed in curly braces.
-The property name must be followed by a colon.
*/ 