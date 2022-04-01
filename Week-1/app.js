// alert("This is connected!");

// variable declaration 
var num1 = 10;
let num2 = 10;
const num3 = 10; //const cannot be reassigned 

// num3 = 20; // this is going to throw error
// console.log(num3); //TypeError - you cannot change a CONST

console.log(num1);
console.log(num2);

// <-- JavaScript comment -- VS Code shortcut is ctrl + / and for Macs cmd + / (maybe???)

num1 = 20;
num2 = 20;

console.log(num1); // this throws no error
console.log(num2); // this also

// Java variable declaration - int num1 = 10; cannot "Jeff", 10.32, no arrays 
//JavaScript loosely typed - don't have to declare variable types 

num1 = "Jeff" 
console.log(num1);
num1 = 3.14;
console.log(num1);
//strings, numbers, booleans, Objects, arrays, floats - I can overwrite num1 with any of these 

num1 = true;
console.log(typeof num1);
num1 = "JavaScript is fun!";
console.log(typeof num1);
num1 = 3.14;
console.log(typeof num1);
num1 = 10; 
console.log(typeof num1);

// JavaScript operations 

// PEMDAS - paranthesis, exponents, multiplication, division, addition, and subtraction 

console.log(5 +5);
let num4 = num1 * num3; // 10 x 10 = 100 <-- the 100 is what is assigned to num4
console.log("The value of num4 = num1 x num3 " + num4); // this is concatenation 
console.log("num4 divided by 25 = " + num4/25);

let x, y, z; // shortcut to declare multiple variables
console.log(y);//undefined 
y = 5;
x = 10;
z = y - x; // z = 5 - 10 // so z then equals -5
console.log(`${y} - ${x} = ${z}`); // Don't worry we get into this more in Week 3

let salesTax = .07;
let subTotal = 154.38;
let total = (salesTax * subTotal) + subTotal;
console.log('Your final total is: ' + total.toFixed(2)); // look up .toFixed()

let newTax = prompt("What is your sales tax rate");
console.log(newTax);

