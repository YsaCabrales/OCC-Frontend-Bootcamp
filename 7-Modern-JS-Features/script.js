// Arrow function
const greet = () => {
    console.log("Merry Christmas!");
}
greet();

// Enhanced object literals
const person = {
    name: "Ron",
    age: 21,
    greeting() {
        console.log(`My name is ${this.name}.`);
    }
}

person.greeting();

// Spread and Rest operators
// Spread
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Rest
function myFunction(firstArg, ...restOfArgs){
    console.log(firstArg);
    console.log(restOfArgs);
}

myFunction('one', 'two', 'three', 'four');

// Common JS Built-in Methods
// Arrays
// Filter
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers2.filter((number) => number % 2 == 0);
console.log(even);

const oddNumbers = numbers2.filter(num => num % 2 != 0);
console.log(oddNumbers);

// String
// Split
const message = "Hello Universe Hi";
const words = message.split(" ");
console.log(words);

// Includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// Length
const sentenceLength = sentence.length;
console.log(sentenceLength);

// Objects
const cat = {
    name: "Chicha",
    age: 3,
    color: ["Black", "White"]
}

// Keys
console.log(Object.keys(cat));

// Values
console.log(Object.values(cat));

console.log(cat);

// Entries
console.log(Object.entries(cat));

// Math
// max and min
const maxNumber = Math.max(10, 5, 20, 30);
console.log(maxNumber);

const minNumber = Math.min(10, 5, 20, 30);
console.log(minNumber);

// random
const randomValue = Math.random() * 10;
console.log(randomValue);

// round
console.log(Math.round(randomValue));

// floor
console.log(Math.floor(randomValue));

// ceil
console.log(Math.ceil(randomValue));

// Nested Math Methods
const randomNumber = Math.floor(Math.random() * 100)
console.log("Random number between 1 and 100:", randomNumber);

// Other methods
// Date
// const currentDate = new Date();
// console.log(currentDate);

// const christmas = new Date(2023, 11, 25);
// console.log(christmas);

// toFixed
const price = 100.12345.toFixed(4);
console.log(price);

// toString
const num = 38;
const parsedString = num.toString();
console.log(parsedString + 1);
