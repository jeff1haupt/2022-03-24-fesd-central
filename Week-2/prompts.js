let randomGuess = prompt("Enter a number between 1 and 10");
console.log(typeof randomGuess); // all prompt values come back as strings
if ( parseInt(randomGuess) > 5) { //parseInt converts strings to numbers
    console.log("Your number is greater than 5")
} else {
    console.log("Your number is 5 or less");
}

let password = "";
do {
    password = prompt("Enter your password");
} while(password.length < 1);
