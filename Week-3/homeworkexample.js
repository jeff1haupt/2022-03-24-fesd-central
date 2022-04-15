// 1c c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// reduce 

let sum = ages.reduce( function (acc, curr) {
    return acc + curr;
})
let totalAges = ages.length;
console.log( sum / totalAges );

// for of loop 

let sum2 = 0;
for (let age of ages) {
    sum2 += age;
}
console.log( sum2/ages.length);

// 7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

// function declaration 
function concateNTimes (word, n) {
    let concateWord = ''; // holder for the word repeated over and over 
    for ( let i = 0; i < n; i++ ) {
        concateWord += word;
    }
    return concateWord;
}

let repeatedWord = concateNTimes('JavaScript', 15);
console.log(repeatedWord);