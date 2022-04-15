// map 
let agesArray = [ 21, 44, 58, 32, 9, 100, 8];

let oneYearOlder = agesArray.map( function (age) {
    return age + 1;
});

// map function creating a new array of values 
// console.log(agesArray);
// console.log(oneYearOlder);

// let sales = [100.54, 66.12, 9.95, 180.44, 76.11, 111.25];
// let salesTax = sales.map( function (sale) { // sale is a parameter sale = 100.54 or sale = 66.12 or sale = 9.95
//     // map iterates through all of the array items // sale represents each individual array item
//     let tax = sale * .075;
//     return tax.toFixed(2);
// });

// sales.map( function (sale, index) {
//     console.log(sale);
//     console.log(index);
// })
// // console.log(salesTax);
// for ( let s of sales ) {
//     console.log(s);
// }


// reduce 
// let salesTotal = sales.reduce( function (currentSum, currentArrayElement)  {
//     console.log(currentSum);
//     console.log(currentArrayElement);
//     return currentSum + currentArrayElement;
// });

// let sum = 0;
// for ( let s of sales ) {
//     sum += s;
// }
// console.log(salesTotal);
// console.log(sum);



// filter 
let sales = [102, 66.12, 9.95, 180, 76.11, 111, 180];

let salesOver100 = sales.filter( function (sale) {
    if ( sale > 100 && sale % 2 == 0) {
        return sale;
    }
})

console.log(sales);
console.log(salesOver100);

// forEach 
let newArray = []
sales.forEach( function (s) { // forEach doesn't return values to an array, it's a for loop
    newArray.push(s * .85);
})
console.log(newArray);

// splice 

let getIndex = sales.indexOf(180); // returns first value of the index of the array
let last = sales.lastIndexOf(180);
console.log(getIndex);
console.log(last);
// let removedItems = sales.splice(getIndex, 1); // first number is the index to start at and 2nd number is how many items to remove
// console.log(removedItems);
// console.log(sales);