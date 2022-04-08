// > Greater than 
// < Less than 
// >=, <= 
// == equals, === strictly equals -- in javascript 5 == '5' returns true -- 5 === '5' returns false 
// did user enter the right password -- pw == user.password 
// && AND || OR  
// 5 > 2 && 10 < 50 -> would evalute to true because both sides are true 
// 5 > 2 && 10 > 50 -> now false, because one side is false 
// 5 > 2 || 10 > 50 -> returns true, because one evaluates to true

// if ( 5 < 2 ) {
//     console.log("5 is greater than two"); // this only prints if the statement in the paranthesis is true
// }

// let totalSales = 120000; // this will be false - the code in the else statement will run instead
// if ( totalSales >= 125000 ) {
//     let bonus = totalSales * .04; // the two let bonus deal with function scope
//     console.log("Your monthly 4% bonus is " + bonus.toFixed(2)) // toFixed(n) is a built in JavaScript method
// } else {
//     let bonus = totalSales * .03; // this let statement has no idea the other one exists 
//     console.log("Your monthy 3% bonus is " + bonus.toFixed(2))
// }

// console.log(bonus); // bonus doesn't know about the ones in the if/else code block - SCOPE

// if/else-if/else 

// let customerTotal = 150.04;
// let customerTotal = 24.88;
// let customerStatus = "Gold";
// // let customerTotal = 75.91;
// // let customerTotal = 103.44;

// // shopper discount that the percentage changes based on the amount spent

// if ( customerTotal >= 150 || customerStatus == "Gold" ) { // if true customer gets a 15% discount
//     console.log("Customer's 15% discount is " + (customerTotal * .15).toFixed(2));
// } else if ( customerTotal >= 100 ) { // if true customer gets a 10% discount
//     console.log("Customer's 10% discount is " + (customerTotal * .10).toFixed(2));
// } else if ( customerTotal >= 50 ) { // if true customer gets a 10% discount
//     console.log("Customer's 5% discount is " + (customerTotal * .05).toFixed(2));
// } else { // if all above are false, this executes
//     console.log("Customer's total doesn't qualify for discount");
// }

// let grade = 'B';
// switch (grade) {
//     case 'A':
//         console.log("You received an A");
//         break;
//     case 'B':
//         console.log("You received a B");
//         break;
//     case 'C':
//         console.log("You received a C");
//         break;
//     case 'D':
//         console.log("You received a D");
//         break;
//     default:
//         console.log("You did not pass the class")
// }

let taxRate = 0;
let stateOfTax = 'IN';
switch (stateOfTax) {
    case 'IN':
    case 'OH':
    case 'TN':
        taxRate = .075
        break;
    case 'CA':
    case 'NY':
        taxRate = .09;
        break;
    case 'WI':
        taxRate = .08;
        break;
    default:
        taxRate = .07;
}

console.log(taxRate);