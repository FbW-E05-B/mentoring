// Operators
// + - * / % -- remainder "modulus"

// const rectangle = {
//   length: 3,
//   height: 4
// }

"use strict"

// undeclaredVariable = 10
const height = 3.1
const length = 4
const area = height * length
console.log("area:", area);

const percentage = height * 100 / 4 + "%"
console.log("percentage:", percentage);
console.log(typeof percentage)
console.log(typeof (percentage * 1))
console.log(parseInt(percentage)) // integer
console.log(typeof parseInt(percentage))

const x = 42.3
const y = 10
console.log("x % y:", x % y);
// console.log("y % x:", (y / x), "=", parseInt(y / x), "+", y % x);
