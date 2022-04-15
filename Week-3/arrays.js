// arrays 

const arr = [ 100, true, "Jeff Haupt", 3.14, -100, 0, null, 5, "Thursday", "7:15PM" ] //these items can be anything 
// console.log(arr); 
// log array 0: 100, 1: true, 2: "Jeff Haupt", 3:3.14 -- first number references the index 
console.log(arr[1]); // 1 gets us the second item in the array
console.log(arr[50]); // prints "undefined" to the console.
//all arrays start at 0
console.log(arr[0]);

let length = arr.length; // gives us 4
// console.log(length);
console.log(arr[length - 1]) // the -1 is to take into effect the count starting at 0;
console.log(arr.slice(-2)); // returns the last element of the array, but as an array itself 

// push items to an array
// let newArray = [];
// for ( let i = 0; i < 5; i++ ) {
//     let randomWords = prompt("Enter a random word: ");
//     newArray.push(randomWords); // add the user entered word to the end of the array
//     console.log(newArray);
// }

// let numArray = [];
// for ( let i = 0; i < 5; i++ ) {
//     let randomNums = parseInt(prompt("Enter a random number: "));
//     numArray.unshift(randomNums); // add the user entered word to the beginning of the array
//     console.log(numArray);
// }

// // remove items 

// // pop() // takes the last item of the array
// let lastNum = numArray.pop();
// console.log(lastNum);

// // shift() // grabs the first item of the array
// let firstNum = numArray.shift();
// console.log(firstNum);

// nested arrays 

let nestedArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(nestedArray[1][0]); // return number 4 to the console // first number references the outer array and the second is the inner array
