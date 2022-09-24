// "use strict"

const x = undefined
const o = {}
var y = 1
let z = 2

// x.push(8)
// x[3] = "three"
z = 3

o.key = "value"
a = 4

let word = "hat"
word[2] = "m"

console.log("x:", x, "y:", y, "z:", z, "a:", a, "o:", o, "word:", word);

function doSomething() {
  const a = 5
  console.log("a in function:", a);
  const x = 50
  console.log("x in function:", x);
}

doSomething()
