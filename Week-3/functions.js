// function with no return

function ourFirstFunction () { // syntax is the function keyword; the name of the function; paranthesis; and curly braces
  // do things
}

// function declaration - JavaScript loads these in its memory and is aware that they exist 
function sayHi (name) {  // we can reuse this over and over 
    alert("Hello " + name);
}

// function call
// sayHi(); // JS will only execute the function when you call it
// sayHi(prompt("Enter a name: "));



// functions with a return 


// function with one parameter 

function oldEnoughToVote (age) { // age is a "parameter" and represents a variable within the function
    // console.log(age);
    if ( age >= 18 ) {
        return true;
    } else {
        return false;
    }
}

// call the function with a parameter - we pass an argument to the function call:
console.log(oldEnoughToVote(41)); // 41 is an argument that gets stored in the parameter "age" 
console.log(oldEnoughToVote(9));
// let ages = [50, 15, 32, 79, 11];
// oldEnoughToVote(ages);

// function with multiple parameters 

function discountStatus ( total, frequentCustomer ) {
    if ( total > 100 && frequentCustomer == true ) {
        return total * .1
    } else {
        return 0;
    }
}

let discount1 = discountStatus( 145, true);
let discount2 = discountStatus( 75, true );
let discount3 = discountStatus( 110, false);

console.log(discount1, discount2, discount3);