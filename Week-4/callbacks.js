function sayHello() {
    alert('Hello class!');
}

setTimeout( sayHello, 4000); // this is in milliseconds

// think of the map method, filter method, reduce method - ALL HAVE CALLBACKS

let nums = [1, 2, 3, 4, 5, 6, 7];

let evens = nums.filter( (num) => num % 2 === 0 ); // (num) => num % 2 === 0 IS A CALLBACK
console.log(evens);

