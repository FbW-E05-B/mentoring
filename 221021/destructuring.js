const myArray = [ 9, 4, 2,      0 ]
const           [ a, b, george, c, ...rest ] = myArray

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("george:", george);
console.log("rest:", rest);
console.log("")

const           [ g, h, ...more ] = myArray
console.log("g:", g);
console.log("h:", h);
console.log("more:", more);

const x = 3
const y = x

const myObject = {
  a: 100,
  b: 43,
  seymour: -1234
}

const { a: A, b: B, seymour: C } = myObject
console.log("A:", A);
console.log("B:", B);
console.log("C:", C);
// console.log("seymour:", seymour);