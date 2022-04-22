// // var example = "This is the first declaration";
// // console.log(example);
// // var example = "This is the second declaration";
// // console.log(example);

// // const example = "The first declaration"
// // console.log(example);
// // // example = "The second declaration";
// // // console.log(example);

// const person = {
//     name: "Jeff",
//     job: "Developer"
// };

// // person.name = "Michael";
// // console.log(person);

// // let newHTML = '<img src="photos/main-image.jpg alt="main image text">' + var1 + '<p>Some text...</p>'

// // let differentHTML = `<img src="photos/main-image.jpg alt="main image text">
// //  ${var1}
// //  <p>Some text...</p>`

// let message = `Hi, my name is ${person.name}. I currently work as a ${person.job}.`;
// console.log(message);

// let oldMessage = "Hi, my name is " + person.name + ". I currently work as a " + person.job + ".";
// console.log(oldMessage);

// let equation = `If I add 5 + 5, what will be the total? ${5 + 5}`;
// console.log(equation);

// let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// for (let num of arr) {
//     if (num % 4 === 0) {
//         console.log(`currently, the variable num=${num} and it is divisible by 4`);
//     }
    
// }

let students = ['Ryan', 'Natalie', 'Gloria', 'Derek', 'Gus', 'Liv', 'Rebekah'];

let lenOfNames = students.map( function(name) {
    return name.length;
});

console.log(lenOfNames);

let lengthOfNames = students.map( (name) => name.length); // this is a callback function
console.log(lengthOfNames);

function newFunction ( x, y ) {
    // ... do things ...
    return x * y;
}

let z = newFunction( 2, 3 );
console.log(z);
let newXY = (x, y) => x * y;
console.log(newXY(2,3));

// this is okay too 
let four = () => 2 * 2; // parameter isn't necessary
console.log(four());