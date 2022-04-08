// while loop 
// for loop
// for-of loop
// for-in loop
// do-while loop

// let counter = 0;
// while(counter < 10) {
//     console.log("The counter is running because counter is equal to " + counter + " which is less than 10");
//     counter++; // <-- DO NOT FORGET TO INCREMENT
//     // this code will only run so long as what's in the counter is true;
// }

// let i = 5
// do { // this code will run no matter if the while condition is FALSE
//     console.log("The value of i is " + i)
// } while ( i < 4 );

// while ( i < 4 ) { // The while condition has to be TRUE for the code to run at all
//     console.log("The value of i is " + i)
// }

// for ( let i = 0; i < 10; i += 2 ) { // let i = 0 happens before anything else BUT only once; then check condition i < 10; as long as it's true, you run the code in the curly brackets; after the code is run i++ is executed
//     console.log("This is just like the while loop, except it's a for loop");
//     console.log(i);
// }

let arr = [ 3, 5, "Jeff", true]; 
for (let i of arr) {
    console.log(i); // returns each value in an array
}

for (let j in arr) {
    console.log(j); // this returns the index of the array
}